var webpack = require('webpack')

let config = {
  entry: './examples/App.js',
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
}

module.exports = config
