function controller () {
  this.$onInit = function () {
    this.iconCode = this.iconCode || '01d'
    this.iconSize = this.iconSize || '30px'
    this.icons = {
      '01d': 'far fa-sun',
      '01n': 'fas fa-moon',
      '02d': 'fas fa-cloud-sun',
      '02n': 'fas fa-cloud-moon',
      '03d': 'fas fa-cloud',
      '03n': 'fas fa-cloud',
      '04d': 'fas fa-cloud-meatball',
      '04n': 'fas fa-cloud-meatball',
      '09d': 'fas fa-cloud-showers-heavy',
      '09n': 'fas fa-cloud-showers-heavy',
      '10d': 'fas fa-cloud-sun-rain',
      '10n': 'fas fa-cloud-moon-rain',
      '11d': 'fas fa-bolt',
      '11n': 'fas fa-bolt',
      '13d': 'fas fa-snowflake',
      '13n': 'fas fa-snowflake',
      '50d': 'fas fa-smog',
      '50n': 'fas fa-smog'
    }
  }
}

module.exports = angular
  .module('app.icon', [])
  .component('iconComponent', {
    bindings: {
      iconCode: '<',
      iconSize: '@'
    },
    controller: controller,
    controllerAs: 'icon',
    templateUrl: 'app/components/icon/icon.html'
  })

module.exports.id = 'app.icon'
