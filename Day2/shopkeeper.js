function Shopper(potion, weapon) {
  this.potion = potion;
  this.weapon = weapon;
}

function Potion(name, value) {
  this.name = name;
  this.value = value;
}

function Weapon(name, value) {
  this.name = name;
  this.value = value;
}

const p1 = new Potion('health pot', 50);
const p2 = new Potion('agility pot', 50);
const p3 = new Potion()
const p4 = new Potion()
const p5 = new Potion()
const w1 = new Weapon('sword', 5);
const w2 = new Weapon('axe', 4);
const w3 = new Weapon()
const w4 = new Weapon()
const w5 = new Weapon()

const shopper1 = new Shopper(p1, w1);
const shopper2 = new Shopper(p2, w2);
const shopper3 = new Shopper(p3, w3);
const shopper4 = new Shopper(p4, w4);
const shopper5 = new Shopper(p5, w5);

console.log(shopper1);
console.log(shopper2);

