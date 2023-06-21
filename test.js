"use strict"
const great = (greeting) => (name) => console.log(`${greeting} ${name}`)

// const bindingFunction = function (fct, fixedRate) {
//   return fct.bind(null, fixedRate)
// }
// const addTax = (rate, value) => value + rate * value
// const addVat = bindingFunction(addTax, 0.5)

// console.log(addVat(200))

const addTaxRate = function (rate) {
  return function (value) {
    return value + rate * value
  }
}

console.log(addTaxRate(0.5)(200))
