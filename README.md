# Data structures and Algorithms

Some great coding challenges using JavaScript and Python

## Requirements

* [Node.js](https://nodejs.org)
* [Python 3](https://www.python.org)
* [gcc / g++](https://es.wikipedia.org/wiki/GNU_Compiler_Collection)

## Lint code

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

A linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next.
From [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)

Files
* linkedList.js

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

A stack is a dynamic data structure because the ammout of data that it can increase and decrease while is in use.
A stack is known as a last in first out data structure because new items are added at the top of the stack, and items can only be removed from the top of the stack.
We can create const `MaximumSize` to indicate how many items the stack can contain, and `Top` pointer to indicate the top of the stack, with an empty stack `Top = 0`.
When we take data from the stack we don't necessarily remove it from the array that contains the data, all we need to do is redefine `Top`.

Summary
* Items are **pushed** onto the top of a stack
* Items are **popped** off the top of a stack
* A last in first out data structure (LIFO)
* A stack is an abstract data type (ADT)
* Call stack stores return addresses, parameters and register contents when sub routines are called
* Stacks are used by compilers to evaluate mathematical expressions which requiere intermediate steps

Files
* stack.cpp
* stack.js
* stack.py

From YouTube channel **Computer Science** - [Stack Data Structure - Algorithm](https://www.youtube.com/watch?v=niBsGw4h5yI)

### Queues

A queue is a dynamic data structure in which items join at the back and leave upfront.

Linear queue (Dynamic array)
* A queue can be implemented as a linear queue, this could involve an array variable, more specifically a dynamic array, one with no fixed size.
* We also have a system of pointers, one to indicate the front of the queue `Front` and another pointer to indicate the next free position `NextFree`.
* Taking data from the queue is known as `Dequeue` of `Dequeuing`, and this means taking data from the front pointer and increament `Front`.
* When we take data from the queue we don't necessarily remove it from the array that contains the data, all we need to do is redefine `Front`.
* Easy to implement but memory is never freed up
* A busy queue may use up a lot of memory without 'containing' much data

Linear queue (Static array)
* We have a slightly different system of pointers, for example for this array `[ Kevin, Sally, Beatrix, null, null, null ]`
* One the indicate the front `Front=1`, another to indicate the rear `Rear=3` and finally another to indicate the number of items in the queue `NumberInQueue=3`
* When we dequeue, we take data from the position upfront, increment `Front++` and decrease `NumberInQueue--`
* When we enqueue data, we increment the values of `Rear++` and `NumberInQueue++`

Circular queue (Can only be: Static array)

Summary
* A queue is a dynamic data structure
* New items are added to the rear (enqueued)
* Items leave from the front (dequeued)
* A queue is a First In First Out data structure (FIFO)
* A queue can be Linear or circular
* A queue is an Abstract Data Type (ADT), this means that data is not necessarily in an array variable, could be stored for example in a text file, a database, etc.
* Queues are used to hold jobs waitine to be fun, used as buffers (e.g. keyboard), used to spool print output

Files
* queueCircular.py
* queueDynamic.py
* queueStatic.py

From YouTube channel **Computer Science** - [Queue Data Structure - Algorithms](https://www.youtube.com/watch?v=jXMqVpAVyMY)

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

From YouTube channel **Computer Science** - [Graph Data Structure 1. Terminology and Representation (algorithms)](https://www.youtube.com/watch?v=c8P9kB1eun4)

## Algorithms

An algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation.
Algorithms are always unambiguous and are used as specifications for performing calculations, data processing, automated reasoning, and other tasks.
From [Wikipedia](https://en.wikipedia.org/wiki/Algorithm)

### Quicksort

A quicksort is a divide and conquer algorithm, the essence of this if to repeatedly partition an unordered list.
A pivot is selected, then all of the items smaller than the pivot are put on the left-hand side and all of the items larger than the pivot are put on the right-hand side.
The pivot is then placed in between the two sub lists, the sub lists on either side of the pivot are still unordered.
But the pivot, which is in a sublist of only one item is now in the right place.
The partitioning process can then be repeated with the two unordered sub lists on either side of the pivot, which will generate even more sub lists.
We can continue to repeat the process with any sub lists that we generate which contain more than one item.
And ultimately we will have only single items which are all in the right place.

The quick sort is a divide and conquer algorithm which sorts a list by selecting a pivot value from the list, then placing other items on either side of the pivot depending on whether they are bigger or smaller.
This results in three partitions with the pivot in the correct place.
This partitioning process is repeated for each partition generated, until every partition contains only one item, each of which is in the correct place.
This video also includes descriptions of two different versions of pseudocode for the quick sort algorithm.

Files
* quickSort.py

From YouTube channel **Computer Science** - [Quicksort 1 – The Algorithm](https://www.youtube.com/watch?v=h_9kAXFKJwY)

### Merge sort

Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945. Conceptually, a merge sort works as follows:
* Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
* Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

![image-not-found](mergeSort.gif)

From [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)

Files
* mergeSort.py

From GitHub repository [TheAlgorithms/Python](https://github.com/TheAlgorithms/Python/pull/2441)

From YouTube channel **Computer Science** - [Merge Sort 1 – The Algorithm](https://www.youtube.com/watch?v=M5kMzPswo20)

### Binary search

From YouTube channel **Computer Science** - [Binary Search - Algorithm and Pseudo-code](https://www.youtube.com/watch?v=2BhQxgIgXX4)

### Depth-first search

From YouTube channel **Computer Science** - [Graph Data Structure 3. Traversing a Graph (algorithms)](https://www.youtube.com/watch?v=ymlzHmRN4To)

### Breadth-first search

From YouTube channel **Computer Science** - [Graph Data Structure 3. Traversing a Graph (algorithms)](https://www.youtube.com/watch?v=ymlzHmRN4To)
