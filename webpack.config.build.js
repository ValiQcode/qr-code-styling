const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.config.common.js');
const config = commonConfig;

module.exports = (env, argv) => {
  config.mode = argv.mode;

  // Ensure the output directory is 'public'
  config.output = {
    path: path.resolve(__dirname, 'public'), // Output files to 'public'
    filename: 'bundle.js', // Output JavaScript bundle
  };

  // Use HtmlWebpackPlugin to move index.html to the 'public' directory
  config.plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Your source index.html file
      filename: 'index.html' // Ensure index.html is outputted to 'public'
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
