const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.config.common.js');
const config = commonConfig;

module.exports = {
  // other config...
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // point to your HTML template
      filename: 'index.html'
    }),
    // other plugins...
  ],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js',
  },
};

  // Use HtmlWebpackPlugin to move index.html to 'public'
  config.plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html', // The source index.html file in 'src'
      filename: 'index.html' // Output to 'public/index.html'
    }),
  ];

  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
    config.watch = true;
  }

  if (argv.mode === 'production') {
    config.devtool = 'source-map';
  }

  return config;
};
