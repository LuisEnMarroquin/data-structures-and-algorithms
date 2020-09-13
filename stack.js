class Stack {
  constructor (maxSize) {
    this.Top = 0
    this.Data = []
    this.MaximumSize = maxSize
  }
  get getItems () {
    return {
      Top: this.Top,
      Data: this.Data
    }
  }
  push (newItem) {
    if (this.Top < this.MaximumSize) {
      this.Data[this.Top] = newItem
      this.Top++
    } else {
      console.log('\n', 'Stack is full', this.Top)
    }
  }
  pop () {
    if (this.Top !== 0) this.Top--
  }
}

const array = new Stack(5)

array.push('Kevin')
console.log('\n', array.getItems)

array.push('Sally')
console.log('\n', array.getItems)

array.push('Beatrix')
console.log('\n', array.getItems)

array.push('David')
console.log('\n', array.getItems)

array.push('Jack')
console.log('\n', array.getItems)

array.push('Sonya')
array.pop()

array.push('Sonya')
console.log('\n', array.getItems)
