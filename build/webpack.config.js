'use strict'

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:{
    main:'./main.js',
    vnode:'./example/vnode.js',
    observe:'./example/observe.js',
    htmlParse:'./example/htmlParse.js',
  }, 
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [['es2015', { modules: false }], 'stage-1']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      chunks:['main'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'vnode.html'),
      filename: 'vnode.html',
      chunks:['vnode'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'observe.html'),
      filename: 'observe.html',
      chunks:['observe'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'parse.html'),
      filename: 'parse.html',
      chunks:['htmlParse'],
      inject: 'body'
    })
  ],
  devtool: 'source-map',
  devServer: {
    host:'0.0.0.0',
    port: 8092
  }
}
