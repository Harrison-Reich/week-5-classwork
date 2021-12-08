const Character = require('./Character.js')

class Rogue extends Character {
  constructor (name, gender, race, hp, stealth, cunning) {
    super(name, gender, race, hp)
    this.stealth = stealth
    this.cunning = cunning
  }
}

module.exports = Rogue
