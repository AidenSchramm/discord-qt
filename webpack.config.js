const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { IgnorePlugin } = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.NODE_ENV || "development",
  entry: {
    index: "./src",
    worker: "./worker"
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: { publicPath: "dist" },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.node$/,
        use: [
          {
            loader: "native-addon-loader",
            options: { name: "[name]-[hash].[ext]" },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new MiniCssExtractPlugin(),
    new IgnorePlugin({resourceRegExp: /(node-opus)|(@discordjs\/opus)|(opusscript)/g}),
    new CopyPlugin({
      patterns: [
        {from: 'assets', to: 'assets'}
      ]
    })
  ],
  stats: {
    warnings: false
  },
};
