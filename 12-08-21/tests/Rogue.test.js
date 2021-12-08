const Rogue = require('../lib/Rogue.js')

test('Expect name to be specified', () => {
  const rogue = new Rogue('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(rogue.name).toBe('Mike')
})

test('Expect gender to be specified', () => {
  const rogue = new Rogue('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(rogue.gender).toBe('male')
})

test('Expect race to be specified', () => {
  const rogue = new Rogue('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(rogue.race).toBe('Elf')
})

test('Expect hp to be specified', () => {
  const rogue = new Rogue('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(rogue.hp).toBe(3017)
})

test('Expect stealth to be specified', () => {
  const rogue = new Rogue('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(rogue.stealth).toBe(100)
})

test('Expect cunning to be specified', () => {
  const rogue = new Rogue('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(rogue.cunning).toBe(2017)
})