data = [5, 2, 7, 6, 1, 9, 4, 8]
print('pvt', data)

pivot = data[0]

currentPointer = 'R'

leftPointer = 0
rightPointer = len(data) - 1

while leftPointer != rightPointer:
  if currentPointer == 'R':
    if data[rightPointer] < pivot:
      data[leftPointer] = data[rightPointer]
      leftPointer = leftPointer + 1
      currentPointer = 'L'
    else:
      rightPointer = rightPointer - 1
  elif currentPointer == 'L':
    if data[leftPointer] > pivot:
      data[rightPointer] = data[leftPointer]
      rightPointer = rightPointer - 1
      currentPointer = 'R'
    else:
      leftPointer = leftPointer + 1

data[leftPointer] = pivot

print(pivot, leftPointer, data)

# Until now number 5 is in the correct place, the following are incorrect
