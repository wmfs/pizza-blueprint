module.exports = function () {
  return function (event) {
    return {
      description: `${event.name}: ${event.base}, ${event.toppings.length > 0 ? event.toppings.join(', ') : 'No Toppings'}`
    }
  }
}
