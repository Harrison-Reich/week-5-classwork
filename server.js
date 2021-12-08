const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Harrison Reich Local Server!</h1>')
})

app.get('/food', (req, res) => {
  res.send('<h1>This is my foods page!</h1>')
})

app.get('/music', (req, res) => {
  res.send('<h1>These are my favorite songs page!</h1>')
})

app.get('/games', (req, res) => {
  res.send('<h1>This is my games page!</h1>')
})

app.get('/tvshow', (req, res) => {
  res.send('<h1>This is my tv shows page!</h1>')
})

app.listen(3000)
