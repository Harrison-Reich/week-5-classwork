const Character = require('./Character.js')

class Mage extends Character {
  constructor (name, gender, race, hp, element, mana) {
    super(name, gender, race, hp)
    this.element = element
    this.mana = mana
  }
}

module.exports = Mage
