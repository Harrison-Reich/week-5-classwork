class Products {
  constructor(price, name, weight, type, deliveryTime) {
    this.price = price
    this.name = name
    this.weight = weight
    this.type = type
    this.deliveryTime = deliveryTime
  }
  printInfo() {
    console.log(`
    Name: ${this.name}
    Price: ${this.price}
    Type: ${this.type}
    Weight: ${this.weight}
    Delivery Time: ${this.deliveryTime}
    `)
  }
}

class Food extends Products {
  constructor(price, name, weight, type, deliveryTime, category, dietaryType) {
    super(price, name, weight, type, deliveryTime)
    this.category = category
    this.dietaryType = dietaryType
  }
}

const food1 = new Food('$0.40', 'Banana', '3oz', 'Food', 'Same Day', 'Fruit', 'Healthy')

console.log(food1)

// class Clothing {
//   constructor() {

//   }
// }