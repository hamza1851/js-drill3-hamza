// const inventory = require("./inventory.js")

// ----------------Solution 1----------------

function findCarById(inventory, id) {
  try {
    if (!inventory) throw new Error("No inventory")

    if (!(inventory.constructor === Array)) throw new Error("Wrong data format")

    if (inventory.length === 0) throw new Error("Inventory is empty")

    for (let i = 0; i < inventory.length; i++) {
      // console.log(inventory[i].id)
      if (inventory[i].id === id) {
        return inventory[i]
      }
    }
    return null // Car not found
  } catch (error) {
    console.log(error.message)
  }
}

// ----------------Solution 2----------------

function getLastCar(inventory) {
  if (!inventory) throw new Error("No inventory data exist")

  if (!Array.isArray(inventory)) throw new Error("Wrong data format")

  if (inventory.length === 0) throw new Error("Inventory is empty")

  return inventory[inventory.length - 1]
}

// ----------------Solution 3----------------

function sortCarModels(inventory) {
  if (!inventory) throw new Error("No inventory data exist")

  if (!Array.isArray(inventory)) throw new Error("Wrong data format")

  if (inventory.length === 0) throw new Error("Inventory is empty")

  const models = []
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].hasOwnProperty("car_model"))
      models.push(inventory[i].car_model)
  }

  if (models.length === 0) throw new Error("Car Model does not exist")

  for (let i = 0; i < models.length - 1; i++) {
    for (let j = i + 1; j < models.length; j++) {
      if (models[i] > models[j]) {
        const temp = models[i]
        models[i] = models[j]
        models[j] = temp
      }
    }
  }

  return models
}

module.exports = { findCarById, getLastCar, sortCarModels }
