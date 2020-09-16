class LinkedList {
  constructor (firstItem) {
    this.Start = 1
    this.Content = [
      { id: 1, next: 0, data: firstItem }
    ]
    this.getItems()
  }
  getItems () {
    console.log('\n', {
      Start: this.Start,
      Content: this.Content
    })
  }
  getItemsSorted () {
    let sortedContent = []
    let findID = this.Content.find(({ id }) => id === this.Start)
    let nextIndex = findID.id - 1
    this.Content.forEach(() => {
      sortedContent.push(this.Content[nextIndex])
      nextIndex = this.Content[nextIndex].next - 1
    })
    console.log('\n', 'Sorted:\n', {
      Start: this.Start,
      Content: sortedContent
    })
  }
  addBefore (newItem, beforeData = null) {
    let newID = this.Content.length + 1
    let newObject = null
    if (!beforeData) {
      newObject = { id: newID, next: 0, data: newItem }
      for (let i = 0; i < this.Content.length; i++) {
        if (this.Content[i].next === this.Content.length - 1) {
          this.Content[i].next = newID
          break
        }
      }
    } else {
      let afterID = -1
      let afterIndex = -1
      for (let i = 0; i < this.Content.length; i++) {
        if (this.Content[i].data === beforeData) {
          afterID = this.Content[i].id
          afterIndex = i
          break
        }
      }
      if (afterIndex !== -1) {
        let isNewFirstItem = (this.Start === afterIndex + 1)
        if (isNewFirstItem) {
          newObject = { id: newID, next: afterIndex + 1, data: newItem }
          this.Start = newID
        } else {
          let beforeIndex = -1
          for (let i = 0; i < this.Content.length; i++) {
            if (this.Content[i].next === afterID) {
              beforeIndex = i
              break
            }
          }
          this.Content[beforeIndex].next = newID
          newObject = { id: newID, next: afterID, data: newItem }
        }
      } else {
        console.log(`\n Can't add ${newItem} before ${beforeData}, because ${beforeData} doesn't exists`)
      }
    }
    if (newObject) {
      this.Content.push(newObject)
    }
    this.getItems()
  }
}

const list = new LinkedList('Chloe')

list.addBefore('Francis')

list.addBefore('Beatrix', 'Chloe')

list.addBefore('David', 'Francis')

list.addBefore('Edward', 'Francis')

list.addBefore('Abigail', 'Beatrix')

list.addBefore('NoOne', 'NonExisting')

list.getItemsSorted()
