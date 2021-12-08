const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
})

app.get('/greeting', (req, res) => {
  res.send('hi')
})

app.listen(3000)
