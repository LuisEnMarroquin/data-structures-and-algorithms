class Queue():
  def __init__(self, maxSize):
    self.front = 1
    self.rear = 1
    self.data = []
    self.maximumSize = maxSize
  def enqueue(self, newItem):
    if self.maximumSize > (self.rear - 1):
      if self.front <= self.rear:
        self.data.append(newItem)
        self.rear = self.rear + 1
      else:
        self.data[self.rear - 1] = newItem
        self.rear = self.rear + 1
      self.get()
    else:
      print('* * *', "Can't add {}, queue is full".format(newItem))
  def dequeue(self):
    if self.front < self.rear:
      self.front = self.front + 1
      self.get()
    else:
      print('* * *', "Can't dequeue, queue is empty")
  def shuffle(self):
    if self.front - 2 > 0:
      self.data.pop(self.front - 2)
      self.front = self.front - 1
      self.rear = self.rear - 1
      self.get()
    else:
      print('* * *', "There are no items to shuffle")
  def get(self):
    cutData = self.data[slice(self.front - 1, self.rear - 1)]
    print(self.front, self.rear, len(self.data), cutData)

item = Queue(6)

item.shuffle()

item.dequeue()

item.enqueue('Kevin')

item.dequeue()

item.dequeue()

item.enqueue('Sally')

item.enqueue('Harry')

item.enqueue('Evelyn')

item.enqueue('Noah')

item.dequeue()

item.enqueue('Florence')

item.enqueue('Theodore')

item.shuffle()

item.enqueue('Donald')
