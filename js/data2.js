// DSA Patterns Hub — Problem Data Part 2 (Categories 11-20)
// Appends to PATTERNS array defined in data.js

PATTERNS.push(
    {
        id: "graphs", name: "Graphs", icon: "🕸️",
        accentVar: "--cat-graphs",
        description: "Network and grid problems testing traversal, connectivity, and cycle detection using BFS and DFS.",
        keyInsight: "Model the problem as nodes + edges. BFS = shortest path (unweighted). DFS = explore all paths / connected components. Track visited nodes.",
        algorithms: ["BFS (Breadth-First Search)", "DFS (Depth-First Search)", "Union-Find", "Topological Sort (Kahn's)", "Flood Fill"],
        problems: [
            {
                algorithm: "Matrix DFS / BFS (Flood Fill)",
                list: [
                    p("Number of Islands", M, 0, "number-of-islands"), p("Max Area of Island", M, 0, "max-area-of-island"),
                    p("Pacific Atlantic Water Flow", M, 0, "pacific-atlantic-water-flow"), p("Surrounded Regions", M, 0, "surrounded-regions"),
                    p("Rotting Oranges", M, 0, "rotting-oranges"), p("Shortest Path in Binary Matrix", M, 0, "shortest-path-in-binary-matrix"),
                    p("Flood Fill", E, 0, "flood-fill"), p("01 Matrix", M, 0, "01-matrix")
                ]
            },
            {
                algorithm: "Adjacency List & State Search",
                list: [
                    p("Clone Graph", M, 0, "clone-graph"), p("Word Ladder", H, 0, "word-ladder"),
                    p("Open the Lock", M, 0, "open-the-lock"), p("All Paths From Source to Target", M, 0, "all-paths-from-source-to-target"),
                    p("Keys and Rooms", M, 0, "keys-and-rooms"), p("Find if Path Exists in Graph", E, 0, "find-if-path-exists-in-graph")
                ]
            },
            {
                algorithm: "Topological Sort",
                list: [
                    p("Course Schedule", M, 0, "course-schedule"), p("Course Schedule II", M, 0, "course-schedule-ii")
                ]
            },
            {
                algorithm: "Union-Find / Connected Components",
                list: [
                    p("Redundant Connection", M, 0, "redundant-connection"), p("Accounts Merge", M, 0, "accounts-merge"),
                    p("Is Graph Bipartite", M, 0, "is-graph-bipartite"), p("Number of Provinces", M, 0, "number-of-provinces"),
                    p("Number of Connected Components", M, 1, "connected-components-in-an-undirected-graph"), p("Graph Valid Tree", M, 1, "is-it-a-tree")
                ]
            }
        ]
    },
    {
        id: "advanced-graphs", name: "Advanced Graphs", icon: "🗺️",
        accentVar: "--cat-adv-graphs",
        description: "Complex graph algorithms: shortest path (Dijkstra, Bellman-Ford), MST (Prim, Kruskal), topological sort, and Union-Find.",
        keyInsight: "Dijkstra = weighted shortest path (no negative edges). Topological sort = ordering with dependencies (DAG). Union-Find = dynamic connectivity.",
        algorithms: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "Kruskal's MST", "Prim's MST", "Tarjan's SCC", "Union-Find (Ranked)"],
        problems: [
            {
                algorithm: "Dijkstra's Algorithm",
                list: [
                    p("Network Delay Time", M, 0, "network-delay-time"), p("Path With Minimum Effort", M, 0, "path-with-minimum-effort"),
                    p("Swim in Rising Water", H, 0, "swim-in-rising-water")
                ]
            },
            {
                algorithm: "Bellman-Ford / Floyd-Warshall",
                list: [
                    p("Cheapest Flights Within K Stops", M, 0, "cheapest-flights-within-k-stops"), p("Find the City With Smallest Number of Neighbors", M, 0, "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance")
                ]
            },
            {
                algorithm: "Minimum Spanning Tree (MST)",
                list: [
                    p("Min Cost to Connect All Points", M, 0, "min-cost-to-connect-all-points"), p("Number of Operations to Make Network Connected", M, 0, "number-of-operations-to-make-network-connected")
                ]
            },
            {
                algorithm: "Topological Sort / Eulerian Graph",
                list: [
                    p("Reconstruct Itinerary", H, 0, "reconstruct-itinerary"), p("Alien Dictionary", H, 1, "alien-dictionary"),
                    p("Evaluate Division", M, 0, "evaluate-division")
                ]
            },
            {
                algorithm: "Tarjan's (Bridges & Articulation)",
                list: [
                    p("Critical Connections in a Network", H, 0, "critical-connections-in-a-network")
                ]
            },
            {
                algorithm: "Graph Search with Memoization",
                list: [
                    p("Longest Increasing Path in a Matrix", H, 0, "longest-increasing-path-in-a-matrix"), p("Word Ladder II", H, 0, "word-ladder-ii")
                ]
            }
        ]
    },
    {
        id: "1d-dp", name: "1-D Dynamic Programming", icon: "📈",
        accentVar: "--cat-1d-dp",
        description: "Optimization over sequences using memoization or tabulation. Build solutions from smaller overlapping subproblems.",
        keyInsight: "Define state clearly (what does dp[i] represent?). Find the recurrence relation. Base cases first, then fill the table.",
        algorithms: ["Kadane's Algorithm", "Fibonacci Sequence DP", "Coin Change DP", "Longest Increasing Subsequence (LIS)", "Memoization / Tabulation"],
        problems: [
            {
                algorithm: "Fibonacci Sequence DP",
                list: [
                    p("Climbing Stairs", E, 0, "climbing-stairs"), p("Min Cost Climbing Stairs", E, 0, "min-cost-climbing-stairs"),
                    p("Fibonacci Number", E, 0, "fibonacci-number"), p("Tribonacci Number", E, 0, "n-th-tribonacci-number"),
                    p("House Robber", M, 0, "house-robber"), p("House Robber II", M, 0, "house-robber-ii"),
                    p("Delete and Earn", M, 0, "delete-and-earn")
                ]
            },
            {
                algorithm: "Strings / Palindromes DP",
                list: [
                    p("Longest Palindromic Substring", M, 0, "longest-palindromic-substring"), p("Palindromic Substrings", M, 0, "palindromic-substrings"),
                    p("Decode Ways", M, 0, "decode-ways"), p("Word Break", M, 0, "word-break")
                ]
            },
            {
                algorithm: "Knapsack / Subset Sum",
                list: [
                    p("Coin Change", M, 0, "coin-change"), p("Partition Equal Subset Sum", M, 0, "partition-equal-subset-sum"),
                    p("Combination Sum IV", M, 0, "combination-sum-iv"), p("Perfect Squares", M, 0, "perfect-squares"),
                    p("Minimum Cost For Tickets", M, 0, "minimum-cost-for-tickets")
                ]
            },
            {
                algorithm: "LIS & Arrays DP",
                list: [
                    p("Longest Increasing Subsequence", M, 0, "longest-increasing-subsequence"), p("Maximum Product Subarray", M, 0, "maximum-product-subarray"),
                    p("Jump Game", M, 0, "jump-game"), p("Jump Game II", M, 0, "jump-game-ii"),
                    p("Arithmetic Slices", M, 0, "arithmetic-slices")
                ]
            },
            {
                algorithm: "Math DP",
                list: [
                    p("Integer Break", M, 0, "integer-break"), p("Counting Bits", E, 0, "counting-bits")
                ]
            }
        ]
    },
    {
        id: "2d-dp", name: "2-D Dynamic Programming", icon: "🧮",
        accentVar: "--cat-2d-dp",
        description: "Multi-dimensional DP on grids, two strings, or sequences. Includes LCS, edit distance, and knapsack variants.",
        keyInsight: "State often involves two indices (i, j). Classic: dp[i][j] = best answer considering first i items of seq1 and first j items of seq2.",
        algorithms: ["Longest Common Subsequence (LCS)", "Edit Distance (Levenshtein)", "0/1 Knapsack", "Matrix Chain Multiplication", "Grid DP"],
        problems: [
            {
                algorithm: "Grid DP",
                list: [
                    p("Unique Paths", M, 0, "unique-paths"), p("Minimum Path Sum", M, 0, "minimum-path-sum"),
                    p("Maximal Square", M, 0, "maximal-square"), p("Triangle", M, 0, "triangle"),
                    p("Dungeon Game", H, 0, "dungeon-game")
                ]
            },
            {
                algorithm: "LCS & String Comparisons",
                list: [
                    p("Longest Common Subsequence", M, 0, "longest-common-subsequence"), p("Edit Distance", M, 0, "edit-distance"),
                    p("Interleaving String", M, 0, "interleaving-string"), p("Distinct Subsequences", H, 0, "distinct-subsequences"),
                    p("Regular Expression Matching", H, 0, "regular-expression-matching"), p("Wildcard Matching", H, 0, "wildcard-matching")
                ]
            },
            {
                algorithm: "0/1 Knapsack & Array DP",
                list: [
                    p("Coin Change II", M, 0, "coin-change-ii"), p("Target Sum", M, 0, "target-sum"),
                    p("0/1 Knapsack Problem", M, 1, "0-1-knapsack-problem0945"), p("Best Time to Buy and Sell Stock with Cooldown", M, 0, "best-time-to-buy-and-sell-stock-with-cooldown")
                ]
            },
            {
                algorithm: "Interval DP",
                list: [
                    p("Burst Balloons", H, 0, "burst-balloons"), p("Stone Game", M, 0, "stone-game")
                ]
            }
        ]
    },
    {
        id: "greedy", name: "Greedy", icon: "🤑",
        accentVar: "--cat-greedy",
        description: "Makes locally optimal choices hoping for a global optimum. Requires proving the greedy choice property holds.",
        keyInsight: "Sort first, then greedily pick. If a greedy approach gives wrong answers, switch to DP. Intervals + greedy = very common combo.",
        algorithms: ["Greedy Choice Property", "Activity Selection", "Huffman Coding", "Fractional Knapsack", "Jump Game Greedy"],
        problems: [
            {
                algorithm: "Greedy Array Choices",
                list: [
                    p("Maximum Subarray", M, 0, "maximum-subarray"), p("Jump Game", M, 0, "jump-game"),
                    p("Jump Game II", M, 0, "jump-game-ii"), p("Gas Station", M, 0, "gas-station"),
                    p("Best Time to Buy and Sell Stock II", M, 0, "best-time-to-buy-and-sell-stock-ii")
                ]
            },
            {
                algorithm: "Activity Selection & Sorting",
                list: [
                    p("Hand of Straights", M, 0, "hand-of-straights"), p("Merge Triplets to Form Target", M, 0, "merge-triplets-to-form-target-triplet"),
                    p("Queue Reconstruction by Height", M, 0, "queue-reconstruction-by-height"), p("Assign Cookies", E, 0, "assign-cookies")
                ]
            },
            {
                algorithm: "Interval Greedy",
                list: [
                    p("Partition Labels", M, 0, "partition-labels"), p("Non-overlapping Intervals", M, 0, "non-overlapping-intervals"),
                    p("Minimum Number of Arrows", M, 0, "minimum-number-of-arrows-to-burst-balloons")
                ]
            },
            {
                algorithm: "String / Pattern Match",
                list: [
                    p("Valid Parenthesis String", M, 0, "valid-parenthesis-string"), p("Is Subsequence", E, 0, "is-subsequence"),
                    p("Wiggle Subsequence", M, 0, "wiggle-subsequence"), p("Lemonade Change", E, 0, "lemonade-change"),
                    p("Candy", H, 0, "candy")
                ]
            }
        ]
    },
    {
        id: "intervals", name: "Intervals", icon: "📐",
        accentVar: "--cat-intervals",
        description: "Problems involving ranges, scheduling, and overlapping segments. Almost always involves sorting by start or end time.",
        keyInsight: "Sort intervals by start time. Then merge overlapping ones or use greedy to pick non-overlapping ones. Sweep line for complex multi-interval queries.",
        algorithms: ["Merge Intervals", "Sweep Line Algorithm", "Interval Scheduling (Greedy)", "Line Sweep / Event Points"],
        problems: [
            {
                algorithm: "Interval Merging / Sorting",
                list: [
                    p("Insert Interval", M, 0, "insert-interval"), p("Merge Intervals", M, 0, "merge-intervals"),
                    p("Non-overlapping Intervals", M, 0, "non-overlapping-intervals"), p("Interval List Intersections", M, 0, "interval-list-intersections"),
                    p("Minimum Number of Arrows", M, 0, "minimum-number-of-arrows-to-burst-balloons")
                ]
            },
            {
                algorithm: "Scheduling / Line Sweep",
                list: [
                    p("Meeting Rooms", E, 1, "attend-all-meetings"), p("Meeting Rooms II", M, 1, "attend-all-meetings-ii"),
                    p("My Calendar I", M, 0, "my-calendar-i"), p("My Calendar II", M, 0, "my-calendar-ii"),
                    p("Car Pooling", M, 0, "car-pooling")
                ]
            },
            {
                algorithm: "Advanced Sweep Line",
                list: [
                    p("Minimum Interval to Include Each Query", H, 0, "minimum-interval-to-include-each-query")
                ]
            }
        ]
    },
    {
        id: "math-geometry", name: "Math & Geometry", icon: "📊",
        accentVar: "--cat-math",
        description: "Number theory, combinatorics, matrix transformations, and coordinate geometry problems.",
        keyInsight: "Look for mathematical shortcuts. Modular arithmetic for large numbers. In-place matrix ops use the 'rotate layer by layer' technique.",
        algorithms: ["Sieve of Eratosthenes", "Euclidean GCD", "Fast Exponentiation", "Matrix Rotation (Layer)", "Modular Arithmetic"],
        problems: [
            {
                algorithm: "Matrix Math / Transformations",
                list: [
                    p("Rotate Image", M, 0, "rotate-image"), p("Spiral Matrix", M, 0, "spiral-matrix"),
                    p("Set Matrix Zeroes", M, 0, "set-matrix-zeroes")
                ]
            },
            {
                algorithm: "Number Theory & Arithmetic",
                list: [
                    p("Happy Number", E, 0, "happy-number"), p("Plus One", E, 0, "plus-one"),
                    p("Pow(x, n)", M, 0, "powx-n"), p("Multiply Strings", M, 0, "multiply-strings"),
                    p("Fizz Buzz", E, 0, "fizz-buzz"), p("Count Primes", M, 0, "count-primes")
                ]
            },
            {
                algorithm: "String Manipulation via Math",
                list: [
                    p("Roman to Integer", E, 0, "roman-to-integer"), p("Integer to Roman", M, 0, "integer-to-roman"),
                    p("Palindrome Number", E, 0, "palindrome-number"), p("Reverse Integer", M, 0, "reverse-integer"),
                    p("Excel Sheet Column Number", E, 0, "excel-sheet-column-number")
                ]
            },
            {
                algorithm: "Geometry / Coordinate",
                list: [
                    p("Detect Squares", M, 0, "detect-squares"), p("Robot Bounded In Circle", M, 0, "robot-bounded-in-circle")
                ]
            }
        ]
    },
    {
        id: "bit-manipulation", name: "Bit Manipulation", icon: "🔢",
        accentVar: "--cat-bit",
        description: "Operates on individual bits for efficient computation. XOR tricks, bit masking, and counting set bits.",
        keyInsight: "XOR: a ^ a = 0, a ^ 0 = a — finds unique elements. n & (n-1) clears lowest set bit. Bit masking for subsets.",
        algorithms: ["XOR Trick (Single Number)", "Brian Kernighan's Algorithm", "Bit Masking", "Subset Enumeration via Bits"],
        problems: [
            {
                algorithm: "XOR Techniques",
                list: [
                    p("Single Number", E, 0, "single-number"), p("Missing Number", E, 0, "missing-number"),
                    p("Hamming Distance", E, 0, "hamming-distance"), p("Single Number III", M, 0, "single-number-iii")
                ]
            },
            {
                algorithm: "Bit Masking & Kernighan's",
                list: [
                    p("Number of 1 Bits", E, 0, "number-of-1-bits"), p("Counting Bits", E, 0, "counting-bits"),
                    p("Reverse Bits", E, 0, "reverse-bits"), p("Power of Two", E, 0, "power-of-two"),
                    p("Single Number II", M, 0, "single-number-ii")
                ]
            },
            {
                algorithm: "Low-Level Math Simulation",
                list: [
                    p("Sum of Two Integers", M, 0, "sum-of-two-integers"), p("Bitwise AND of Numbers Range", M, 0, "bitwise-and-of-numbers-range")
                ]
            }
        ]
    },
    {
        id: "strings", name: "Strings", icon: "✏️",
        accentVar: "--cat-strings",
        description: "Text processing, pattern matching, and character manipulation problems testing hash maps, two pointers, and string algorithms.",
        keyInsight: "Frequency maps (Counter) solve most anagram/permutation problems. Expand from center for palindromes. KMP for pattern matching.",
        algorithms: ["KMP Pattern Matching", "Rabin-Karp (Rolling Hash)", "Manacher's Algorithm", "Z-Algorithm", "Expand Around Center"],
        problems: [
            {
                algorithm: "Palindrome Matching (Expand Around Center)",
                list: [
                    p("Valid Palindrome", E, 0, "valid-palindrome"), p("Longest Palindromic Substring", M, 0, "longest-palindromic-substring"),
                    p("Palindromic Substrings", M, 0, "palindromic-substrings")
                ]
            },
            {
                algorithm: "Maps & Frequency Counters",
                list: [
                    p("Valid Anagram", E, 0, "valid-anagram"), p("Group Anagrams", M, 0, "group-anagrams"),
                    p("Longest Substring Without Repeating Characters", M, 0, "longest-substring-without-repeating-characters"),
                    p("Longest Repeating Character Replacement", M, 0, "longest-repeating-character-replacement"),
                    p("Isomorphic Strings", E, 0, "isomorphic-strings"), p("Word Pattern", E, 0, "word-pattern"),
                    p("Longest Happy String", M, 0, "longest-happy-string")
                ]
            },
            {
                algorithm: "String Searching/Parsing",
                list: [
                    p("Minimum Window Substring", H, 0, "minimum-window-substring"), p("String to Integer (atoi)", M, 0, "string-to-integer-atoi"),
                    p("Count and Say", M, 0, "count-and-say"), p("Decode String", M, 0, "decode-string"),
                    p("Repeated DNA Sequences", M, 0, "repeated-dna-sequences"), p("Goal Parser Interpretation", E, 0, "goal-parser-interpretation")
                ]
            },
            {
                algorithm: "Balanced Strings & Parentheses",
                list: [
                    p("Maximum Nesting Depth of the Parentheses", E, 0, "maximum-nesting-depth-of-the-parentheses"), p("Split a String in Balanced Strings", E, 0, "split-a-string-in-balanced-strings"),
                    p("Determine if String Halves Are Alike", E, 0, "determine-if-string-halves-are-alike"), p("Remove Outermost Parentheses", E, 0, "remove-outermost-parentheses")
                ]
            },
            {
                algorithm: "String Transformations & Iteration",
                list: [
                    p("Defanging an IP Address", E, 0, "defanging-an-ip-address"), p("Length of Last Word", E, 0, "length-of-last-word"),
                    p("Sorting the Sentence", E, 0, "sorting-the-sentence"), p("To Lower Case", E, 0, "to-lower-case"),
                    p("Check If Two String Arrays are Equivalent", E, 0, "check-if-two-string-arrays-are-equivalent"), p("Replace All Digits with Characters", E, 0, "replace-all-digits-with-characters"),
                    p("Final Value of Variable After Performing Operations", E, 0, "final-value-of-variable-after-performing-operations"), p("Shuffle String", E, 0, "shuffle-string"),
                    p("Count Items Matching a Rule", E, 0, "count-items-matching-a-rule")
                ]
            },
            {
                algorithm: "Prefix / KMP Matching",
                list: [
                    p("Longest Common Prefix", E, 0, "longest-common-prefix"), p("Find the Index of First Occurrence", E, 0, "find-the-index-of-the-first-occurrence-in-a-string"),
                    p("Zigzag Conversion", M, 0, "zigzag-conversion")
                ]
            }
        ]
    },
    {
        id: "matrix", name: "Matrix / 2D Arrays", icon: "🧊",
        accentVar: "--cat-matrix",
        description: "Grid-based traversal and transformation — spiral order, diagonal traversal, DFS/BFS on grids, and flood fill.",
        keyInsight: "Matrix problems are often graph problems in disguise. Use direction arrays [(0,1),(1,0),(0,-1),(-1,0)] for neighbor traversal.",
        algorithms: ["Spiral Traversal", "Layer-by-Layer Rotation", "DFS / BFS on Grid", "Direction Arrays", "In-Place Marking"],
        problems: [
            {
                algorithm: "Traversal Simulation",
                list: [
                    p("Spiral Matrix", M, 0, "spiral-matrix"), p("Diagonal Traverse", M, 0, "diagonal-traverse"),
                    p("Where Will the Ball Fall", M, 0, "where-will-the-ball-fall")
                ]
            },
            {
                algorithm: "In-Place Matrix Transformations",
                list: [
                    p("Rotate Image", M, 0, "rotate-image"), p("Set Matrix Zeroes", M, 0, "set-matrix-zeroes"),
                    p("Reshape the Matrix", E, 0, "reshape-the-matrix"), p("Transpose Matrix", E, 0, "transpose-matrix")
                ]
            },
            {
                algorithm: "DFS / Searching",
                list: [
                    p("Search a 2D Matrix", M, 0, "search-a-2d-matrix"), p("Island Perimeter", E, 0, "island-perimeter"),
                    p("Game of Life", M, 0, "game-of-life")
                ]
            },
            {
                algorithm: "Validation Check",
                list: [
                    p("Toeplitz Matrix", E, 0, "toeplitz-matrix"), p("Lucky Numbers in a Matrix", E, 0, "lucky-numbers-in-a-matrix")
                ]
            }
        ]
    }
);
