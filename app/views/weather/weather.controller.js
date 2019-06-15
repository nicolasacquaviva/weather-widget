function WeatherViewController (WeatherService) {
  WeatherService.getWeather()
    .then(function (weather) {
      this.weatherData = weather.list
    }.bind(this))
    .catch(function (err) {
      console.error(err)
    })
}

module.exports = angular
  .module('app.weatherViewController', [])
  .controller('WeatherViewController', WeatherViewController)

module.exports.id = 'app.weatherViewController'
