const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.config.common.js');
const config = commonConfig;

module.exports = (env, argv) => {
  config.mode = argv.mode;

  // Set the output directory to 'public' for Vercel
  config.output = {
    path: path.resolve(__dirname, 'public'), // Output files to 'public'
    filename: 'bundle.js', // The name of the output bundle file
  };

  // Add HtmlWebpackPlugin to automatically move index.html to 'public'
  config.plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html', // The source index.html file in 'src'
      filename: 'index.html', // The output file in 'public' directory
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
