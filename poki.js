// const fs = require('fs')
const axios = require('axios')
const inquirer = require('inquirer')

// fs.writeFile('poki.txt', 'Pokimon!', err => {
//   if (err) { console.log(err) }
// })

// https://pokeapi.co/api/v2/type/3

inquirer.prompt({
  type: 'input',
  name: 'type',
  message: 'Enter a pokimon type:'
})
  .then(data => {
    console.log(data.type)
    axios.get(`https://pokeapi.co/api/v2/type/${data.type}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  })
  .catch(err => console.log(err))