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

function moduleString (term) {
  let chars = term.split('')
  let sumCode = 0

  chars.forEach(char => {
    sumCode += char.charCodeAt(0)
  })

  return sumCode % sorted.length
}

unsorted.forEach(item => {
  let moduleCode = moduleString(item)

  if (sorted[moduleCode] === '') sorted[moduleCode] = item
  else {
    let condition = true
    let excedent = 0

    while (condition) {
      moduleCode++
      if (moduleCode <= sorted.length - 1) {
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

function find (term) {
  let moduleCode = moduleString(term)
  let condition = true
  let excedent = 0
  let foundAt = 0

  let actualCode = moduleCode
  while (condition) {
    foundAt++

    if (actualCode <= sorted.length - 1) {
      if (sorted[actualCode] === term) {
        console.log({ term, foundAt, estimatedIndex: moduleCode, foundIndex: actualCode })
        condition = false
      }
      actualCode++
    } else if (excedent < moduleCode) {
      if (sorted[excedent] === term) {
        console.log({ term, foundAt, estimatedIndex: moduleCode, foundIndex: excedent })
        condition = false
      }
      excedent++
    } else {
      console.log('Not found', { term, performedOperations: foundAt - 1 })
      condition = false
    }
  }
}

console.log(sorted.length, String(sorted))

unsorted.forEach(item => find(item))

find('NonExisting')
