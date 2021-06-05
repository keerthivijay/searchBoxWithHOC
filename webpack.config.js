const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
		  query: {
          presets: ['react', 'es2015', 'stage-0']
        },
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};