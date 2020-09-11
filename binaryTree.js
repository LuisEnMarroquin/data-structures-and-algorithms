function Node (val, left, right) {
  return { val, left, right }
}

let data = []
let result = []

function collect (node, data, depth = 0) {
  if (!node) return false

  if (depth === data.length) data.push([])

  data[depth].push(node.val)

  collect(node.left, data, depth + 1)
  collect(node.right, data, depth + 1)
}

function avgByDepth (node) {
  collect(node, data)

  data.forEach(level => {
    let sum = 0

    level.forEach(number => {
      sum += number
    })

    let avg = sum / level.length

    result.push(avg)
  })

  return result
}

let n8 = Node(2, false, false)
let n7 = Node(6, n8, false)
let n6 = Node(6, false, false)
let n5 = Node(2, false, n7)
let n4 = Node(10, false, false)
let n3 = Node(9, n6, false)
let n2 = Node(7, n4, n5)
let n1 = Node(4, n2, n3)

let finalResult = avgByDepth(n1)

console.log(finalResult)
