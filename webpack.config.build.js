const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.config.common.js');

module.exports = (env, argv) => {
  const config = { ...commonConfig };

  // Set the mode based on the environment (development or production)
  config.mode = argv.mode || 'development';

  // Ensure output goes to 'public' directory for Vercel
  config.output = {
    path: path.resolve(__dirname, 'public'), // Ensure output goes to 'public'
    filename: 'bundle.js', // The output JavaScript bundle
    publicPath: '/', // Serve assets from root
  };

  // Add HtmlWebpackPlugin to generate 'index.html' in 'public'
  config.plugins = [
    ...config.plugins,
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use your index.html template in the 'src' folder
      filename: 'index.html', // Output as 'public/index.html'
    }),
  ];

  // Return the updated config
  return config;
};

  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map';
    config.watch = true;
  }

  if (argv.mode === 'production') {
    config.devtool = 'source-map';
  }

  return config;
};
