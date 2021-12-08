const Character = require('./Character.js')

class Protector extends Character {
  constructor(name, gender, race, hp, resistance, tenacity) {
    super(name, gender, race, hp)
    this.resistance = resistance
    this.tenacity = tenacity
  }
}

module.exports = Protector