"use strict";

const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");

module.exports = merge(baseConfig, {
  serve: {
    host: "127.0.0.1",
    port: 8080,
    open: true,
    hot: true,
    logLevel: "debug"
  }
});
