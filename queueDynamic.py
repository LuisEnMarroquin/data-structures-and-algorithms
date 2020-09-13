class Queue():
  def __init__(self, firstItem):
    self.front = 1
    self.nextFree = 2
    self.data = [ firstItem ]
    self.get()
  def append(self, newItem):
    self.data.insert(self.nextFree - 1, newItem)
    self.nextFree = self.nextFree + 1
    self.get()
  def pop(self):
    if self.front < self.nextFree:
      self.front = self.front + 1
      self.get()
    else:
      print("Can't pop, queue is empty")
  def get(self):
    cutData = self.data[slice(self.front - 1, len(self.data))]
    print(self.front, self.nextFree, len(self.data), cutData)

item = Queue("Kevin")

item.pop()

item.pop()

item.append('Sally')

item.append('Harry')

item.append('Evelyn')

item.append('Noah')

item.pop()

item.append('Florence')

item.append('Theodore')

item.pop()

item.append('Harper')
