// DSA Patterns Hub — GSAP Interactive Mind Map Logic
(function () {
  "use strict";

  // ===== STATE =====
  const STORAGE_KEY = "dsa-hub-progress";
  let solvedSet = new Set();

  // Constants for map layout
  const MAP_SIZE = 4000;
  const CENTER_X = MAP_SIZE / 2;
  const CENTER_Y = MAP_SIZE / 2;
  const MIN_RADIUS = 500;
  const RADIUS_STEP = 350; // spread nodes out dynamically

  // ===== PERSISTENCE =====
  function loadProgress() {
    try { solvedSet = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")); }
    catch { solvedSet = new Set(); }
  }
  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...solvedSet]));
    updateGlobalProgress();
  }
  function problemKey(patternId, problemName) { return patternId + "::" + problemName; }

  // ===== GLOBAL PROGRESS =====
  function getTotalStats() {
    let total = 0, solved = 0;
    PATTERNS.forEach(pat => {
      pat.problems.forEach(group => {
        group.list.forEach(prob => {
          total++;
          if (solvedSet.has(problemKey(pat.id, prob.name))) solved++;
        });
      });
    });
    return { total, solved };
  }
  function getPatternStats(pat) {
    let total = 0, solved = 0;
    pat.problems.forEach(group => {
      total += group.list.length;
      group.list.forEach(prob => {
        if (solvedSet.has(problemKey(pat.id, prob.name))) solved++;
      });
    });
    return { total, solved };
  }
  function updateGlobalProgress() {
    const { total, solved } = getTotalStats();
    const el = document.getElementById("globalProgress");
    if (el) {
      el.querySelector(".progress-pill-count").textContent = solved;
      el.querySelector(".progress-pill-total").textContent = total;
    }
  }

  // ===== ROUTER =====
  function route() {
    const hash = location.hash || "#/";
    const main = document.getElementById("appMain");

    // Clear GSAP triggers/draggables if they exist on route change
    if (window.mapDraggable) {
      window.mapDraggable[0].kill();
      window.mapDraggable = null;
    }

    if (hash.startsWith("#/pattern/")) {
      const id = hash.replace("#/pattern/", "");
      renderDetail(main, id);
    } else if (hash === "#/search") {
      renderSearch(main);
    } else {
      renderHome(main);
    }
    updateGlobalProgress();

    // Smooth scroll to top only for non-map pages
    if (hash !== "#/") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ===== RENDER: HOME (EXPLICIT DAG MAP) =====
  function renderHome(container) {
    const { total, solved } = getTotalStats();

    // Explicit dependencies (Parent -> Children)
    const GRAPH_LINKS = {
      "masterNode": ["arrays-hashing"],
      "arrays-hashing": ["two-pointers", "stack"],
      "two-pointers": ["sliding-window", "linked-list", "binary-search"],
      "sliding-window": ["intervals"],
      "binary-search": ["trees"],
      "linked-list": ["trees"],
      "stack": ["1-d-dynamic-programming", "trees"],
      "trees": ["tries", "heap-priority-queue", "backtracking"],
      "heap-priority-queue": ["greedy"],
      "backtracking": ["graphs"],
      "graphs": ["advanced-graphs", "matrix-2d-arrays"],
      "matrix-2d-arrays": ["2-d-dynamic-programming"],
      "1-d-dynamic-programming": ["2-d-dynamic-programming", "bit-manipulation"],
      "math-geometry": [], // Will attach to master or leave floating near bit
      "bit-manipulation": ["math-geometry"],
      "strings": [] // Will attach to arrays-hashing
    };

    // Override generic links for missing items
    GRAPH_LINKS["arrays-hashing"].push("strings");

    // Assign fixed X, Y grid coordinates to avoid crossover nightmare
    // Grid: X_COL * 450, Y_ROW * 250
    const NODE_GRID = {
      "masterNode": { col: 0, row: 4 },
      "arrays-hashing": { col: 1, row: 4 },
      "strings": { col: 2, row: 1 },
      "two-pointers": { col: 2, row: 3 },
      "stack": { col: 2, row: 6 },
      "sliding-window": { col: 3, row: 2 },
      "binary-search": { col: 3, row: 3 },
      "linked-list": { col: 3, row: 4 },
      "1-d-dynamic-programming": { col: 3, row: 7 },
      "intervals": { col: 4, row: 2 },
      "trees": { col: 4, row: 5 },
      "bit-manipulation": { col: 4, row: 8 },
      "tries": { col: 5, row: 3 },
      "heap-priority-queue": { col: 5, row: 5 },
      "backtracking": { col: 5, row: 6 },
      "math-geometry": { col: 5, row: 8 },
      "greedy": { col: 6, row: 5 },
      "graphs": { col: 6, row: 7 },
      "advanced-graphs": { col: 7, row: 6 },
      "matrix-2d-arrays": { col: 7, row: 8 },
      "2-d-dynamic-programming": { col: 8, row: 7 }
    };

    const X_START = 400;  // Viewport offset
    const X_STEP = 450;
    const Y_START = CENTER_Y - 1200; // Center offset to match row 4 near equator
    const Y_STEP = 300;

    // Build flattened node data with pixel coordinates
    const nodes = [];
    const masterPos = { x: X_START, y: Y_START + (4 * Y_STEP) }; // col 0, row 4

    PATTERNS.forEach(pat => {
      const grid = NODE_GRID[pat.id];
      if (!grid) return; // Error fallback

      nodes.push({
        pat,
        x: X_START + (grid.col * X_STEP),
        y: Y_START + (grid.row * Y_STEP),
        delay: grid.col * 0.1
      });
    });

    // Generate specific SVG paths based on GRAPH_LINKS
    const svgPaths = [];
    let pathId = 0;

    Object.entries(GRAPH_LINKS).forEach(([parentId, children]) => {
      let parentX, parentY;

      if (parentId === "masterNode") {
        parentX = masterPos.x + 150; // shift right to edge of master card
        parentY = masterPos.y;
      } else {
        const parentNode = nodes.find(n => n.pat.id === parentId);
        if (!parentNode) return;
        parentX = parentNode.x + 130;  // shift right to edge of pattern card
        parentY = parentNode.y;
      }

      children.forEach(childId => {
        const childNode = nodes.find(n => n.pat.id === childId);
        if (!childNode) return;

        const childX = childNode.x - 130; // shift left to edge of child card
        const childY = childNode.y;

        // Custom curve: horizontal for a bit, then vertical, then horizontal
        const midX = (parentX + childX) / 2;

        svgPaths.push(`
          <path class="connection-line" id="line-${pathId++}" 
                d="M ${parentX} ${parentY} C ${midX} ${parentY}, ${midX} ${childY}, ${childX} ${childY}" />
        `);
      });
    });

    // Generate HTML
    container.innerHTML = `
      <div class="mind-map-wrapper" id="mapWrapper">
        <div class="mind-map-canvas" id="mapCanvas">
          
          <!-- SVG Connections -->
          <svg class="mind-map-lines" viewBox="0 0 ${MAP_SIZE} ${MAP_SIZE}">
            ${svgPaths.join("")}
          </svg>
          
          <!-- START / Master Node -->
          <div class="master-node" id="masterNode" style="left: ${masterPos.x}px; top: ${masterPos.y}px;">
            <p style="color:var(--text-muted);font-weight:bold;margin-bottom:0.5rem">START HERE</p>
            <h1>DSA CORE</h1>
            <p>${total} Problems</p>
            <p style="color:var(--lime);font-family:var(--font-code);font-weight:bold;margin-top:8px">${solved} Solved</p>
          </div>

          <!-- Pattern Nodes -->
          ${nodes.map(n => {
      const stats = getPatternStats(n.pat);
      const pct = stats.total ? Math.round((stats.solved / stats.total) * 100) : 0;
      return `
              <div class="pattern-node" id="node-${n.pat.id}" style="left: ${n.x}px; top: ${n.y}px; --card-accent: var(${n.pat.accentVar})" onclick="location.hash='#/pattern/${n.pat.id}'">
                <span class="card-icon">${n.pat.icon}</span>
                <div class="card-name">${n.pat.name}</div>
                <div class="card-count">${stats.total} Problems</div>
                <div class="card-progress-bar"><div class="card-progress-fill" style="width: ${pct}%"></div></div>
                <div class="card-progress-text">${pct}% COMPLETED</div>
              </div>
            `;
    }).join("")}

        </div>
        
        <div class="map-controls">
          <button class="control-btn" id="btnZoomIn">＋ ZOOM IN</button>
          <button class="control-btn" id="btnZoomOut">－ ZOOM OUT</button>
          <button class="control-btn" id="btnCenterMap">◎ START</button>
        </div>
      </div>
    `;

    // Initialize GSAP Draggable and Zoom
    requestAnimationFrame(() => {
      const wrapper = document.getElementById("mapWrapper");
      const canvas = document.getElementById("mapCanvas");

      const ww = wrapper.clientWidth;
      const wh = wrapper.clientHeight;

      // Focus initially on the Master Node
      const startX = (ww / 2) - masterPos.x;
      const startY = (wh / 2) - masterPos.y;

      gsap.set(canvas, { x: startX, y: startY, scale: 1, transformOrigin: "0 0" });
      let currentScale = 1;

      // Create draggable instance
      window.mapDraggable = Draggable.create(canvas, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: {
          minX: -(MAP_SIZE * 2) + ww,
          maxX: MAP_SIZE,
          minY: -(MAP_SIZE * 2) + wh,
          maxY: MAP_SIZE
        },
        inertia: true
      });

      // Zoom functions
      function updateZoom(newScale, originX = ww / 2, originY = wh / 2) {
        newScale = Math.max(0.15, Math.min(newScale, 2)); // Clamp scale

        let state = gsap.getProperty(canvas);
        let curX = state("x");
        let curY = state("y");

        let dx = (originX - curX) * (newScale / currentScale - 1);
        let dy = (originY - curY) * (newScale / currentScale - 1);

        currentScale = newScale;

        gsap.to(canvas, {
          scale: currentScale,
          x: curX - dx,
          y: curY - dy,
          duration: 0.3,
          ease: "power2.out",
          onUpdate: () => window.mapDraggable[0].update()
        });
      }

      document.getElementById("btnZoomIn").addEventListener("click", () => updateZoom(currentScale + 0.3));
      document.getElementById("btnZoomOut").addEventListener("click", () => updateZoom(currentScale - 0.3));

      // Mousewheel Zoom
      wrapper.addEventListener("wheel", (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.10 : -0.10; // Smoother delta
        const rect = wrapper.getBoundingClientRect();
        const cursorX = e.clientX - rect.left;
        const cursorY = e.clientY - rect.top;
        updateZoom(currentScale + delta, cursorX, cursorY);
      }, { passive: false });

      // Recenter button
      document.getElementById("btnCenterMap").addEventListener("click", () => {
        currentScale = 1;
        gsap.to(canvas, { scale: 1, x: startX, y: startY, duration: 0.8, ease: "power3.inOut" });
        window.mapDraggable[0].update();
      });

      // Animate Entrance
      const tl = gsap.timeline();
      tl.from("#masterNode", { scale: 0, opacity: 0, duration: 0.4, ease: "back.out(1.5)" });

      // Animate paths independently
      for (let i = 0; i < svgPaths.length; i++) {
        const line = document.getElementById(`line-${i}`);
        if (!line) continue;
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });

        // Calculate a rough delay based on X position to sweep left-to-right
        const bbox = line.getBBox();
        const colDelay = (bbox.x - X_START) / X_STEP * 0.1;
        tl.to(line, { strokeDashoffset: 0, duration: 0.4, ease: "power2.out" }, colDelay);
      }

      // Animate nodes popping in
      nodes.forEach(n => {
        tl.to("#node-" + n.pat.id, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.5)" }, n.delay + 0.2);
      });

      gsap.set('.pattern-node', { scale: 0, opacity: 0 });
    });
  }

  // ===== RENDER: DETAIL (Standard List) =====
  function renderDetail(container, patternId) {
    const pat = PATTERNS.find(p => p.id === patternId);
    if (!pat) return;

    // Reset background to simple depth, container acts as normal flow
    const stats = getPatternStats(pat);

    container.innerHTML = `
      <div class="app-main" id="detailMain">
        <a href="#/" class="detail-back">
          <svg viewBox="0 0 24 24" fill="none" class="feather"><polyline points="15 18 9 12 15 6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
          Back to Map
        </a>

        <div class="detail-header" style="border-color: var(${pat.accentVar})">
          <div class="detail-header-top">
            <span class="detail-icon">${pat.icon}</span>
            <div>
              <h1 class="detail-title" style="color: var(${pat.accentVar})">${pat.name}</h1>
              <div class="detail-meta">
                <span><strong>${stats.solved}</strong>/${stats.total} SOLVED</span>
              </div>
            </div>
          </div>
        </div>

        <div class="detail-explanation">
          <h3>Data Intel</h3>
          <p>${pat.description}</p>
          <p><strong>Primary Vector:</strong> ${pat.keyInsight}</p>
          ${pat.algorithms && pat.algorithms.length ? `
            <div class="algo-section">
              <h3>Key Algorithms</h3>
              <div class="algo-pills">
                ${pat.algorithms.map(a => `<span class="algo-pill" style="border-color: var(${pat.accentVar}); color: var(${pat.accentVar})">${a}</span>`).join("")}
              </div>
            </div>
          ` : ""}
          ${pat.codeTemplate ? `<div class="code-label">Algorithm Basecode</div><div class="code-block"><pre>${escapeHtml(pat.codeTemplate)}</pre></div>` : ""}
        </div>

        <div class="detail-filters" id="detailFilters">
          <button class="filter-pill active" data-filter="all" data-type="difficulty">ALL</button>
          <button class="filter-pill" data-filter="Easy" data-type="difficulty">EASY</button>
          <button class="filter-pill" data-filter="Medium" data-type="difficulty">MEDIUM</button>
          <button class="filter-pill" data-filter="Hard" data-type="difficulty">HARD</button>
        </div>

        <div class="problem-table-wrapper">
          <table class="problem-table" id="problemTable">
            <thead><tr>
              <th style="width:50px"></th>
              <th style="width:50px">#</th>
              <th>Task Identifier</th>
              <th style="width:120px">Diff</th>
              <th style="width:120px">Src</th>
              <th style="width:40px"></th>
            </tr></thead>
            ${(function () {
        let globalIndex = 0;
        return pat.problems.map(group => {
          const rows = group.list.map(prob => {
            const row = renderProblemRow(pat, prob, globalIndex);
            globalIndex++;
            return row;
          }).join("");
          return `
                  <tbody class="algo-group-body">
                    <tr class="algo-group-header">
                      <td colspan="6" style="padding: 1.5rem 1rem 0.5rem; text-align: left; border-bottom: 2px solid rgba(255,255,255,0.05);">
                         <span style="font-family: var(--font-display); font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; color: var(${pat.accentVar}); opacity: 0.9;">
                           // ${group.algorithm}
                         </span>
                      </td>
                    </tr>
                    ${rows}
                  </tbody>
                `;
        }).join("");
      })()}
          </table>
        </div>
      </div>`;

    // Checkbox events
    container.querySelectorAll(".problem-check").forEach(cb => {
      cb.addEventListener("change", e => {
        const key = e.target.dataset.key;
        if (e.target.checked) solvedSet.add(key); else solvedSet.delete(key);
        e.target.closest("tr").classList.toggle("solved", e.target.checked);
        saveProgress();
      });
    });

    // Filters
    container.querySelectorAll("#detailFilters .filter-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        const val = btn.dataset.filter;
        container.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const rows = document.querySelectorAll("#problemTable tr.problem-row");
        rows.forEach(row => {
          row.style.display = (val === "all" || row.dataset.difficulty === val) ? "" : "none";
        });

        // Hide headers if no visible children in that tbody
        document.querySelectorAll("tbody.algo-group-body").forEach(tbody => {
          let hasVisible = false;
          tbody.querySelectorAll("tr.problem-row").forEach(r => {
            if (r.style.display !== "none") hasVisible = true;
          });
          const header = tbody.querySelector("tr.algo-group-header");
          if (header) header.style.display = hasVisible ? "" : "none";
        });
      });
    });
  }

  function renderProblemRow(pat, prob, index) {
    const key = problemKey(pat.id, prob.name);
    const isSolved = solvedSet.has(key);
    const badgeMap = { "Easy": "badge-easy", "Medium": "badge-medium", "Hard": "badge-hard" };

    return `<tr class="problem-row ${isSolved ? "solved" : ""}" data-difficulty="${prob.difficulty}">
      <td><label class="custom-check"><input type="checkbox" class="problem-check" data-key="${key}" ${isSolved ? "checked" : ""}><span class="checkmark"></span></label></td>
      <td class="col-num">${String(index + 1).padStart(2, '0')}</td>
      <td><a href="${prob.url}" target="_blank" class="problem-name-link">${prob.name}</a></td>
      <td><span class="badge ${badgeMap[prob.difficulty]}">${prob.difficulty}</span></td>
      <td><span class="badge badge-source">${prob.source.slice(0, 2)}</span></td>
      <td><a href="${prob.url}" target="_blank" class="external-link">↗</a></td>
    </tr>`;
  }

  // ===== RENDER: SEARCH =====
  function renderSearch(container) {
    container.innerHTML = `
      <div class="app-main" id="detailMain">
        <div class="search-container">
          <input type="text" class="search-input" id="searchInput" placeholder=">> INPUT QUERY SEQUENCE..." autocomplete="off">
        </div>
        <div class="problem-table-wrapper">
          <table class="problem-table">
            <thead><tr>
              <th style="width:50px"></th>
              <th>Task Identifier</th>
              <th style="width:150px">Pattern Group</th>
              <th style="width:120px">Diff</th>
              <th style="width:40px"></th>
            </tr></thead>
            <tbody id="searchBody"></tbody>
          </table>
        </div>
      </div>
    `;

    const input = document.getElementById("searchInput");
    const body = document.getElementById("searchBody");

    function doSearch() {
      const q = input.value.toLowerCase().trim();
      let results = [];
      PATTERNS.forEach(pat => {
        pat.problems.forEach(prob => {
          if (!q || prob.name.toLowerCase().includes(q)) results.push({ pat, prob });
        });
      });

      body.innerHTML = results.slice(0, 50).map(({ pat, prob }) => {
        const badgeMap = { "Easy": "badge-easy", "Medium": "badge-medium", "Hard": "badge-hard" };
        const key = problemKey(pat.id, prob.name);
        const isSolved = solvedSet.has(key);
        return `<tr>
          <td><label class="custom-check"><input type="checkbox" class="problem-check" data-key="${key}" ${isSolved ? "checked" : ""}><span class="checkmark"></span></label></td>
          <td><a href="${prob.url}" class="problem-name-link">${prob.name}</a></td>
          <td style="color:var(${pat.accentVar});font-family:var(--font-code);font-size:0.8rem">${pat.name}</td>
          <td><span class="badge ${badgeMap[prob.difficulty]}">${prob.difficulty}</span></td>
          <td><a href="${prob.url}" class="external-link">↗</a></td>
        </tr>`;
      }).join("");

      body.querySelectorAll(".problem-check").forEach(cb => {
        cb.addEventListener("change", e => {
          const key = e.target.dataset.key;
          if (e.target.checked) solvedSet.add(key); else solvedSet.delete(key);
          saveProgress();
        });
      });
    }

    input.addEventListener("input", doSearch);
    doSearch();
    setTimeout(() => input.focus(), 100);
  }

  // ===== UTILS =====
  function escapeHtml(str) { return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

  // ===== INIT =====
  function init() {
    loadProgress();
    window.addEventListener("hashchange", route);
    route();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
