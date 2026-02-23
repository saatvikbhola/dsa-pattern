# DSA Patterns Hub — Comprehensive Problem Roadmap

## Overview
A NeetCode-inspired DSA patterns website with an exhaustive problem set organized by data structure and algorithmic pattern. Progress is tracked locally in the browser. Features a clean card-grid layout, dark mode, search, filters, and detailed pattern explanations.

---

## Pattern Categories (Research-Backed)

Below are the **20 major pattern categories** commonly tested in coding interviews at top tech companies (Google, Amazon, Meta, Microsoft, Apple, etc.), compiled from NeetCode, LeetCode, DesignGurus, AlgoMonster, and real interview data.

---

### 1. Arrays & Hashing
> Foundation of most interview problems. Tests basic data manipulation and hash-based lookups.

- **Key concepts:** Frequency counting, hash maps/sets, prefix sums, product arrays
- **Sub-patterns:** Contains Duplicate, Group Anagrams, Top K Frequent, Encode/Decode Strings
- **Difficulty split:** ~50% Easy, ~40% Medium, ~10% Hard
- **Problem count target:** 30–35

---

### 2. Two Pointers
> Uses two pointers traversing a data structure to find pairs, triplets, or move elements.

- **Key concepts:** Left/right pointers, same-direction pointers, opposite-direction pointers
- **Sub-patterns:** Pair with target sum, remove duplicates, container with most water, three sum
- **Difficulty split:** ~40% Easy, ~50% Medium, ~10% Hard
- **Problem count target:** 20–25

---

### 3. Sliding Window
> Maintains a window over a contiguous section of data, expanding/shrinking to find optimal subsets.

- **Key concepts:** Fixed-size window, variable-size window, window with hash map
- **Sub-patterns:** Maximum sum subarray, longest substring without repeats, minimum window substring, permutation in string
- **Difficulty split:** ~20% Easy, ~60% Medium, ~20% Hard
- **Problem count target:** 20–25

---

### 4. Stack
> LIFO data structure for nested structures, matching pairs, and monotonic sequence problems.

- **Key concepts:** Monotonic stack, expression evaluation, parentheses matching
- **Sub-patterns:** Valid parentheses, next greater element, daily temperatures, largest rectangle in histogram, min stack
- **Difficulty split:** ~30% Easy, ~50% Medium, ~20% Hard
- **Problem count target:** 15–20

---

### 5. Binary Search
> Divides search space in half repeatedly. Extends beyond sorted arrays to search on answer space.

- **Key concepts:** Classic binary search, search on answer, rotated arrays, 2D matrix search
- **Sub-patterns:** Search in rotated sorted array, find minimum in rotated array, koko eating bananas, median of two sorted arrays
- **Difficulty split:** ~20% Easy, ~60% Medium, ~20% Hard
- **Problem count target:** 20–25

---

### 6. Linked List
> Tests pointer manipulation, in-place operations, and cycle detection.

- **Key concepts:** Fast & slow pointers (tortoise and hare), in-place reversal, dummy head trick, merge techniques
- **Sub-patterns:** Reverse linked list, detect cycle, merge sorted lists, reorder list, LRU cache, copy list with random pointer
- **Difficulty split:** ~30% Easy, ~50% Medium, ~20% Hard
- **Problem count target:** 20–25

---

### 7. Trees
> Hierarchical data structures. Tests recursion, traversal, and tree properties.

- **Key concepts:** DFS (inorder, preorder, postorder), BFS (level-order), BST properties, tree construction
- **Sub-patterns:** Max depth, same tree, subtree check, lowest common ancestor, validate BST, serialize/deserialize, balanced BST
- **Difficulty split:** ~30% Easy, ~50% Medium, ~20% Hard
- **Problem count target:** 30–35

---

### 8. Tries (Prefix Trees)
> Specialized tree for efficient string operations like prefix matching and autocomplete.

- **Key concepts:** Insert/search/delete, prefix matching, word dictionaries
- **Sub-patterns:** Implement trie, word search II, design search autocomplete, replace words
- **Difficulty split:** ~10% Easy, ~50% Medium, ~40% Hard
- **Problem count target:** 8–12

---

### 9. Heap / Priority Queue
> Efficient access to min/max elements. Core for top-K, streaming, and scheduling problems.

- **Key concepts:** Min heap, max heap, two heaps, k-way merge
- **Sub-patterns:** Kth largest element, top K frequent elements, find median from data stream, merge K sorted lists, task scheduler
- **Difficulty split:** ~15% Easy, ~55% Medium, ~30% Hard
- **Problem count target:** 15–20

---

### 10. Backtracking
> Explores all possible solutions by building incrementally and pruning invalid paths.

- **Key concepts:** Decision trees, pruning, constraint checking, recursion
- **Sub-patterns:** Subsets, permutations, combinations, N-Queens, Sudoku solver, palindrome partitioning, word search
- **Difficulty split:** ~10% Easy, ~60% Medium, ~30% Hard
- **Problem count target:** 15–20

---

### 11. Graphs
> Network/grid problems. Tests traversal, connectivity, and cycle detection.

- **Key concepts:** BFS, DFS, adjacency list/matrix, visited tracking, connected components
- **Sub-patterns:** Number of islands, clone graph, Pacific Atlantic water flow, course schedule, word ladder, rotting oranges
- **Difficulty split:** ~10% Easy, ~60% Medium, ~30% Hard
- **Problem count target:** 25–30

---

### 12. Advanced Graphs
> More complex graph algorithms beyond basic BFS/DFS.

- **Key concepts:** Dijkstra's algorithm, Bellman-Ford, Prim's, Kruskal's, topological sort, Union-Find, strongly connected components
- **Sub-patterns:** Network delay time, cheapest flights within K stops, min cost to connect all points, alien dictionary, swim in rising water
- **Difficulty split:** ~5% Easy, ~50% Medium, ~45% Hard
- **Problem count target:** 15–20

---

### 13. 1-D Dynamic Programming
> Optimization over sequences. Builds solutions from smaller subproblems.

- **Key concepts:** Memoization, tabulation, state transitions, Fibonacci-type recurrences
- **Sub-patterns:** Climbing stairs, house robber, coin change, longest increasing subsequence, word break, decode ways
- **Difficulty split:** ~20% Easy, ~60% Medium, ~20% Hard
- **Problem count target:** 25–30

---

### 14. 2-D Dynamic Programming
> Multi-dimensional DP on grids, strings, or two sequences.

- **Key concepts:** Grid traversal DP, LCS, edit distance, knapsack variants, interval DP
- **Sub-patterns:** Unique paths, longest common subsequence, edit distance, 0/1 knapsack, regular expression matching, burst balloons
- **Difficulty split:** ~5% Easy, ~55% Medium, ~40% Hard
- **Problem count target:** 15–20

---

### 15. Greedy
> Makes locally optimal choices aiming for global optimum. Requires proving greedy choice property.

- **Key concepts:** Sorting + greedy, interval greedy, activity selection, jump game
- **Sub-patterns:** Maximum subarray, jump game, gas station, hand of straights, merge triplets, partition labels
- **Difficulty split:** ~15% Easy, ~60% Medium, ~25% Hard
- **Problem count target:** 15–20

---

### 16. Intervals
> Problems involving ranges, scheduling, and overlapping segments.

- **Key concepts:** Sorting by start/end, merging overlaps, gap detection, sweep line
- **Sub-patterns:** Merge intervals, insert interval, non-overlapping intervals, meeting rooms I & II, minimum interval to include each query
- **Difficulty split:** ~20% Easy, ~60% Medium, ~20% Hard
- **Problem count target:** 10–15

---

### 17. Math & Geometry
> Number theory, combinatorics, and coordinate geometry problems.

- **Key concepts:** Modular arithmetic, GCD/LCM, primes, matrix rotation, spiral traversal
- **Sub-patterns:** Rotate image, spiral matrix, set matrix zeroes, happy number, plus one, pow(x,n)
- **Difficulty split:** ~40% Easy, ~40% Medium, ~20% Hard
- **Problem count target:** 15–20

---

### 18. Bit Manipulation
> Operates on individual bits for efficient computation and XOR-based tricks.

- **Key concepts:** AND, OR, XOR, left/right shift, bit masking, counting bits
- **Sub-patterns:** Single number, number of 1 bits, counting bits, reverse bits, missing number, sum of two integers
- **Difficulty split:** ~50% Easy, ~40% Medium, ~10% Hard
- **Problem count target:** 10–15

---

### 19. Strings
> Text processing, pattern matching, and character manipulation.

- **Key concepts:** Frequency counting, palindromes, anagrams, substring search, KMP algorithm
- **Sub-patterns:** Longest palindromic substring, valid palindrome, string to integer, longest common prefix, minimum window substring
- **Difficulty split:** ~30% Easy, ~50% Medium, ~20% Hard
- **Problem count target:** 20–25

---

### 20. Matrix / 2D Arrays
> Grid-based traversal and transformation problems.

- **Key concepts:** Row/column traversal, spiral order, diagonal traversal, DFS/BFS on grids, flood fill
- **Sub-patterns:** Spiral matrix, rotate image, set matrix zeroes, search 2D matrix, game of life, island perimeter
- **Difficulty split:** ~30% Easy, ~50% Medium, ~20% Hard
- **Problem count target:** 10–15

---

## Total Problem Count Target: **~400–500 problems**

| Category                | Target Problems | Difficulty Focus        |
|-------------------------|:--------------:|-------------------------|
| Arrays & Hashing        | 30–35          | Easy/Medium heavy       |
| Two Pointers            | 20–25          | Easy/Medium heavy       |
| Sliding Window          | 20–25          | Medium heavy            |
| Stack                   | 15–20          | Medium heavy            |
| Binary Search           | 20–25          | Medium heavy            |
| Linked List             | 20–25          | Easy/Medium heavy       |
| Trees                   | 30–35          | Balanced                |
| Tries                   | 8–12           | Medium/Hard heavy       |
| Heap / Priority Queue   | 15–20          | Medium/Hard             |
| Backtracking            | 15–20          | Medium/Hard             |
| Graphs                  | 25–30          | Medium/Hard             |
| Advanced Graphs         | 15–20          | Hard heavy              |
| 1-D Dynamic Programming | 25–30          | Medium heavy            |
| 2-D Dynamic Programming | 15–20          | Hard heavy              |
| Greedy                  | 15–20          | Medium heavy            |
| Intervals               | 10–15          | Medium heavy            |
| Math & Geometry         | 15–20          | Easy/Medium heavy       |
| Bit Manipulation        | 10–15          | Easy heavy              |
| Strings                 | 20–25          | Medium heavy            |
| Matrix / 2D Arrays      | 10–15          | Easy/Medium heavy       |

---

## Pages & Features

### 1. Home / Roadmap Page
- **Hero section** with site title, brief description, and overall progress stats (e.g., "142/450 solved")
- **Card grid layout** grouped by the 20 major categories above
- Each card shows: pattern name, icon, problem count, and a progress bar
- Clicking a card navigates to that pattern's detail page

### 2. Pattern Detail Page
- **Pattern explanation section** at the top: what the pattern is, when to use it, key intuition, and a small code template/pseudocode example
- **Problem table** listing 8-35+ problems per pattern:
  - Problem name
  - Difficulty badge (Easy / Medium / Hard)
  - Source badge (LeetCode / GeeksforGeeks)
  - Direct external link to the problem (free/unlocked problems only)
  - Checkbox to mark as solved (saved to localStorage)
- Problems are curated to use only free/unlocked problems; if a LeetCode problem is premium, a GeeksforGeeks or other free alternative is provided

### 3. Search & Filters
- Global search bar to find any problem by name or keyword
- Filter by difficulty (Easy / Medium / Hard)
- Filter by source (LeetCode / GeeksforGeeks)
- Filter by completion status (Solved / Unsolved)

### 4. Progress Tracking (Local Storage)
- Mark problems as solved with a checkbox; state persisted in localStorage
- Per-pattern progress bar on the roadmap cards
- Overall progress counter on the home page
- Ability to reset progress

### 5. Dark Mode
- Toggle between light and dark themes using the existing theme system
- Preference saved in localStorage

---

## Design & UX
- Clean, minimal design with the NeetCode-style colored card grid
- Color-coded difficulty badges (green = Easy, orange = Medium, red = Hard)
- Responsive layout — works well on desktop and mobile
- Smooth navigation between roadmap and pattern detail pages

---

## Data
- All problem data will be hardcoded as a comprehensive JSON/TypeScript dataset within the app (no backend needed)
- ~400-500 total problems across all patterns
- Heavy emphasis on Easy and Medium problems (~70-80% of the total)
- Each problem entry includes: name, difficulty, pattern, source, and external URL