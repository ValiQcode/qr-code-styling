const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const rootPath = path.resolve(__dirname, "./");
const srcPath = path.resolve(rootPath, "src");
const publicPath = path.resolve(rootPath, "lib");

const shared = {
  entry: srcPath + "/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.ts$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".js"]
  }
};

module.exports = [{
  ...shared,
  output: {
    path: publicPath, // Ensure output goes to 'public'
    filename: "qr-code-styling.js",
    library: "QRCodeStyling",
    libraryTarget: "umd",
    libraryExport: "default"
  },
}, {
  ...shared,
  output: {
    path: publicPath, // Ensure output goes to 'public'
    filename: "qr-code-styling.common.js",
    library: "QRCodeStyling",
    libraryTarget: "commonjs",
    libraryExport: "default"
  },
}];
