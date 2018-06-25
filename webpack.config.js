"use strict";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    bundle: path.join(__dirname, "src", "ts", "index.tsx")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "static/js/[name].[hash].chunk.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".pug", ".css", ".styl"]
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pug-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: [
          {
            loader: "source-map-loader"
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader:
              "awesome-typescript-loader?configFileName=" +
              path.join(__dirname, "tsconfig.json")
          }
        ]
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                config: {
                  path: path.join(__dirname, "postcss.config.js")
                }
              }
            },
            {
              loader: "stylus-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.pug")
    }),
    new ExtractTextPlugin({
      filename: "css/[name].[chunkhash:8].css"
    })
  ]
};
