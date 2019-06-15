module.exports = angular
  .module('app.router', [require('angular-route')])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('')

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/weather/weather.html',
        controller: 'WeatherViewController',
        controllerAs: 'weather'
      })
      .otherwise({ redirectTo: '/' })
  })

module.exports.id = 'app.router'
