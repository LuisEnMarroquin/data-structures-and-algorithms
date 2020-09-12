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
  // 'Elm'
]

let sorted = []

unsorted.forEach(() => sorted.push(''))

unsorted.forEach(item => {
  let chars = item.split('')

  let sumCode = 0
  chars.forEach(char => {
    sumCode += char.charCodeAt(0);
  })

  let moduleCode = sumCode % unsorted.length

  if (sorted[moduleCode] === '') {
    sorted[moduleCode] = item
  } else {
    let condition = true

    while (condition) {
      moduleCode++

      if (sorted[moduleCode] === '') {

        // if (moduleCode >= unsorted.length) {
        //   condition = false
        // } else {
          sorted[moduleCode] = item
          condition = false
        // }

      }
    }
  }

})

console.log(sorted)
