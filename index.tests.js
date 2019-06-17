require('angular')
require('angular-mocks')

const testsContext = require.context('./app', true, /\.spec\.js$/)
testsContext.keys().forEach(testsContext)
