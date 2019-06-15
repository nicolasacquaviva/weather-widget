function toCelsius () {
  return function (temperature) {
    return (temperature - 273.15).toFixed(1).toString() + '°C'
  }
}

module.exports = angular
  .module('app.celsiusFilter', [])
  .filter('celsius', [toCelsius])

module.exports.id = 'app.celsiusFilter'
