const Character = require('../lib/Character.js')

test('Expect name to be specified', () => {
  const character = new Character('Thrall', 'male', 'Orc', 9001)
  expect(character.name).toBe('Thrall')
})

test('Expect gender to be specified', () => {
  const character = new Character('Thrall', 'male', 'Orc', 9001)
  expect(character.gender).toBe('male')
})

test('Expect race to be specified', () => {
  const character = new Character('Thrall', 'male', 'Orc', 9001)
  expect(character.race).toBe('Orc')
})

test('Expect hp to be specified', () => {
  const character = new Character('Thrall', 'male', 'Orc', 9001)
  expect(character.hp).toBe(9001)
})
