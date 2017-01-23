var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  entry: {
    js: "./static/js/app.js",
    css: "./static/css/splash.scss"
  },
  output: {
    path: "./public",
    filename: "fitpet.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      },
      { test: /\.s?css$/, loader: ExtractTextPlugin.extract("style", ["css", "sass"])}
    ]
  },
  plugins: [
    new ExtractTextPlugin("fitpet.css"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      _: "underscore"
    }),
  ]
};