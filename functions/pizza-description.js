module.exports = function () {
  return function (formData) {
    return {
      description: `${formData.firstName} ${formData.lastName}: ${formData.base}, ${formData.toppings.length > 0 ? formData.toppings.join(', ') : 'No Toppings'}`
    }
  }
}
