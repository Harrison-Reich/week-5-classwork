const Protector = require('../lib/Rogue.js')

test('Expect name to be specified', () => {
  const protector= new Protector('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(protector.name).toBe('Mike')
})

test('Expect gender to be specified', () => {
  const protector= new Protector('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(protector.gender).toBe('male')
})

test('Expect race to be specified', () => {
  const protector= new Protector('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(protector.race).toBe('Elf')
})

test('Expect hp to be specified', () => {
  const protector= new Protector('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(protector.hp).toBe(3017)
})

test('Expect stealth to be specified', () => {
  const protector= new Protector('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(protector.stealth).toBe(100)
})

test('Expect cunning to be specified', () => {
  const protector= new Protector('Mike', 'male', 'Elf', 3017, 100, 2017)
  expect(protector.cunning).toBe(2017)
})