const fs = require('fs')

fs.writeFile('example.txt', '', err => {
  if (err) { console.log(err) }
})

fs.appendFile('example.txt', '', err => {
  if (err) { console.log(err) }
})

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) { console.log(err) }
  console.log(`${data}`)
})
