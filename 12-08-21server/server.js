const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'example', 'index.html'))
//   res.send('<h1>Harrison Reich Local Server!</h1>')
// })

app.get('/food', (req, res) => {
  res.sendFile(path.join(__dirname, 'example', 'food.html'))
  // res.send('pancakes, pizza, tacos, salmon')
})

app.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname, 'example', 'music.html'))
//   res.send('Strait Outta Tottenham, Damn, Racks, Too Eazy')
// })

app.get('/games', (req, res) => {
  res.sendFile(path.join(__dirname, 'example', 'games.html'))
//   res.send('Madden, League of Legends, Call of Duty')
// })

app.get('/tvshow', (req, res) => {
  res.sendFile(path.join(__dirname, 'example', 'tvshow.html'))
  // res.send('Arcane, The Witcher, Family Guy')
})

app.listen(3001)

