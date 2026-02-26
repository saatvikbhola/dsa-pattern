// DSA Patterns Hub — Problem Data
// Format: [name, difficulty, source, urlSlug]
// difficulty: E=Easy, M=Medium, H=Hard
// source: LC=LeetCode, GFG=GeeksforGeeks
const LC = "https://leetcode.com/problems/";
const GFG = "https://www.geeksforgeeks.org/problems/";
function p(name, diff, src, slug) {
  return { name, difficulty: diff, source: src === 0 ? "LeetCode" : "GeeksforGeeks", url: (src === 0 ? LC : GFG) + slug + "/" };
}
const E = "Easy", M = "Medium", H = "Hard";

const PATTERNS = [
  {
    id: "arrays", name: "Arrays", icon: "📦",
    accentVar: "--cat-arrays",
    description: "Foundation of most interview problems. Tests in-place manipulation, prefix computations, and classic array algorithms like Kadane's and Dutch National Flag.",
    keyInsight: "Think about what happens when the array is sorted. In-place tricks (swap, overwrite) avoid extra space. Prefix sums turn range queries into O(1).",
    algorithms: ["Kadane's Algorithm", "Prefix Sum", "Boyer-Moore Voting", "Dutch National Flag", "In-Place Array Operations"],
    codeTemplate: `# Kadane's Algorithm — Maximum Subarray
def maxSubArray(nums):
    cur = best = nums[0]
    for n in nums[1:]:
        cur = max(n, cur + n)
        best = max(best, cur)
    return best`,
    problems: [
      {
        algorithm: "Prefix Sum",
        list: [
          p("Product of Array Except Self", M, 0, "product-of-array-except-self"), p("Subarray Sum Equals K", M, 0, "subarray-sum-equals-k"),
          p("Range Sum Query - Immutable", E, 0, "range-sum-query-immutable"), p("Minimum Size Subarray Sum", M, 0, "minimum-size-subarray-sum")
        ]
      },
      {
        algorithm: "In-Place Array Operations",
        list: [
          p("Remove Duplicates from Sorted Array", E, 0, "remove-duplicates-from-sorted-array"), p("Move Zeroes", E, 0, "move-zeroes"),
          p("Merge Sorted Array", E, 0, "merge-sorted-array"), p("Find the Duplicate Number", M, 0, "find-the-duplicate-number"),
          p("First Missing Positive", H, 0, "first-missing-positive"), p("Find All Numbers Disappeared in Array", E, 0, "find-all-numbers-disappeared-in-an-array"),
          p("Next Permutation", M, 0, "next-permutation"), p("Rotate Array", M, 0, "rotate-array")
        ]
      },
      {
        algorithm: "Kadane's Algorithm & Math",
        list: [
          p("Best Time to Buy and Sell Stock", E, 0, "best-time-to-buy-and-sell-stock"), p("Plus One", E, 0, "plus-one"),
          p("Pascal's Triangle", E, 0, "pascals-triangle"), p("Trapping Rain Water", H, 0, "trapping-rain-water")
        ]
      },
      {
        algorithm: "Dutch National Flag & Boyer-Moore",
        list: [
          p("Sort Colors", M, 0, "sort-colors"), p("Majority Element", E, 0, "majority-element")
        ]
      }
    ]
  },
  {
    id: "hashing", name: "Hashing", icon: "#️⃣",
    accentVar: "--cat-hashing",
    description: "Hash maps and sets provide O(1) lookups. Essential for frequency counting, duplicate detection, grouping, and complement-based pair problems.",
    keyInsight: "When you see 'find duplicates', 'group by', or 'check if exists' — reach for a hash map. Two Sum is the mother of all hash problems.",
    algorithms: ["Hashing / Frequency Count", "Two Sum Pattern", "Anagram Grouping", "Set Operations"],
    codeTemplate: `# Two Sum pattern
def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        comp = target - n
        if comp in seen:
            return [seen[comp], i]
        seen[n] = i`,
    problems: [
      {
        algorithm: "Hashing / Frequency Count",
        list: [
          p("Two Sum", E, 0, "two-sum"), p("Contains Duplicate", E, 0, "contains-duplicate"), p("Valid Anagram", E, 0, "valid-anagram"),
          p("Group Anagrams", M, 0, "group-anagrams"), p("Top K Frequent Elements", M, 0, "top-k-frequent-elements"),
          p("Valid Sudoku", M, 0, "valid-sudoku"), p("Intersection of Two Arrays II", E, 0, "intersection-of-two-arrays-ii"),
          p("Encode and Decode Strings", M, 1, "encode-and-decode-strings"), p("4Sum II", M, 0, "4sum-ii"),
          p("Longest Consecutive Sequence", M, 0, "longest-consecutive-sequence")
        ]
      }
    ]
  },
  {
    id: "two-pointers", name: "Two Pointers", icon: "👆",
    accentVar: "--cat-two-pointers",
    description: "Uses two pointers traversing a data structure simultaneously — from opposite ends, same direction, or at different speeds — to efficiently solve pair/triplet problems.",
    keyInsight: "If the array is sorted (or can be sorted), two pointers from opposite ends avoid O(n²). For linked lists, fast/slow pointers detect cycles.",
    algorithms: ["Two Pointer Technique", "Three Pointer / 3Sum", "Fast & Slow Pointers", "Squeeze Technique"],
    codeTemplate: `# Two pointers on sorted array
def two_sum_sorted(nums, target):
    l, r = 0, len(nums) - 1
    while l < r:
        s = nums[l] + nums[r]
        if s == target: return [l, r]
        elif s < target: l += 1
        else: r -= 1`,
    problems: [
      {
        algorithm: "Opposite Ends (Squeeze Technique)",
        list: [
          p("Valid Palindrome", E, 0, "valid-palindrome"), p("Two Sum II", M, 0, "two-sum-ii-input-array-is-sorted"),
          p("Container With Most Water", M, 0, "container-with-most-water"), p("Reverse String", E, 0, "reverse-string"),
          p("Squares of a Sorted Array", E, 0, "squares-of-a-sorted-array"), p("Trapping Rain Water", H, 0, "trapping-rain-water"),
          p("Boats to Save People", M, 0, "boats-to-save-people")
        ]
      },
      {
        algorithm: "Same Direction / Fast & Slow",
        list: [
          p("Remove Element", E, 0, "remove-element"), p("Move Zeroes", E, 0, "move-zeroes"),
          p("Remove Duplicates from Sorted Array II", M, 0, "remove-duplicates-from-sorted-array-ii"),
          p("Backspace String Compare", E, 0, "backspace-string-compare"), p("Is Subsequence", E, 0, "is-subsequence"),
          p("Partition Labels", M, 0, "partition-labels"), p("Sort Colors", M, 0, "sort-colors"), p("Assign Cookies", E, 0, "assign-cookies")
        ]
      },
      {
        algorithm: "Three Pointer / Multi-Pointer",
        list: [
          p("3Sum", M, 0, "3sum"), p("3Sum Closest", M, 0, "3sum-closest"), p("4Sum", M, 0, "4sum")
        ]
      }
    ]
  },
  {
    id: "sliding-window", name: "Sliding Window", icon: "🪟",
    accentVar: "--cat-sliding-window",
    description: "Maintains a contiguous window over data, expanding/shrinking to find optimal subsets. Converts brute-force O(n²) substring/subarray problems to O(n).",
    keyInsight: "Fixed window: slide by adding right, removing left. Variable window: expand right until invalid, then shrink left until valid again.",
    algorithms: ["Fixed-Size Sliding Window", "Variable-Size Sliding Window", "Shrinkable Window", "Rabin-Karp (Rolling Hash)"],
    codeTemplate: `# Variable sliding window
def longest_substring(s):
    seen = set()
    l = res = 0
    for r in range(len(s)):
        while s[r] in seen:
            seen.remove(s[l]); l += 1
        seen.add(s[r])
        res = max(res, r - l + 1)
    return res`,
    problems: [
      {
        algorithm: "Fixed-Size Sliding Window",
        list: [
          p("Maximum Average Subarray I", E, 0, "maximum-average-subarray-i"), p("Find All Anagrams in a String", M, 0, "find-all-anagrams-in-a-string"),
          p("Permutation in String", M, 0, "permutation-in-string"), p("Maximum Number of Vowels in a Substring", M, 0, "maximum-number-of-vowels-in-a-substring-of-given-length"),
          p("Substring with Concatenation of All Words", H, 0, "substring-with-concatenation-of-all-words")
        ]
      },
      {
        algorithm: "Variable-Size Sliding Window",
        list: [
          p("Best Time to Buy and Sell Stock", E, 0, "best-time-to-buy-and-sell-stock"), p("Longest Substring Without Repeating Characters", M, 0, "longest-substring-without-repeating-characters"),
          p("Longest Repeating Character Replacement", M, 0, "longest-repeating-character-replacement"), p("Minimum Size Subarray Sum", M, 0, "minimum-size-subarray-sum"),
          p("Max Consecutive Ones III", M, 0, "max-consecutive-ones-iii"), p("Longest Subarray of 1's After Deleting One Element", M, 0, "longest-subarray-of-1s-after-deleting-one-element"),
          p("Fruit Into Baskets", M, 0, "fruit-into-baskets"), p("Count Number of Nice Subarrays", M, 0, "count-number-of-nice-subarrays")
        ]
      },
      {
        algorithm: "Shrinkable Window / Advanced",
        list: [
          p("Minimum Window Substring", H, 0, "minimum-window-substring"), p("Sliding Window Maximum", H, 0, "sliding-window-maximum"),
          p("Frequency of Most Frequent Element", M, 0, "frequency-of-the-most-frequent-element"), p("Grumpy Bookstore Owner", M, 0, "grumpy-bookstore-owner"),
          p("Subarrays with K Different Integers", H, 0, "subarrays-with-k-different-integers")
        ]
      }
    ]
  },
  {
    id: "stack", name: "Stack", icon: "📚",
    accentVar: "--cat-stack",
    description: "LIFO data structure ideal for matching pairs, nested structures, and maintaining monotonic sequences for next-greater/smaller element problems.",
    keyInsight: "When you see nested or matching structures (parentheses, HTML tags), use a stack. For 'next greater element', use a monotonic stack.",
    algorithms: ["Monotonic Stack", "Shunting Yard Algorithm", "Balanced Parentheses Check", "Next Greater Element"],
    codeTemplate: `# Monotonic stack — next greater element
def next_greater(nums):
    res = [-1] * len(nums)
    stack = []
    for i, n in enumerate(nums):
        while stack and nums[stack[-1]] < n:
            res[stack.pop()] = n
        stack.append(i)
    return res`,
    problems: [
      {
        algorithm: "Balanced Parentheses & String parsing",
        list: [
          p("Valid Parentheses", E, 0, "valid-parentheses"), p("Generate Parentheses", M, 0, "generate-parentheses"),
          p("Simplify Path", M, 0, "simplify-path"), p("Decode String", M, 0, "decode-string"),
          p("Remove All Adjacent Duplicates In String", E, 0, "remove-all-adjacent-duplicates-in-string")
        ]
      },
      {
        algorithm: "Expression Evaluation",
        list: [
          p("Evaluate Reverse Polish Notation", M, 0, "evaluate-reverse-polish-notation"), p("Basic Calculator", H, 0, "basic-calculator"),
          p("Basic Calculator II", M, 0, "basic-calculator-ii")
        ]
      },
      {
        algorithm: "Monotonic Stack",
        list: [
          p("Daily Temperatures", M, 0, "daily-temperatures"), p("Next Greater Element I", E, 0, "next-greater-element-i"),
          p("Next Greater Element II", M, 0, "next-greater-element-ii"), p("Car Fleet", M, 0, "car-fleet"),
          p("Largest Rectangle in Histogram", H, 0, "largest-rectangle-in-histogram"), p("Online Stock Span", M, 0, "online-stock-span")
        ]
      },
      {
        algorithm: "State/Min Tracking Stack",
        list: [
          p("Min Stack", M, 0, "min-stack"), p("Asteroid Collision", M, 0, "asteroid-collision")
        ]
      }
    ]
  },
  {
    id: "binary-search", name: "Binary Search", icon: "🔍",
    accentVar: "--cat-binary-search",
    description: "Divides the search space in half each step. Extends beyond sorted arrays to 'search on answer' problems where you binary search the solution space.",
    keyInsight: "If the answer space is monotonic (sorted), you can binary search it. Look for 'minimum X that satisfies condition' — classic binary search on answer.",
    algorithms: ["Classic Binary Search", "Binary Search on Answer", "Upper / Lower Bound", "Bisect Left / Right"],
    codeTemplate: `# Binary search on answer
def min_capacity(weights, days):
    lo, hi = max(weights), sum(weights)
    while lo < hi:
        mid = (lo + hi) // 2
        if can_ship(weights, days, mid):
            hi = mid
        else:
            lo = mid + 1
    return lo`,
    problems: [
      {
        algorithm: "Classic Binary Search",
        list: [
          p("Binary Search", E, 0, "binary-search"), p("Search Insert Position", E, 0, "search-insert-position"),
          p("Find First and Last Position", M, 0, "find-first-and-last-position-of-element-in-sorted-array"),
          p("Guess Number Higher or Lower", E, 0, "guess-number-higher-or-lower"), p("First Bad Version", E, 0, "first-bad-version"),
          p("Sqrt(x)", E, 0, "sqrtx")
        ]
      },
      {
        algorithm: "Search in Rotated/2D Arrays",
        list: [
          p("Search a 2D Matrix", M, 0, "search-a-2d-matrix"), p("Find Minimum in Rotated Sorted Array", M, 0, "find-minimum-in-rotated-sorted-array"),
          p("Search in Rotated Sorted Array", M, 0, "search-in-rotated-sorted-array"), p("Find Peak Element", M, 0, "find-peak-element"),
          p("Single Element in Sorted Array", M, 0, "single-element-in-a-sorted-array")
        ]
      },
      {
        algorithm: "Binary Search on Answer / Advanced",
        list: [
          p("Koko Eating Bananas", M, 0, "koko-eating-bananas"), p("Capacity To Ship Packages Within D Days", M, 0, "capacity-to-ship-packages-within-d-days"),
          p("Split Array Largest Sum", H, 0, "split-array-largest-sum"), p("Time Based Key-Value Store", M, 0, "time-based-key-value-store"),
          p("Median of Two Sorted Arrays", H, 0, "median-of-two-sorted-arrays"), p("Minimum Days to Make m Bouquets", M, 0, "minimum-number-of-days-to-make-m-bouquets")
        ]
      }
    ]
  },
  {
    id: "linked-list", name: "Linked List", icon: "🔗",
    accentVar: "--cat-linked-list",
    description: "Tests pointer manipulation, in-place operations, and cycle detection. Key technique: fast & slow pointers.",
    keyInsight: "Use a dummy head node to simplify edge cases. Fast/slow pointers find midpoints and detect cycles. Reverse in-place by re-pointing next pointers.",
    algorithms: ["Floyd's Cycle Detection", "In-Place Reversal", "Merge Sort (Linked List)", "Runner Technique (Fast/Slow)"],
    codeTemplate: `# Reverse a linked list
def reverse(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`,
    problems: [
      {
        algorithm: "In-Place Reversal",
        list: [
          p("Reverse Linked List", E, 0, "reverse-linked-list"), p("Reverse Nodes in k-Group", H, 0, "reverse-nodes-in-k-group"),
          p("Swap Nodes in Pairs", M, 0, "swap-nodes-in-pairs"), p("Palindrome Linked List", E, 0, "palindrome-linked-list")
        ]
      },
      {
        algorithm: "Floyd's Cycle / Fast & Slow Pointers",
        list: [
          p("Linked List Cycle", E, 0, "linked-list-cycle"), p("Middle of the Linked List", E, 0, "middle-of-the-linked-list"),
          p("Reorder List", M, 0, "reorder-list"), p("Remove Nth Node From End", M, 0, "remove-nth-node-from-end-of-list"),
          p("Intersection of Two Linked Lists", E, 0, "intersection-of-two-linked-lists"), p("Rotate List", M, 0, "rotate-list")
        ]
      },
      {
        algorithm: "Merge / Multiple Pointers",
        list: [
          p("Merge Two Sorted Lists", E, 0, "merge-two-sorted-lists"), p("Merge k Sorted Lists", H, 0, "merge-k-sorted-lists"),
          p("Sort List", M, 0, "sort-list"), p("Add Two Numbers", M, 0, "add-two-numbers"),
          p("Copy List with Random Pointer", M, 0, "copy-list-with-random-pointer"), p("LRU Cache", M, 0, "lru-cache"),
          p("Odd Even Linked List", M, 0, "odd-even-linked-list"), p("Remove Linked List Elements", E, 0, "remove-linked-list-elements")
        ]
      }
    ]
  },
  {
    id: "trees", name: "Trees", icon: "🌳",
    accentVar: "--cat-trees",
    description: "Hierarchical structures testing recursion, DFS/BFS traversals, and BST properties. Most tree problems follow a recursive pattern.",
    keyInsight: "Think recursively: solve for root using solutions from left and right subtrees. For level-order problems use BFS with a queue.",
    algorithms: ["DFS (Preorder / Inorder / Postorder)", "BFS (Level Order)", "Morris Traversal", "BST Property Check", "Lowest Common Ancestor"],
    codeTemplate: `# DFS tree pattern
def max_depth(root):
    if not root: return 0
    left = max_depth(root.left)
    right = max_depth(root.right)
    return 1 + max(left, right)`,
    problems: [
      {
        algorithm: "DFS (Depth-First Search)",
        list: [
          p("Maximum Depth of Binary Tree", E, 0, "maximum-depth-of-binary-tree"), p("Invert Binary Tree", E, 0, "invert-binary-tree"),
          p("Diameter of Binary Tree", E, 0, "diameter-of-binary-tree"), p("Balanced Binary Tree", E, 0, "balanced-binary-tree"),
          p("Same Tree", E, 0, "same-tree"), p("Subtree of Another Tree", E, 0, "subtree-of-another-tree"),
          p("Symmetric Tree", E, 0, "symmetric-tree"), p("Minimum Depth of Binary Tree", E, 0, "minimum-depth-of-binary-tree"),
          p("Path Sum", E, 0, "path-sum"), p("Path Sum II", M, 0, "path-sum-ii"),
          p("Binary Tree Maximum Path Sum", H, 0, "binary-tree-maximum-path-sum")
        ]
      },
      {
        algorithm: "BFS (Level Order Traversal)",
        list: [
          p("Binary Tree Level Order Traversal", M, 0, "binary-tree-level-order-traversal"), p("Binary Tree Right Side View", M, 0, "binary-tree-right-side-view"),
          p("Binary Tree Zigzag Level Order Traversal", M, 0, "binary-tree-zigzag-level-order-traversal"), p("All Nodes Distance K", M, 0, "all-nodes-distance-k-in-binary-tree"),
          p("Serialize and Deserialize Binary Tree", H, 0, "serialize-and-deserialize-binary-tree")
        ]
      },
      {
        algorithm: "BST Property & LCA",
        list: [
          p("Validate Binary Search Tree", M, 0, "validate-binary-search-tree"), p("Kth Smallest Element in a BST", M, 0, "kth-smallest-element-in-a-bst"),
          p("Lowest Common Ancestor of BST", M, 0, "lowest-common-ancestor-of-a-binary-search-tree"), p("Binary Search Tree Iterator", M, 0, "binary-search-tree-iterator"),
          p("Unique Binary Search Trees", M, 0, "unique-binary-search-trees"), p("Construct BT from Preorder and Inorder", M, 0, "construct-binary-tree-from-preorder-and-inorder-traversal"),
          p("Count Good Nodes in Binary Tree", M, 0, "count-good-nodes-in-binary-tree"), p("Flatten Binary Tree to Linked List", M, 0, "flatten-binary-tree-to-linked-list"),
          p("House Robber III", M, 0, "house-robber-iii")
        ]
      }
    ]
  },
  {
    id: "tries", name: "Tries", icon: "🔤",
    accentVar: "--cat-tries",
    description: "Prefix tree for efficient string operations — autocomplete, spell-check, and word search problems.",
    keyInsight: "Each node stores children (usually a dict or array of 26). Mark end-of-word nodes. Traverse character by character.",
    algorithms: ["Trie Insert / Search", "Prefix Matching", "Bitwise Trie (XOR)", "Autocomplete via DFS"],
    codeTemplate: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    def insert(self, word):
        node = self.root
        for c in word:
            if c not in node.children:
                node.children[c] = TrieNode()
            node = node.children[c]
        node.is_end = True`,
    problems: [
      {
        algorithm: "Trie Insert / Search",
        list: [
          p("Implement Trie (Prefix Tree)", M, 0, "implement-trie-prefix-tree"), p("Design Add and Search Words", M, 0, "design-add-and-search-words-data-structure"),
          p("Replace Words", M, 0, "replace-words"), p("Map Sum Pairs", M, 0, "map-sum-pairs")
        ]
      },
      {
        algorithm: "Prefix Matching & Autocomplete",
        list: [
          p("Search Suggestions System", M, 0, "search-suggestions-system"), p("Word Search II", H, 0, "word-search-ii"),
          p("Longest Word in Dictionary", M, 0, "longest-word-in-dictionary"), p("Palindrome Pairs", H, 0, "palindrome-pairs")
        ]
      },
      {
        algorithm: "Bitwise Trie (XOR)",
        list: [
          p("Maximum XOR of Two Numbers", M, 0, "maximum-xor-of-two-numbers-in-an-array")
        ]
      }
    ]
  },
  {
    id: "heap", name: "Heap / Priority Queue", icon: "⛰️",
    accentVar: "--cat-heap",
    description: "Efficient min/max access in O(log n). Essential for top-K, streaming median, and scheduling problems.",
    keyInsight: "Use a max-heap for 'K smallest' and a min-heap for 'K largest'. Two heaps (max + min) solve streaming median.",
    algorithms: ["Min Heap / Max Heap", "Two Heap (Median)", "Top-K via Heap", "Heap Sort", "Quickselect"],
    codeTemplate: `import heapq
# Top K frequent elements
def top_k(nums, k):
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(),
                          key=count.get)`,
    problems: [
      {
        algorithm: "Min Heap / Max Heap (Top-K)",
        list: [
          p("Kth Largest Element in a Stream", E, 0, "kth-largest-element-in-a-stream"), p("Kth Largest Element in an Array", M, 0, "kth-largest-element-in-an-array"),
          p("Top K Frequent Elements", M, 0, "top-k-frequent-elements"), p("K Closest Points to Origin", M, 0, "k-closest-points-to-origin"),
          p("Sort Characters By Frequency", M, 0, "sort-characters-by-frequency"), p("Relative Ranks", E, 0, "relative-ranks")
        ]
      },
      {
        algorithm: "Scheduling/Greedy with Heap",
        list: [
          p("Last Stone Weight", E, 0, "last-stone-weight"), p("Task Scheduler", M, 0, "task-scheduler"),
          p("Reorganize String", M, 0, "reorganize-string"), p("Furthest Building You Can Reach", M, 0, "furthest-building-you-can-reach"),
          p("IPO", H, 0, "ipo"), p("Ugly Number II", M, 0, "ugly-number-ii")
        ]
      },
      {
        algorithm: "Advanced Heaps (Merge/Two Heaps)",
        list: [
          p("Merge k Sorted Lists", H, 0, "merge-k-sorted-lists"), p("Design Twitter", M, 0, "design-twitter"),
          p("Find Median from Data Stream", H, 0, "find-median-from-data-stream"), p("Sliding Window Median", H, 0, "sliding-window-median")
        ]
      }
    ]
  },
  {
    id: "backtracking", name: "Backtracking", icon: "🔙",
    accentVar: "--cat-backtracking",
    description: "Explores all possible solutions by making choices incrementally and undoing them when they fail constraints. Builds a decision tree.",
    keyInsight: "Template: choose → explore → unchoose. Prune branches early when constraints are violated to avoid exponential blowup.",
    algorithms: ["Recursive Backtracking", "Pruning", "Permutation Generation", "Subset Generation", "N-Queens Placement"],
    codeTemplate: `# Subsets pattern
def subsets(nums):
    res = []
    def backtrack(start, path):
        res.append(path[:])
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()
    backtrack(0, [])
    return res`,
    problems: [
      {
        algorithm: "Subset / Combination Generation",
        list: [
          p("Subsets", M, 0, "subsets"), p("Subsets II", M, 0, "subsets-ii"),
          p("Combination Sum", M, 0, "combination-sum"), p("Combination Sum II", M, 0, "combination-sum-ii"),
          p("Combinations", M, 0, "combinations"), p("Letter Combinations of a Phone Number", M, 0, "letter-combinations-of-a-phone-number"),
          p("Generate Parentheses", M, 0, "generate-parentheses")
        ]
      },
      {
        algorithm: "Permutation Generation",
        list: [
          p("Permutations", M, 0, "permutations"), p("Permutations II", M, 0, "permutations-ii")
        ]
      },
      {
        algorithm: "Pruning & Grid Search",
        list: [
          p("Word Search", M, 0, "word-search"), p("Palindrome Partitioning", M, 0, "palindrome-partitioning"),
          p("Restore IP Addresses", M, 0, "restore-ip-addresses"), p("Partition to K Equal Sum Subsets", M, 0, "partition-to-k-equal-sum-subsets"),
          p("Matchsticks to Square", M, 0, "matchsticks-to-square")
        ]
      },
      {
        algorithm: "N-Queens & Exact Cover",
        list: [
          p("N-Queens", H, 0, "n-queens"), p("Sudoku Solver", H, 0, "sudoku-solver")
        ]
      }
    ]
  }
];
