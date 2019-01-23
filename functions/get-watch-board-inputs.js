'use strict'

module.exports = function () {
  return function (idProperties, formData) {
    return {
      watchBoard: {
        stateMachineName: 'pizza_viewPizza_1_0',
        title: `Ordered pizza`,
        description: `${formData.firstName} ${formData.lastName}: ${formData.base}, ${formData.toppings.length > 0 ? formData.toppings.join(', ') : 'No Toppings'}`,
        category: 'pizza',
        categoryLabel: 'Pizza',
        boardKeys: {
          pizzaId: idProperties.id
        }
      }
    }
  }
}
