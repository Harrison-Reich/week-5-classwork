// //FIRST WAY TO CREATE IT 
// // addition
// const add = parseInt(process.argv[2]) + parseInt(process.argv[3])
// console.log(add)

// // subtraction
// const sub = parseInt(process.argv[2]) - parseInt(process.argv[3])
// console.log(sub)

// // mulitplication
// const mul = parseInt(process.argv[2]) * parseInt(process.argv[3])
// console.log(mul)

// // division
// const div = parseInt(process.argv[2]) / parseInt(process.argv[3])
// console.log(div)


// // SECOND WAY TO CREATE IT
// num1 = parseInt(process.argv[3])
// num2 = parseInt(process.argv[4])

// // addition
// if (process.argv[2] === `add`) {
//   const add = num1 + num2
//   console.log(add)
// }

// // subtraction
// if (process.argv[2] === `sub`) {
//   const sub = num1 - num2
//   console.log(sub)
// }

// // multiplication
// if (process.argv[2] === `mul`) {
//   const mul = num1 * num2
//   console.log(mul)
// }

// // division
// if (process.argv[2] === `div`) {
//   const div = num1 / num2
//   console.log(div)
// }


// // THRD WAY TO CRATE IT
// let mathFunction = process.argv[2]
// let num1 = parseInt(process.argv[3])
// let num2 = parseInt(process.argv[4])

// switch (mathFunction) {
//   case `add`:
//     console.log(`${num1 + num2}`)
//     break;
//   case `sub`:
//     console.log(`${num1 - num2}`)
//     break;
//   case `mul`:
//     console.log(`${num1 * num2}`)
//     break;
//   case `div`:
//     console.log(`${num1 / num2}`)
//     break;

//     default:
//       break;
// }

// // BEST PRACTICES
// const calculator = require('./calculator.js')

// const operation = process.argv[2]
// const a = process.argv[3]
// const b = process.argv[4]

// calculator(operation, a, b)
