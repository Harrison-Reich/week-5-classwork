const Mage = require('../lib/Mage.js')

test('Expect name to be specified', () => {
  const mage = new Mage('Malia', 'female', 'Human', 700, 'water', 250)
  expect(mage.name).toBe('Malia')
})

test('Expect gender to be specified', () => {
  const mage = new Mage('Malia', 'female', 'Human', 700, 'water', 250)
  expect(mage.gender).toBe('female')
})

test('Expect race to be specified', () => {
  const mage = new Mage('Malia', 'female', 'Human', 700, 'water', 250)
  expect(mage.race).toBe('Human')
})

test('Expect hp to be specified', () => {
  const mage = new Mage('Malia', 'female', 'Human', 700, 'water', 250)
  expect(mage.hp).toBe(700)
})

test('Expect element to be specified', () => {
  const mage = new Mage('Malia', 'female', 'Human', 700, 'water', 250)
  expect(mage.element).toBe('water')
})

test('Expect mana to be specified', () => {
  const mage = new Mage('Malia', 'female', 'Human', 700, 'water', 250)
  expect(mage.mana).toBe(250)
})
