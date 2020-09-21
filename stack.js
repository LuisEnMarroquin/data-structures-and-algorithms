class Stack {
  constructor (maxSize) {
    this.top = 0
    this.data = []
    this.maximumSize = maxSize
  }
  get () {
    console.log('\n', [
      this.top,
      this.data.slice(0, this.top)
    ])
  }
  push (newItem) {
    if (this.top < this.maximumSize) {
      this.data[this.top] = newItem
      this.top++
      this.get()
    } else {
      console.log('\n', `Stack (${this.top}) is full, can't add ${newItem}`)
    }
  }
  pop () {
    if (this.top !== 0) {
      this.top--
      this.get()
    }
  }
}

const array = new Stack(3)

array.push('Kevin')

array.push('Sally')

array.push('David')

array.push('Sonya')

array.pop()

array.push('Jessy')

array.push('Harry')
