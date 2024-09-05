const inventory = require("./inventory.js")
const {
  findCarById,
  getLastCar,
  sortCarModels,
  getCarYears,
  getOlderCars,
  findBMWAndAudiCars,
} = require("./solutions.js")

// ----------------Questions 1----------------
const car33 = findCarById(inventory, 33)
console.log(
  `Car 33 is a ${car33.car_year} ${car33.car_make} ${car33.car_model}`
)

// ----------------Questions 2----------------
const lastCar = getLastCar(inventory)
console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`)

// ----------------Questions 3----------------
const sortedCarModels = sortCarModels(inventory)
console.log(sortedCarModels)

// ----------------Questions 4----------------
const carYears = getCarYears(inventory)
console.log(carYears)

// ----------------Questions 5----------------
const olderCars = getOlderCars(carYears, 2000)
console.log(olderCars.length)

// ----------------Question 6----------------
const bmwAndAudiCars = findBMWAndAudiCars(inventory)
console.log(JSON.stringify(bmwAndAudiCars))
