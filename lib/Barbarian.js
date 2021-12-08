const Character = require('./Character.js')

class Barbarian extends Character {
  constructor (name, gender, race, hp, weapon, mainStat) {
    super(name, gender, race, hp)
    this.weapon = weapon
    this.mainStat = mainStat
  }
}

module.exports = Barbarian
