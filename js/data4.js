// DSA Patterns Hub — Additional Problems Part 4
// Appends extra algorithm groups to patterns defined in data2.js

(function () {
    function addProblems(patternId, groups) {
        const pat = PATTERNS.find(p => p.id === patternId);
        if (pat) pat.problems.push(...groups);
    }

    // ─── GRAPHS (additional) ───
    addProblems("graphs", [
        {
            algorithm: "Graph Coloring / Bipartite",
            list: [
                p("Possible Bipartition", M, 0, "possible-bipartition"),
                p("Flower Planting With No Adjacent", M, 0, "flower-planting-with-no-adjacent"),
                p("Shortest Bridge", M, 0, "shortest-bridge"),
                p("Minimum Knight Moves", M, 1, "minimum-knight-moves"),
                p("Snakes and Ladders", M, 0, "snakes-and-ladders")
            ]
        },
        {
            algorithm: "Multi-Source BFS / Advanced DFS",
            list: [
                p("Walls and Gates", M, 1, "walls-and-gates"),
                p("As Far from Land as Possible", M, 0, "as-far-from-land-as-possible"),
                p("Time Needed to Inform All Employees", M, 0, "time-needed-to-inform-all-employees"),
                p("Minimum Number of Vertices to Reach All Nodes", M, 0, "minimum-number-of-vertices-to-reach-all-nodes"),
                p("Find Eventual Safe States", M, 0, "find-eventual-safe-states"),
                p("Regions Cut By Slashes", M, 0, "regions-cut-by-slashes"),
                p("Detonate Maximum Bombs", M, 0, "detonate-the-maximum-bombs")
            ]
        }
    ]);

    // ─── ADVANCED GRAPHS (additional) ───
    addProblems("advanced-graphs", [
        {
            algorithm: "Shortest Path Variants",
            list: [
                p("Path With Maximum Probability", M, 0, "path-with-maximum-probability"),
                p("Reachable Nodes In Subdivided Graph", H, 0, "reachable-nodes-in-subdivided-graph"),
                p("Minimum Cost to Make at Least One Valid Path in a Grid", H, 0, "minimum-cost-to-make-at-least-one-valid-path-in-a-grid"),
                p("Shortest Path Visiting All Nodes", H, 0, "shortest-path-visiting-all-nodes"),
                p("Shortest Path with Alternating Colors", M, 0, "shortest-path-with-alternating-colors")
            ]
        },
        {
            algorithm: "Union-Find Advanced / MST",
            list: [
                p("Smallest String With Swaps", M, 0, "smallest-string-with-swaps"),
                p("Satisfiability of Equality Equations", M, 0, "satisfiability-of-equality-equations"),
                p("Optimize Water Distribution in a Village", H, 1, "optimize-water-distribution-in-a-village"),
                p("Remove Max Number of Edges to Keep Graph Fully Traversable", H, 0, "remove-max-number-of-edges-to-keep-graph-fully-traversable")
            ]
        },
        {
            algorithm: "Topological Sort Advanced",
            list: [
                p("Parallel Courses", M, 1, "parallel-courses"),
                p("Longest Path With Different Adjacent Characters", H, 0, "longest-path-with-different-adjacent-characters"),
                p("Sort Items by Groups Respecting Dependencies", H, 0, "sort-items-by-groups-respecting-dependencies")
            ]
        }
    ]);

    // ─── 1-D DYNAMIC PROGRAMMING (additional) ───
    addProblems("1d-dp", [
        {
            algorithm: "State Machine DP",
            list: [
                p("Best Time to Buy and Sell Stock with Transaction Fee", M, 0, "best-time-to-buy-and-sell-stock-with-transaction-fee"),
                p("Best Time to Buy and Sell Stock III", H, 0, "best-time-to-buy-and-sell-stock-iii"),
                p("Best Time to Buy and Sell Stock IV", H, 0, "best-time-to-buy-and-sell-stock-iv"),
                p("Paint House", M, 1, "paint-house"),
                p("Paint Fence", M, 1, "paint-fence")
            ]
        },
        {
            algorithm: "Greedy-to-DP Problems",
            list: [
                p("Trapping Rain Water", H, 0, "trapping-rain-water"),
                p("Wiggle Subsequence", M, 0, "wiggle-subsequence"),
                p("Domino and Tromino Tiling", M, 0, "domino-and-tromino-tiling"),
                p("Ugly Number II", M, 0, "ugly-number-ii"),
                p("Number of Longest Increasing Subsequence", M, 0, "number-of-longest-increasing-subsequence"),
                p("Russian Doll Envelopes", H, 0, "russian-doll-envelopes")
            ]
        },
        {
            algorithm: "Tiling / Counting DP",
            list: [
                p("Unique Binary Search Trees", M, 0, "unique-binary-search-trees"),
                p("Different Ways to Add Parentheses", M, 0, "different-ways-to-add-parentheses"),
                p("Ones and Zeroes", M, 0, "ones-and-zeroes"),
                p("Last Stone Weight II", M, 0, "last-stone-weight-ii")
            ]
        }
    ]);

    // ─── 2-D DYNAMIC PROGRAMMING (additional) ───
    addProblems("2d-dp", [
        {
            algorithm: "Bitmask DP",
            list: [
                p("Partition to K Equal Sum Subsets", M, 0, "partition-to-k-equal-sum-subsets"),
                p("Can I Win", M, 0, "can-i-win"),
                p("Number of Ways to Wear Different Hats to Each Other", H, 0, "number-of-ways-to-wear-different-hats-to-each-other"),
                p("Shortest Path Visiting All Nodes", H, 0, "shortest-path-visiting-all-nodes")
            ]
        },
        {
            algorithm: "Sequence Alignment / Matrix Traversal",
            list: [
                p("Minimum ASCII Delete Sum for Two Strings", M, 0, "minimum-ascii-delete-sum-for-two-strings"),
                p("Uncrossed Lines", M, 0, "uncrossed-lines"),
                p("Longest Palindromic Subsequence", M, 0, "longest-palindromic-subsequence"),
                p("Palindrome Partitioning II", H, 0, "palindrome-partitioning-ii"),
                p("Maximum Length of Repeated Subarray", M, 0, "maximum-length-of-repeated-subarray"),
                p("Cherry Pickup", H, 0, "cherry-pickup"),
                p("Cherry Pickup II", H, 0, "cherry-pickup-ii")
            ]
        }
    ]);

    // ─── GREEDY (additional) ───
    addProblems("greedy", [
        {
            algorithm: "Scheduling / Task Assignment",
            list: [
                p("Task Scheduler", M, 0, "task-scheduler"),
                p("Minimum Number of Platforms Required", M, 1, "minimum-platforms-1587115620"),
                p("Job Sequencing Problem", M, 1, "job-sequencing-problem-1587115620"),
                p("Minimum Cost to Hire K Workers", H, 0, "minimum-cost-to-hire-k-workers"),
                p("Course Schedule III", H, 0, "course-schedule-iii")
            ]
        },
        {
            algorithm: "Parentheses / Math Greedy",
            list: [
                p("Minimum Add to Make Parentheses Valid", M, 0, "minimum-add-to-make-parentheses-valid"),
                p("Remove Duplicate Letters", M, 0, "remove-duplicate-letters"),
                p("Smallest String With a Given Numeric Value", M, 0, "smallest-string-with-a-given-numeric-value"),
                p("Smallest Range II", M, 0, "smallest-range-ii"),
                p("Split Array into Consecutive Subsequences", M, 0, "split-array-into-consecutive-subsequences"),
                p("Broken Calculator", M, 0, "broken-calculator"),
                p("Reduce Array Size to The Half", M, 0, "reduce-array-size-to-the-half")
            ]
        }
    ]);

    // ─── INTERVALS (additional) ───
    addProblems("intervals", [
        {
            algorithm: "Interval Transformation",
            list: [
                p("Remove Covered Intervals", M, 0, "remove-covered-intervals"),
                p("Data Stream as Disjoint Intervals", H, 0, "data-stream-as-disjoint-intervals"),
                p("Teemo Attacking", E, 0, "teemo-attacking"),
                p("Summary Ranges", E, 0, "summary-ranges"),
                p("Video Stitching", M, 0, "video-stitching"),
                p("Employee Free Time", H, 1, "employee-free-time")
            ]
        }
    ]);

    // ─── MATH & GEOMETRY (additional) ───
    addProblems("math-geometry", [
        {
            algorithm: "Combinatorics / Probability",
            list: [
                p("Unique Paths", M, 0, "unique-paths"),
                p("Permutation Sequence", H, 0, "permutation-sequence"),
                p("Number of Dice Rolls with Target Sum", M, 0, "number-of-dice-rolls-with-target-sum"),
                p("Generate Random Point in a Circle", M, 0, "generate-random-point-in-a-circle"),
                p("Shuffle an Array", M, 0, "shuffle-an-array")
            ]
        },
        {
            algorithm: "GCD / LCM / Modular Arithmetic",
            list: [
                p("Greatest Common Divisor of Strings", E, 0, "greatest-common-divisor-of-strings"),
                p("Water and Jug Problem", M, 0, "water-and-jug-problem"),
                p("Nth Digit", M, 0, "nth-digit"),
                p("Super Pow", M, 0, "super-pow"),
                p("Maximum Points on a Line", H, 0, "max-points-on-a-line"),
                p("Basic Calculator III", H, 1, "basic-calculator-iii")
            ]
        }
    ]);

    // ─── BIT MANIPULATION (additional) ───
    addProblems("bit-manipulation", [
        {
            algorithm: "Bit Shifting / Gray Code",
            list: [
                p("Gray Code", M, 0, "gray-code"),
                p("Total Hamming Distance", M, 0, "total-hamming-distance"),
                p("Complement of Base 10 Integer", E, 0, "complement-of-base-10-integer"),
                p("UTF-8 Validation", M, 0, "utf-8-validation"),
                p("Divide Two Integers", M, 0, "divide-two-integers")
            ]
        },
        {
            algorithm: "Advanced Bit Tricks",
            list: [
                p("Maximum XOR of Two Numbers in an Array", M, 0, "maximum-xor-of-two-numbers-in-an-array"),
                p("Find the Longest Substring Containing Vowels in Even Counts", M, 0, "find-the-longest-substring-containing-vowels-in-even-counts"),
                p("Minimum Flips to Make a OR b Equal to c", M, 0, "minimum-flips-to-make-a-or-b-equal-to-c"),
                p("XOR Queries of a Subarray", M, 0, "xor-queries-of-a-subarray")
            ]
        }
    ]);

    // ─── STRINGS (additional) ───
    addProblems("strings", [
        {
            algorithm: "String Simulation / Parsing",
            list: [
                p("Text Justification", H, 0, "text-justification"),
                p("Compare Version Numbers", M, 0, "compare-version-numbers"),
                p("Basic Calculator", H, 0, "basic-calculator"),
                p("Multiply Strings", M, 0, "multiply-strings"),
                p("License Key Formatting", E, 0, "license-key-formatting"),
                p("Reverse Words in a String", M, 0, "reverse-words-in-a-string")
            ]
        },
        {
            algorithm: "Subsequences / Transformations",
            list: [
                p("Longest Common Subsequence", M, 0, "longest-common-subsequence"),
                p("Edit Distance", M, 0, "edit-distance"),
                p("Shortest Way to Form String", M, 1, "shortest-way-to-form-string"),
                p("Reorganize String", M, 0, "reorganize-string"),
                p("Delete Operation for Two Strings", M, 0, "delete-operation-for-two-strings"),
                p("Smallest String Starting From Leaf", M, 0, "smallest-string-starting-from-leaf")
            ]
        }
    ]);

    // ─── MATRIX / 2D ARRAYS (additional) ───
    addProblems("matrix", [
        {
            algorithm: "Matrix BFS / Distance",
            list: [
                p("Shortest Path in Binary Matrix", M, 0, "shortest-path-in-binary-matrix"),
                p("Surrounded Regions", M, 0, "surrounded-regions"),
                p("Pacific Atlantic Water Flow", M, 0, "pacific-atlantic-water-flow"),
                p("Rotting Oranges", M, 0, "rotting-oranges"),
                p("Walls and Gates", M, 1, "walls-and-gates")
            ]
        },
        {
            algorithm: "Matrix Construction / Simulation",
            list: [
                p("Spiral Matrix II", M, 0, "spiral-matrix-ii"),
                p("Kth Smallest Element in a Sorted Matrix", M, 0, "kth-smallest-element-in-a-sorted-matrix"),
                p("Count Negative Numbers in a Sorted Matrix", E, 0, "count-negative-numbers-in-a-sorted-matrix"),
                p("Richest Customer Wealth", E, 0, "richest-customer-wealth"),
                p("Determine Whether Matrix Can Be Obtained By Rotation", E, 0, "determine-whether-matrix-can-be-obtained-by-rotation"),
                p("Number of Enclaves", M, 0, "number-of-enclaves")
            ]
        }
    ]);
})();
