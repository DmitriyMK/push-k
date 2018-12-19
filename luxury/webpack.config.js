const path = require('path');

module.exports = {
  entry: [
  './client_src/libs/geometrics.js',
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/js'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: 'env'
        }
      }
    },
    ],

    loaders: [
    {
      test: /\.glsl$/,
      loader: 'webpack-glsl'
    }
    ]
  },
  plugins: [
  ]
};