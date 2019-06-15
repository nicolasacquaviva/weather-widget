function WeatherService ($http, $q, Constants) {
  function getWeather () {
    return $q(function (resolve, reject) {
      $http.get(Constants.baseUrl + '&appid=' + Constants.apiKey)
        .then(function (weather) {
          resolve(weather.data)
        }, function (err) {
          console.error(err)
          resolve(Constants.data)
        })
    })
  }

  return {
    getWeather: getWeather
  }
}

module.exports = angular
  .module('app.weatherService', [])
  .service('WeatherService', WeatherService)

module.exports.id = 'app.weatherService'
