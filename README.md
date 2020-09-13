# Data structures and Algorithms

Some great coding challenges using JavaScript and Python

## Linter

Install dependencies

```shell
pip install pylint
npm install -g standard
```

Run script for all files

```shell
sh linter.sh
```

## Data structures

A data structure is a data organization, management, and storage format that enables efficient access and modification.
More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.
From [Wikipedia](https://en.wikipedia.org/wiki/Data_structure)

### Hash maps (Hash tables)

What is a Hashing algorithm? It's a calculation applied to a key to transform in to an address
* For numeric keys, divide the key by the number of available addresses and take the remainder
* For alphanumeric keys, divide the sum of ASCII codes in a key by the number of availiable addresses and take the remainder
* Folding method divides key into equal parts then adds the parts together
  * The phone number **01 452 834 5654**, becomes 01 + 45 + 28 + 34 + 56 + 54 = 218
  * Depending on size of table, may then divide by some constant and take remainder

Collision resolution
* Linear probing
* Plus 3 rehash
* Quadratic probing => (failedAttemps)²
* Double hashing

Objectives of Hash function
* Minimize collisions
* Uniform distribution of hash values
* Easy to calculate
* Resolve any collisions

Summary
* Hash tables are used to index large amounts of data
* Address of each key is calculated using the key itself
* Collisions are resolved with open or closed addressing
* Hashing is widely used in database indexing, compilers, caching, password authentication, and more
* Insertion, deletion and retrieval occur in constant time

Files
* hashTable.js

| Nm  | 1st    | 2nd     | 3rd     | Operation             | I | Res |
|-----|--------|---------|---------|-----------------------|---|-----|
| Mia | M = 77 | i = 105 | a = 097 | (77 + 105 + 097) % 11 | 4 | Bea |
| Tim | T = 84 | i = 105 | m = 109 | (84 + 105 + 109) % 11 | 1 | Tim |
| Bea | B = 66 | e = 101 | a = 097 | (66 + 101 + 097) % 11 | 0 | Len |
| Zoe | Z = 90 | o = 111 | e = 101 | (90 + 111 + 101) % 11 | 5 | Moe |
| Sue | S = 83 | u = 117 | e = 101 | (83 + 117 + 101) % 11 | 4 | Mia |
| Len | L = 76 | e = 101 | n = 110 | (76 + 101 + 110) % 11 | 1 | Zoe |
| Moe | M = 77 | o = 111 | e = 101 | (77 + 111 + 101) % 11 | 3 | Sue |
| Lou | L = 76 | o = 111 | u = 117 | (76 + 111 + 117) % 11 | 7 | Lou |
| Rae | R = 82 | a = 097 | e = 101 | (82 + 097 + 101) % 11 | 5 | Rae |
| Max | M = 77 | a = 097 | x = 120 | (77 + 097 + 120) % 11 | 8 | Max |
| Tod | T = 84 | o = 111 | d = 100 | (84 + 111 + 100) % 11 | 9 | Tod |

From YouTube channel **Computer Science** - [Hash Tables and Hash Functions](https://www.youtube.com/watch?v=KyUTuwz_b7Q)

### Linked lists

| ID | Added   | Start | NextFree | Next Values in Array | Before  | After   |
|----|---------|-------|----------|----------------------|---------|---------|
| 1  | Chloe   | 1     | 2        | [ 0 ]                | -       | -       |
| 2  | Francis | 1     | 3        | [ 2, 0 ]             | Chloe   | -       |
| 3  | Beatrix | 3     | 4        | [ 2, 0, 1 ]          | -       | Chloe   |
| 4  | David   | 3     | 5        | [ 4, 0, 1, 2 ]       | Chloe   | Francis |
| 5  | Edward  | 3     | 6        | [ 4, 0, 1, 5, 2 ]    | David   | Francis |
| 6  | Abigail | 6     | 7        | [ 4, 0, 1, 5, 2, 3 ] | -       | Beatrix |

From YouTube channel **Computer Science** - [Linked List Data Structure 3. Building a Linked List (algorithm and pseudocode).](https://www.youtube.com/watch?v=RFeshndMUw)

### Stacks
### Queues

### Trees

What is a binary tree? Is a tree data structure in which each node has at most two children

Files
* binaryTree.js
* binaryTree.py

Challenge

```
Given a binary tree, get the average value at each level of the tree

Input

|     04     |     n1     |
|    /  \    |    /  \    |
|   07  09   |   n2  n3   |
|  /  \  \   |  /  \  \   |
| 10  02  06 | n4  n5  n6 |
|      \     |      \     |
|      06    |      n7    |
|      /     |      /     |
|     02     |     n8     |

Output [4, 8, 6, 6, 2]
```

### Heaps
### Tries
### Graphs

## Algorithms

An algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation.
Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
From [Wikipedia](https://en.wikipedia.org/wiki/Algorithm)

### Quicksort
### Merge sort
### Binary search
### Depth-first search
### Breadth-first search
