const weatherComponent = require('./weather.component')
const mock = angular.mock

beforeEach(mock.module('app.weather'))

let mockedComponent

beforeEach(mock.inject(function ($rootScope, $componentController) {
  const $scope = $rootScope.$new()

  mockedComponent = $componentController('weatherComponent', { $scope })
  mockedComponent.data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
}))

describe('Weather Component', function () {
  it('should be defined', function () {
    expect(mockedComponent).toBeDefined()
  })

  it('should get the extended weather', function () {
    mockedComponent.dateShowingIndex = 2

    expect(mockedComponent.getExtendedWeather()).toEqual([3, 4, 5])
  })

  it('should get the next date', function () {
    mockedComponent.dateShowingIndex = 0
    mockedComponent.getNextDate()

    expect(mockedComponent.dateShowingIndex).toEqual(1)
  })

  it('should not change the date index if its major than the length of the data minus 4', function () {
    mockedComponent.dateShowingIndex = 6
    mockedComponent.getNextDate()

    expect(mockedComponent.dateShowingIndex).toEqual(6)
  })

  it('should get the previous date', function () {
    mockedComponent.dateShowingIndex = 5
    mockedComponent.getPreviousDate()

    expect(mockedComponent.dateShowingIndex).toEqual(4)
  })

  it('should not change the date index if its equal to 0', function () {
    mockedComponent.dateShowingIndex = 0
    mockedComponent.getPreviousDate()

    expect(mockedComponent.dateShowingIndex).toEqual(0)
  })

  it('should assign an unit', function () {
    mockedComponent.unit = 'mockedUnit'
    mockedComponent.changeUnit('mockedUnit2')

    expect(mockedComponent.unit).toEqual('mockedUnit2')
  })
})
