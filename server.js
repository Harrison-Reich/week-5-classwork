const express = require('express')
const path = require('path')
const { rsort } = require('semver')

const app = express()

// objects
// const home = {
//   name: 'Homepage',
//   purpose: 'Starting location to website'
// }
// const eat = {
//   taste: 10,
//   quality: 'fresh'
// }

// const sound = {
//   Genre: 'rap',
//   City: 'Los Angeles'
// }

// const play = {
//   name: 'Madden',
//   team: 'Broncos'
// }

// const watch = {
//   channel: 49,
//   genre: 'comedy',
//   length: 45
// }

app.use(express.static(path.join(__dirname, 'public')))

app.get('/food', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'food.html'))
})

app.get('/music', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'music.html'))
})

app.get('/games', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'games.html'))
})

app.get('/tvshows', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tvshows.html'))
})

app.get('/', (req, res) => {
  // res.json(home)
  // res.sendFile(path.join(__dirname, 'example', 'index.html'))
  //   res.send('<h1>Harrison Reich Local Server!</h1>')
})

app.get('/food', (req, res) => {
  // res.json(eat)
  // res.sendFile(path.join(__dirname, 'example', 'food.html'))
  // res.send('pancakes, pizza, tacos, salmon')
})

app.get('/music', (req, res) => {
  // res.json(sound)
  // res.sendFile(path.join(__dirname, 'example', 'music.html'))
  //   res.send('Strait Outta Tottenham, Damn, Racks, Too Eazy')
})

app.get('/games', (req, res) => {
  // res.json(play)
  // res.sendFile(path.join(__dirname, 'example', 'games.html'))
  //   res.send('Madden, League of Legends, Call of Duty')
})

app.get('/tvshow', (req, res) => {
  // res.json(watch)
  // res.sendFile(path.join(__dirname, 'example', 'tvshow.html'))
  // res.send('Arcane, The Witcher, Family Guy')
})

app.listen(3001)

