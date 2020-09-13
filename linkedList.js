class LinkedList {
  constructor (firstItem) {
    this.Start = 1
    this.NextFree = 2
    this.Contents = [
      { id: 1, next: 0, data: firstItem }
    ]
  }
  get getItems () {
    return {
      Start: this.Start,
      NextFree: this.NextFree,
      Contents: this.Contents
    }
  }
  addBefore (newItem, beforeOf = null) {
    let newObject = null
    if (!beforeOf) {
      newObject = { id: this.NextFree, next: 0, data: newItem }
      for (let i = 0; i < this.Contents.length; i++) {
        if (this.Contents[i].next === this.NextFree - 2) {
          this.Contents[i].next = this.NextFree
          i = this.Contents.length
        }
      }
    } else {
      let beforeIndex = -1
      for (let i = 0; i < this.Contents.length; i++) {
        if (this.Contents[i].data === beforeOf) {
          beforeIndex = i
          i = this.Contents.length
        }
      }
      if (beforeIndex !== -1) {
        if (this.Start === beforeIndex + 1) { // If it's new first item
          newObject = { id: this.NextFree, next: beforeIndex + 1, data: newItem }
          this.Start = this.NextFree
        } else {

          let parentIndex = -1
          for (let i = 0; i < this.Contents.length; i++) {
            if (this.Contents[i].id === beforeIndex) {
              parentIndex = i
              i = this.Contents.length
            }
          }

          let previousValue = this.Contents[parentIndex].next

          console.log('\n', { beforeIndex, parentIndex, previousValue }, '\n')



          // let beforeNext = this.Contents[beforeIndex].next
          // console.log('\n', this.Contents[beforeIndex], beforeNext, '\n')
          newObject = { id: this.NextFree, next: previousValue, data: newItem }

          this.Contents[parentIndex].next = this.NextFree

        }
      } else {
        console.log(`\nCan't add ${newItem} before ${beforeOf}, because ${beforeOf} doesn't exists\n`)
      }
    }
    if (newObject) {
      this.Contents[this.NextFree - 1] = newObject
      this.NextFree = this.NextFree + 1
    }
  }
}

const list = new LinkedList('Chloe')

list.addBefore('Francis')
console.log(list.getItems)

list.addBefore('Beatrix', 'Chloe')
console.log(list.getItems)

list.addBefore('David', 'Francis')
console.log(list.getItems)

list.addBefore('Edward', 'Francis')
console.log(list.getItems)

// list.addBefore('Abigail', 'Beatrix')
// console.log(list.getItems)
