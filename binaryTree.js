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

    result.push(sum / level.length)
  })

  return result
}

let n8 = { val: 2, left: false, right: false }
let n7 = { val: 6, left: n8, right: false }
let n6 = { val: 6, left: false, right: false }
let n5 = { val: 2, left: false, right: n7 }
let n4 = { val: 10, left: false, right: false }
let n3 = { val: 9, left: n6, right: false }
let n2 = { val: 7, left: n4, right: n5 }
let n1 = { val: 4, left: n2, right: n3 }

let finalResult = avgByDepth(n1)

console.log(finalResult)
