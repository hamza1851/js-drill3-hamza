const inventory = require("./inventory.js")
const { findCarById } = require("./solutions.js")

// ----------------Questions 1----------------
const car33 = findCarById(inventory, 33)
console.log(
  `Car 33 is a ${car33.car_year} ${car33.car_make} ${car33.car_model}`
)
