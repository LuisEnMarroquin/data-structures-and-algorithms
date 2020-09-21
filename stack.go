package main

import (
  "fmt"
  "strconv"
)

func get(top int, data [3]string) {
  fmt.Println("\n", top, data[0:top])
}

func push(top int, data [3]string, maximumSize int, newItem string) (int, [3]string) {
  if top < maximumSize {
    data[top] = newItem
    top++
    get(top, data)
  } else {
    fmt.Println("\n Stack ("+strconv.Itoa(top)+") is full, can't add", newItem)
  }
  return top, data
}

func pop(top int, data [3]string) int {
  if top != 0 {
    top--
    get(top, data)
  }
  return top
}

func main() {

  var top int = 0
  var data = [3]string{}
  var maximumSize int = 3

  top, data = push(top, data, maximumSize, "Kevin")

  top, data = push(top, data, maximumSize, "Sally")

  top, data = push(top, data, maximumSize, "David")

  top, data = push(top, data, maximumSize, "Sonya")

  top = pop(top, data)

  top, data = push(top, data, maximumSize, "Jessy")

  top, data = push(top, data, maximumSize, "Harry")

}
