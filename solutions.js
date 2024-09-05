// const inventory = require("./inventory.js")

function findCarById(inventory, id) {
  try {
    if (!inventory) {
      console.log("No inventory")
      throw new Error()
    } else if (!(inventory.constructor === Array)) {
      console.log("Send data in the required format")
      throw new Error()
    } else {
      for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
          return inventory[i]
        }
      }
      return null // Car not found
    }
  } catch (error) {
    console.log(error.message)
  }
}

function getLastCar(inventory) {
  if (!inventory) console.log("No inventory data exist")
  return inventory[inventory.length - 1]
}

module.exports = { findCarById, getLastCar }
