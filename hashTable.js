let unsorted = [
  'Mia',
  'Tim',
  'Bea',
  'Zoe',
  'Sue',
  'Len',
  'Moe',
  'Lou',
  'Rae',
  'Max',
  'Tod',
  'Elm'
]

let sorted = []

unsorted.forEach(() => sorted.push(''))

// function hashModule (term) {

// }

unsorted.forEach(item => {
  let chars = item.split('')

  let sumCode = 0
  chars.forEach(char => {
    sumCode += char.charCodeAt(0)
  })

  let moduleCode = sumCode % unsorted.length

  if (sorted[moduleCode] === '') {
    sorted[moduleCode] = item
  } else {
    let excedent = 0
    let condition = true

    while (condition) {
      moduleCode++
      if (moduleCode <= unsorted.length - 1) {
        if (sorted[moduleCode] === '') {
          sorted[moduleCode] = item
          condition = false
        }
      } else {
        excedent++
        if (sorted[excedent] === '') {
          sorted[excedent] = item
          condition = false
        }
      }
    }
  }
})

console.log(sorted)
