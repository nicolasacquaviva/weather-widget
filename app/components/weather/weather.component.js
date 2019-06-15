function controller () {
  this.$onInit = function () {
    this.title = 'Local Weather'
    this.data = this.data || []
    this.dateShowingIndex = 0
  }

  this.getExtendedWeather = function () {
    return this.data.slice(this.dateShowingIndex + 1, this.dateShowingIndex + 4)
  }

  this.changeUnit = function (unit) {
    this.unit = unit
  }

  this.getNextDate = function () {
    if (this.dateShowingIndex < this.data.length - 4) {
      this.dateShowingIndex += 1
    }
  }

  this.getPreviousDate = function () {
    if (this.dateShowingIndex > 0) {
      this.dateShowingIndex -= 1
    }
  }
}

module.exports = angular
  .module('app.weather', [])
  .component('weatherComponent', {
    bindings: {
      data: '<'
    },
    controller: controller,
    controllerAs: 'weather',
    templateUrl: 'app/components/weather/weather.html'
  })

module.exports.id = 'app.weather'
