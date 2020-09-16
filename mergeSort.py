def merge(array, leftSide, midItem, rightSide):
  leftArr = array[leftSide : midItem + 1]
  rightArr = array[midItem + 1 : rightSide + 1]
  k = leftSide
  i = 0
  j = 0
  while i < len(leftArr) and j < len(rightArr):
    if leftArr[i] < rightArr[j]:
      array[k] = leftArr[i]
      i += 1
    else:
      array[k] = rightArr[j]
      j += 1
    k += 1
  while i < len(leftArr):
    array[k] = leftArr[i]
    i += 1
    k += 1
  while j < len(rightArr):
    array[k] = rightArr[j]
    j += 1
    k += 1
  return array

def mergeSort(array, leftSide=None, rightSide=None):
  """
  >>> mergeSort([3, 2, 1])
  [1, 2, 3]
  >>> mergeSort([3, 2, 1, 0, 1, 2, 3, 5, 4])
  [0, 1, 1, 2, 2, 3, 3, 4, 5]
  """
  if leftSide is None:
    leftSide = 0
  if rightSide is None:
    rightSide = len(array) - 1
  if leftSide < rightSide:
    midItem = (leftSide + rightSide) // 2
    mergeSort(array, leftSide, midItem)
    mergeSort(array, midItem + 1, rightSide)
    merge(array, leftSide, midItem, rightSide)
    return array

if __name__ == "__main__":
  import doctest
  doctest.testmod()
