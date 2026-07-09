module.exports = function () {
  return function generateChefTask (event) {
    const { payload: formData } = event

    const todo = {
      role: 'pizza_chef',
      stateMachineTitle: 'Ordered pizza',
      stateMachineCategory: 'pizza',
      description: `${formData.name}: ${formData.base || 'N/A'}, ${formData.toppings && formData.toppings.length > 0 ? formData.toppings.join(', ') : 'No Toppings'}`,
      stateMachineName: 'pizza_viewPizza_1_0',
      todoTitle: 'Ordered pizza',
      launches: [
        {
          title: 'View Order',
          stateMachineName: 'pizza_viewPizza_1_0',
          input: {
            boardKeys: {
              pizzaId: formData.id
            }
          }
        }
      ]
    }

    return { todo }
  }
}
