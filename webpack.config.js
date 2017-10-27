const path = require('path');


module.exports = {

  devtool: 'source-map',
  stats: 'errors-only',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ]},
}
