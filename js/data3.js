// DSA Patterns Hub — Additional Problems Part 3
// Appends extra algorithm groups to patterns defined in data.js

(function () {
    function addProblems(patternId, groups) {
        const pat = PATTERNS.find(p => p.id === patternId);
        if (pat) pat.problems.push(...groups);
    }

    // ─── ARRAYS (additional) ───
    addProblems("arrays", [
        {
            algorithm: "Cyclic Sort / Index Mapping",
            list: [
                p("Missing Number", E, 0, "missing-number"),
                p("Set Mismatch", E, 0, "set-mismatch"),
                p("Find All Duplicates in an Array", M, 0, "find-all-duplicates-in-an-array"),
                p("Couples Holding Hands", H, 0, "couples-holding-hands")
            ]
        },
        {
            algorithm: "Simulation / Array Tricks",
            list: [
                p("Spiral Matrix II", M, 0, "spiral-matrix-ii"),
                p("Wiggle Sort II", M, 0, "wiggle-sort-ii"),
                p("Maximum Gap", M, 0, "maximum-gap"),
                p("H-Index", M, 0, "h-index"),
                p("Insert Delete GetRandom O(1)", M, 0, "insert-delete-getrandom-o1"),
                p("Longest Consecutive Sequence", M, 0, "longest-consecutive-sequence"),
                p("Can Place Flowers", E, 0, "can-place-flowers"),
                p("Majority Element II", M, 0, "majority-element-ii")
            ]
        },
        {
            algorithm: "Subarray / Running Sum",
            list: [
                p("Maximum Subarray", M, 0, "maximum-subarray"),
                p("Maximum Product Subarray", M, 0, "maximum-product-subarray"),
                p("Contiguous Array", M, 0, "contiguous-array"),
                p("Maximum Sum Circular Subarray", M, 0, "maximum-sum-circular-subarray"),
                p("Shortest Unsorted Continuous Subarray", M, 0, "shortest-unsorted-continuous-subarray")
            ]
        }
    ]);

    // ─── HASHING (additional) ───
    addProblems("hashing", [
        {
            algorithm: "HashMap Design / Counting",
            list: [
                p("Design HashMap", E, 0, "design-hashmap"),
                p("Design HashSet", E, 0, "design-hashset"),
                p("First Unique Character in a String", E, 0, "first-unique-character-in-a-string"),
                p("Isomorphic Strings", E, 0, "isomorphic-strings"),
                p("Word Pattern", E, 0, "word-pattern"),
                p("Ransom Note", E, 0, "ransom-note"),
                p("Bulls and Cows", M, 0, "bulls-and-cows"),
                p("Custom Sort String", M, 0, "custom-sort-string")
            ]
        },
        {
            algorithm: "Set Operations / Lookups",
            list: [
                p("Happy Number", E, 0, "happy-number"),
                p("Jewels and Stones", E, 0, "jewels-and-stones"),
                p("Brick Wall", M, 0, "brick-wall"),
                p("Find Duplicate File in System", M, 0, "find-duplicate-file-in-system"),
                p("Minimum Index Sum of Two Lists", E, 0, "minimum-index-sum-of-two-lists"),
                p("Longest Harmonious Subsequence", E, 0, "longest-harmonious-subsequence")
            ]
        }
    ]);

    // ─── TWO POINTERS (additional) ───
    addProblems("two-pointers", [
        {
            algorithm: "Linked List Two Pointers",
            list: [
                p("Linked List Cycle II", M, 0, "linked-list-cycle-ii"),
                p("Sort List", M, 0, "sort-list"),
                p("Rotate List", M, 0, "rotate-list")
            ]
        },
        {
            algorithm: "Array Pair / Interval Pointers",
            list: [
                p("Interval List Intersections", M, 0, "interval-list-intersections"),
                p("Next Permutation", M, 0, "next-permutation"),
                p("Dutch National Flag (Sort Colors)", M, 0, "sort-colors"),
                p("Remove Duplicates from Sorted Array", E, 0, "remove-duplicates-from-sorted-array"),
                p("Minimize Maximum Pair Sum in Array", M, 0, "minimize-maximum-pair-sum-in-array"),
                p("Two Sum II - Input Array Is Sorted", M, 0, "two-sum-ii-input-array-is-sorted"),
                p("Max Number of K-Sum Pairs", M, 0, "max-number-of-k-sum-pairs")
            ]
        }
    ]);

    // ─── SLIDING WINDOW (additional) ───
    addProblems("sliding-window", [
        {
            algorithm: "Counting Window",
            list: [
                p("Number of Substrings Containing All Three Characters", M, 0, "number-of-substrings-containing-all-three-characters"),
                p("Replace the Substring for Balanced String", M, 0, "replace-the-substring-for-balanced-string"),
                p("Binary Subarrays With Sum", M, 0, "binary-subarrays-with-sum"),
                p("Minimum Operations to Reduce X to Zero", M, 0, "minimum-operations-to-reduce-x-to-zero"),
                p("Take K of Each Character From Left and Right", M, 0, "take-k-of-each-character-from-left-and-right")
            ]
        },
        {
            algorithm: "String Matching Window",
            list: [
                p("Repeated DNA Sequences", M, 0, "repeated-dna-sequences"),
                p("Minimum Window Subsequence", H, 1, "minimum-window-subsequence"),
                p("Longest Substring with At Most Two Distinct Characters", M, 1, "longest-substring-with-at-most-two-distinct-characters"),
                p("Longest Substring with At Most K Distinct Characters", M, 1, "longest-substring-with-at-most-k-distinct-characters")
            ]
        }
    ]);

    // ─── STACK (additional) ───
    addProblems("stack", [
        {
            algorithm: "Stack-Based Simulation",
            list: [
                p("Implement Queue using Stacks", E, 0, "implement-queue-using-stacks"),
                p("Implement Stack using Queues", E, 0, "implement-stack-using-queues"),
                p("Flatten Nested List Iterator", M, 0, "flatten-nested-list-iterator"),
                p("Exclusive Time of Functions", M, 0, "exclusive-time-of-functions"),
                p("Maximum Frequency Stack", H, 0, "maximum-frequency-stack"),
                p("Validate Stack Sequences", M, 0, "validate-stack-sequences")
            ]
        },
        {
            algorithm: "Histogram / Rectangle Problems",
            list: [
                p("Maximal Rectangle", H, 0, "maximal-rectangle"),
                p("Trapping Rain Water", H, 0, "trapping-rain-water"),
                p("Remove K Digits", M, 0, "remove-k-digits"),
                p("132 Pattern", M, 0, "132-pattern")
            ]
        }
    ]);

    // ─── BINARY SEARCH (additional) ───
    addProblems("binary-search", [
        {
            algorithm: "Matrix Binary Search",
            list: [
                p("Search a 2D Matrix II", M, 0, "search-a-2d-matrix-ii"),
                p("Kth Smallest Element in a Sorted Matrix", M, 0, "kth-smallest-element-in-a-sorted-matrix"),
                p("Find K-th Smallest Pair Distance", H, 0, "find-k-th-smallest-pair-distance")
            ]
        },
        {
            algorithm: "Aggressive / Allocation Binary Search",
            list: [
                p("Magnetic Force Between Two Balls", M, 0, "magnetic-force-between-two-balls"),
                p("Minimize Max Distance to Gas Station", H, 1, "minimize-max-distance-to-gas-station"),
                p("Find the Smallest Divisor Given a Threshold", M, 0, "find-the-smallest-divisor-given-a-threshold"),
                p("Maximum Number of Removable Characters", M, 0, "maximum-number-of-removable-characters"),
                p("Arranging Coins", E, 0, "arranging-coins"),
                p("Valid Perfect Square", E, 0, "valid-perfect-square")
            ]
        }
    ]);

    // ─── LINKED LIST (additional) ───
    addProblems("linked-list", [
        {
            algorithm: "Design / Advanced Operations",
            list: [
                p("Design Linked List", M, 0, "design-linked-list"),
                p("Linked List Random Node", M, 0, "linked-list-random-node"),
                p("Partition List", M, 0, "partition-list"),
                p("Insert into a Sorted Circular Linked List", M, 1, "insert-into-a-sorted-circular-linked-list"),
                p("Split Linked List in Parts", M, 0, "split-linked-list-in-parts"),
                p("Remove Duplicates from Sorted List", E, 0, "remove-duplicates-from-sorted-list"),
                p("Remove Duplicates from Sorted List II", M, 0, "remove-duplicates-from-sorted-list-ii")
            ]
        }
    ]);

    // ─── TREES (additional) ───
    addProblems("trees", [
        {
            algorithm: "Tree Construction & Conversion",
            list: [
                p("Convert Sorted Array to BST", E, 0, "convert-sorted-array-to-binary-search-tree"),
                p("Construct BST from Preorder Traversal", M, 0, "construct-binary-search-tree-from-preorder-traversal"),
                p("Construct BT from Inorder and Postorder", M, 0, "construct-binary-tree-from-inorder-and-postorder-traversal"),
                p("Maximum Width of Binary Tree", M, 0, "maximum-width-of-binary-tree"),
                p("Delete Node in a BST", M, 0, "delete-node-in-a-bst"),
                p("Trim a Binary Search Tree", M, 0, "trim-a-binary-search-tree")
            ]
        },
        {
            algorithm: "Tree Traversal Variants",
            list: [
                p("Vertical Order Traversal", H, 0, "vertical-order-traversal-of-a-binary-tree"),
                p("Binary Tree Inorder Traversal", E, 0, "binary-tree-inorder-traversal"),
                p("Binary Tree Preorder Traversal", E, 0, "binary-tree-preorder-traversal"),
                p("Binary Tree Postorder Traversal", E, 0, "binary-tree-postorder-traversal"),
                p("N-ary Tree Level Order Traversal", M, 0, "n-ary-tree-level-order-traversal"),
                p("Populating Next Right Pointers", M, 0, "populating-next-right-pointers-in-each-node"),
                p("Sum Root to Leaf Numbers", M, 0, "sum-root-to-leaf-numbers"),
                p("Lowest Common Ancestor of Binary Tree", M, 0, "lowest-common-ancestor-of-a-binary-tree")
            ]
        }
    ]);

    // ─── TRIES (additional) ───
    addProblems("tries", [
        {
            algorithm: "Advanced Trie Applications",
            list: [
                p("Stream of Characters", H, 0, "stream-of-characters"),
                p("Implement Magic Dictionary", M, 0, "implement-magic-dictionary"),
                p("Short Encoding of Words", M, 0, "short-encoding-of-words"),
                p("Prefix and Suffix Search", H, 0, "prefix-and-suffix-search"),
                p("Design Search Autocomplete System", H, 1, "design-search-autocomplete-system")
            ]
        }
    ]);

    // ─── HEAP / PRIORITY QUEUE (additional) ───
    addProblems("heap", [
        {
            algorithm: "Data Stream / Online Algorithms",
            list: [
                p("Seat Reservation Manager", M, 0, "seat-reservation-manager"),
                p("Process Tasks Using Servers", M, 0, "process-tasks-using-servers"),
                p("Single-Threaded CPU", M, 0, "single-threaded-cpu"),
                p("Maximum Performance of a Team", H, 0, "maximum-performance-of-a-team"),
                p("Smallest Range Covering Elements from K Lists", H, 0, "smallest-range-covering-elements-from-k-lists"),
                p("Trapping Rain Water II", H, 0, "trapping-rain-water-ii")
            ]
        },
        {
            algorithm: "Frequency-Based Heaps",
            list: [
                p("Top K Frequent Words", M, 0, "top-k-frequent-words"),
                p("Reduce Array Size to The Half", M, 0, "reduce-array-size-to-the-half"),
                p("Least Number of Unique Integers after K Removals", M, 0, "least-number-of-unique-integers-after-k-removals"),
                p("Maximum Number of Events That Can Be Attended", M, 0, "maximum-number-of-events-that-can-be-attended")
            ]
        }
    ]);

    // ─── BACKTRACKING (additional) ───
    addProblems("backtracking", [
        {
            algorithm: "Path / Graph Backtracking",
            list: [
                p("Path Sum III", M, 0, "path-sum-iii"),
                p("Word Search II", H, 0, "word-search-ii"),
                p("Expression Add Operators", H, 0, "expression-add-operators"),
                p("Unique Paths III", H, 0, "unique-paths-iii"),
                p("Additive Number", M, 0, "additive-number")
            ]
        },
        {
            algorithm: "Constraint Satisfaction",
            list: [
                p("N-Queens II", H, 0, "n-queens-ii"),
                p("Beautiful Arrangement", M, 0, "beautiful-arrangement"),
                p("Splitting a String Into Descending Consecutive Values", M, 0, "splitting-a-string-into-descending-consecutive-values"),
                p("Maximum Length of a Concatenated String with Unique Characters", M, 0, "maximum-length-of-a-concatenated-string-with-unique-characters"),
                p("Iterator for Combination", M, 0, "iterator-for-combination")
            ]
        }
    ]);
})();
