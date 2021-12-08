const Barbarian = require('../lib/Barbarian.js')

test('Expect name to be specified', () => {
  const barbarian = new Barbarian('Thrall', 'male', 'Orc', 9001, 'dual-weilding maces', 'strength')
  expect(barbarian.name).toBe('Thrall')
})

test('Expect gender to be specified', () => {
  const barbarian = new Barbarian('Thrall', 'male', 'Orc', 9001, 'dual-weilding maces', 'strength')
  expect(barbarian.gender).toBe('male')
})

test('Expect race to be specified', () => {
  const barbarian = new Barbarian('Thrall', 'male', 'Orc', 9001, 'dual-weilding maces', 'strength')
  expect(barbarian.race).toBe('Orc')
})

test('Expect hp to be specified', () => {
  const barbarian = new Barbarian('Thrall', 'male', 'Orc', 9001, 'dual-weilding maces', 'strength')
  expect(barbarian.hp).toBe(9001)
})

test('Expect weapon to be specified', () => {
  const barbarian = new Barbarian('Thrall', 'male', 'Orc', 9001, 'dual-weilding maces', 'strength')
  expect(barbarian.weapon).toBe('dual-weilding maces')
})

test('Expect mainStat to be specified', () => {
  const barbarian = new Barbarian('Thrall', 'male', 'Orc', 9001, 'dual-weilding maces', 'strength')
  expect(barbarian.mainStat).toBe('strength')
})
