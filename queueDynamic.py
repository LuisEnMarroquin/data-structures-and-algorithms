class Queue():
  def __init__(self):
    self.front = 1
    self.next = 1
    self.data = []
  def enqueue(self, newItem):
    self.data.insert(self.next - 1, newItem)
    self.next = self.next + 1
    self.get()
  def dequeue(self):
    if self.front < self.next:
      self.front = self.front + 1
      self.get()
    else:
      print('* * *', "Can't dequeue, queue is empty")
  def get(self):
    cutData = self.data[slice(self.front - 1, len(self.data))]
    print(self.front, self.next, len(self.data), cutData)

item = Queue()

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
