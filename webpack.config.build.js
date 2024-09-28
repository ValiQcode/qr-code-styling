const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'public'), // Ensure output is in 'public'
      filename: 'bundle.js', // Output JavaScript bundle
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // Ensure index.html is outputted to 'public'
        filename: 'index.html'
      }),
      // Remove FileManagerPlugin if it's unnecessary or reconfigure to copy to 'public'
    ],
    // Add necessary loaders or other configurations
  };
};
