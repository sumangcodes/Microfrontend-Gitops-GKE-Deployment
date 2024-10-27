const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Ensure proper entry point for the app
  output: {
    publicPath: 'auto', // Automatically handles asset loading from different origins
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    allowedHosts: 'all',
    port: process.env.PORT || 3002, // Allows dynamic port configuration for local testing
    historyApiFallback: true, // Supports SPA routing
    open: true, // Automatically opens the browser on server start
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource', // Handle static assets such as images and fonts
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'], // Allow importing SVGs as React components
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "ShoppingCart", // Unique name for Shopping Cart microfrontend
      filename: "remoteEntry.js", // Federated entry point for remote module
      exposes: {
        './Cart': './src/Cart', // Expose the ShoppingCart component
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        "react-dom": { singleton: true, eager: true, requiredVersion: false },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Allow resolution of both .js and .jsx files
  },
};