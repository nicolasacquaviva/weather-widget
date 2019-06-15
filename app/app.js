const angular = require('angular')

require('moment')

angular.module('app', [
  require('./app.router').id,
  require('./app.constants').id,
  require('./components/icon/icon.component').id,
  require('./components/weather/weather.component').id,
  require('./views/weather/weather.controller').id,
  require('./services/weather.service').id,
  require('./filters/celsius.filter').id
])
  .config(function () {})
  .run(function () {})
