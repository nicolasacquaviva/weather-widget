const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')

module.exports = {
  module: {
    rules: [{
      test: /\.sass$/,
      use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }]
  },
  entry: {
    main: ['./app/app.js', './app/styles.sass']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      moment: 'moment'
    }),
    new ExtractTextPlugin({ filename: 'styles.bundle.css' }),
    new WebpackShellPlugin({ onBuildEnd: ['node server'] })
  ]
}
