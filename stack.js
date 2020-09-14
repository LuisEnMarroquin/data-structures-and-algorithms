class Stack {
  constructor (maxSize) {
    this.top = 0
    this.data = []
    this.maximumSize = maxSize
  }
  push (newItem) {
    if (this.top < this.maximumSize) {
      this.data[this.top] = newItem
      this.top++
      console.log('\n', this.get)
    } else {
      console.log('\n', `Stack (${this.top}) is full, can't add ${newItem}`)
    }
  }
  pop () {
    if (this.top !== 0) {
      this.top--
      console.log('\n', this.get)
    }
  }
  get get () {
    return [
      this.top,
      this.data.slice(0, this.top)
    ]
  }
}

const array = new Stack(3)

array.push('Kevin')

array.push('Sally')

array.push('David')

array.push('Sonya')

array.pop()

array.push('Jessy')

array.push('Donald')
