import sys
sys.setrecursionlimit(30)

unsorted = [5, 2, 7, 6, 1, 9, 4, 8, 12, 10, 3, 11]

def partition(leftPointer, rightPointer, currentPointer):
  initPointer = leftPointer if currentPointer == 'R' else rightPointer
  pivot = unsorted[initPointer]

  while leftPointer != rightPointer:
    if currentPointer == 'R':
      if unsorted[rightPointer] < pivot:
        unsorted[leftPointer] = unsorted[rightPointer]
        leftPointer = leftPointer + 1
        currentPointer = 'L'
      else:
        rightPointer = rightPointer - 1
    elif currentPointer == 'L':
      if unsorted[leftPointer] > pivot:
        unsorted[rightPointer] = unsorted[leftPointer]
        rightPointer = rightPointer - 1
        currentPointer = 'R'
      else:
        leftPointer = leftPointer + 1

  unsorted[leftPointer] = pivot
  return pivot

def quickSort(left, right, pointer):
  if left < right:
    pivotPosition = partition(left, right, pointer)
    quickSort(left, pivotPosition - 1, 'R')
    quickSort(pivotPosition + 1, right, 'L')

print(unsorted)

quickSort(0, len(unsorted) - 1, 'R')

print(unsorted)
