const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    publicPath: '/product-catalog/',  // Ensures assets are loaded correctly
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    allowedHosts: 'all',
    port: process.env.PORT || 8080,
    historyApiFallback: {
      index: '/product-catalog/index.html', // Ensures correct fallback on refresh
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "ProductCatalog",
      filename: "remoteEntry.js",
      exposes: {
        './ProductList': './src/ProductList',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        "react-dom": { singleton: true, eager: true, requiredVersion: false },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};