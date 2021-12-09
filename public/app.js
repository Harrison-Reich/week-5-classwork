console.log('Hello World!')

axios.get('/eat')
  .then(res => {
    const dog = res.data
    
    document.getElementById('eat').innerHTML = `
      <h1>${eat.taste}</h1>
      <h2>${eat.quality}</h2>
    `
  })
  .catch(err => console.error(err))
  
axios.get('/sound')
  .then(res => {
    const dog = res.data
    
    document.getElementById('sound').innerHTML = `
      <h1>${sound.Genre}</h1>
      <h2>${sound.City}</h2>
    `
  })
  .catch(err => console.error(err))

axios.get('/play')
  .then(res => {
    const dog = res.data
    
    document.getElementById('play').innerHTML = `
      <h1>${play.name}</h1>
      <h2>${play.team}</h2>
    `
  })
  .catch(err => console.error(err))

axios.get('/watch')
  .then(res => {
    const dog = res.data
    
    document.getElementById('watch').innerHTML = `
    <h1>${watch.channel}</h1>
    <h2>${watch.genre}</h2>
    <h3>${watch.duration}</h3>
    `
  })
  .catch(err => console.error(err))
