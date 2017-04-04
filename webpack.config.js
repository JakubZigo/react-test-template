const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'build')

const config = {
  entry: 'index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
      },
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `index.html`
    }),
  ],
}

module.exports = config
