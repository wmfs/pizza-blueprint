'use strict'

module.exports = function () {
  return function (formData) {
    formData.status = 'CANCELLED'
    return { formData }
  }
}
