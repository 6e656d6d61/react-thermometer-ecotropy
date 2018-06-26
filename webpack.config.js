var webpack = require('webpack')

let config = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/lib/',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
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
