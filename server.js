const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Harrison Reich Local Server!</h1>')
})

app.get('/food', (req, res) => {
  res.send('pancakes, pizza, tacos, salmon')
})

app.get('/music', (req, res) => {
  res.send('Strait Outta Tottenham, Damn, Racks, Too Eazy')
})

app.get('/games', (req, res) => {
  res.send('Madden, League of Legends, Call of Duty')
})

app.get('/tvshow', (req, res) => {
  res.send('Arcane, The Witcher, Family Guy')
})

app.listen(3001)
