const path = require('path');

const resolve = file => path.join(__dirname, file)

console.log()

module.exports = {
  mode: 'production',
  entry: resolve('src/exif-parser.js'),
  output: {
    path: resolve('dist'),
    filename: "exif-parser.js",
    library: 'ExifParser',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
