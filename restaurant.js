class Pizza {
  constructor(name, toppings, size, sauce, cheese, style, pizzaPrice) {
    this.name = name
    this.toppings = toppings
    this.size = size
    this.sauce = sauce
    this.cheese = cheese
    this.style = style
    this.pizzaPrice = pizzaPrice
  }
  printInfo() {
    console.log(`
----- Pizza Menu -----
    ${this.name}
    Style: ${this.style}
    Size: ${this.size}
    Sauce: ${this.sauce}
    Cheese: ${this.cheese}
    Toppings: ${this.toppings}
    Price: ${this.pizzaPrice}
-------------------------
    `)
  }
}

class Drinks {
  constructor(size, type, brand, drinkPrice) {
    this.size = size
    this.type = type
    this.brand = brand
    this.drinkPrice = drinkPrice
  }
  printInfo() {
    console.log(`
----- Drink Menu -----
Size: ${this.size}
Type: ${this.type}
Brand: ${this.brand}
Price: ${drink.price}
  `)
  }
}

const pizza1 = new Pizza('Hawaiian Pizza', 'Pineapple, Ham, Bacon', 'Medium', 'Classic Red', 'Mozzarella', 'Thin crust', '$9.99')

const drink1 = new Drinks('Large', 'Soda', 'Coke', '$2.99')


console.log(pizza1)
console.log(drink1)

pizza1.printInfo()
drink1.printInfo()