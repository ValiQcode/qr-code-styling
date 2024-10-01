const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.config.common.js'); // Import common config

module.exports = (env, argv) => {
  const config = commonConfig; // Start with common config

  config.mode = argv.mode;

  // Set the output directory to 'public' for Vercel
  config.output = {
    path: path.resolve(__dirname, 'public'), // Ensure output is in 'public'
    filename: 'bundle.js', // The output JavaScript bundle
  };

  // Use HtmlWebpackPlugin to move index.html to 'public'
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/index.html', // The source index.html file in 'src'
      filename: 'index.html' // Output to 'public/index.html'
    })
  );

  return config;
};
