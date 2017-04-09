var path = require('path')
var webpack = require('webpack')
var version = require('../package.json').version

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: './src/index',
  output: {
    path: resolve('dist'),
    filename: 'lyric.js',
    library: 'Lyric',
    libraryTarget: 'umd',
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(version)
    })
  ]
};