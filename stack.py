class Stack():
  def __init__(self, maxSize):
    self.top = 0
    self.data = []
    self.maximumSize = maxSize
  def get(self):
    print('\n', [
      self.top,
      self.data[0:self.top]
    ])
  def push(self, newItem):
    if self.top < self.maximumSize:
      if self.top == len(self.data):
        self.data.append(newItem)
      else:
        self.data[self.top] = newItem
      self.top = self.top + 1
      self.get()
    else:
      print('\n', "Stack ({}) is full, can't add {}".format(self.top, newItem))
  def pop(self):
    if self.top != 0:
      self.top = self.top -1
      self.get()

if __name__ == "__main__":

  array = Stack(3)

  array.push('Kevin')

  array.push('Sally')

  array.push('David')

  array.push('Sonya')

  array.pop()

  array.push('Jessy')

  array.push('Harry')
