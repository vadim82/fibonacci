var webpack = require('webpack');
var path = require('path');
var fs = require('fs');


// this is needed to avoid loading nodejs components into the package files.
// Great blog post here: http://jlongster.com/Backend-Apps-with-Webpack--Part-I
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
    entry: './index.ts',
    target: 'node',
    output: {
        filename: 'bin/index.js'
    },
    resolve: {
        extensions: ['', '.ts']
    },
    externals: nodeModules,
    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/ }
        ]
    }
}