console.log('Hello World!')

axios.get('/food')
  .then(res => {
    const food = res.data

    document.getElementById('eat').innerHTML = `
      <h1>${food.taste}</h1>
      <h2>${food.quality}</h2>
    `
  })
  .catch(err => console.error(err))

axios.get('/music')
  .then(res => {
    const music = res.data

    document.getElementById('sound').innerHTML = `
      <h1>${music.Genre}</h1>
      <h2>${music.City}</h2>
    `
  })
  .catch(err => console.error(err))

axios.get('/games')
  .then(res => {
    const games = res.data

    document.getElementById('play').innerHTML = `
      <h1>${games.name}</h1>
      <h2>${games.team}</h2>
    `
  })
  .catch(err => console.error(err))

axios.get('/tvshows')
  .then(res => {
    const tvshow = res.data

    document.getElementById('watch').innerHTML = `
    <h1>${tvshow.channel}</h1>
    <h2>${tvshow.genre}</h2>
    <h3>${tvshow.duration}</h3>
    `
  })
  .catch(err => console.error(err))
