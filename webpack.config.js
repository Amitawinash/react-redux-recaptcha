const   path = require('path')

var config = {
    entry: {
        'app':"./src/app_start.js",
    },
    output: {
       path:path.join(__dirname, "public"),
       filename: "[name].min.js",
       publicPath:path.join(__dirname, "public"),
    },
    mode:'development',
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react'],
                plugins:['transform-object-rest-spread','transform-decorators-legacy']
             }
          },
          { test: /\.css$/, loader: 'style-loader!css-loader' },
          { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
          {
            test: /\.(?:png|jpg|svg)$/,
            loader: 'url-loader'
          }
       ]
    }
 }
 module.exports = config;
