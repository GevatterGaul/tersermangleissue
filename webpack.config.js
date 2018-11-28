const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const tsLoader = {
  loader: "ts-loader",
  options: {
    configFile: "tsconfig.prod.json",
    transpileOnly: true,
    experimentalWatchApi: true
  },
  exclude: [/node_modules/, /.*\.ejs/]
};

module.exports = {
  module: {
    rules: [
      tsLoader,
      {
        test: /\.css$/,
        use: ["css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devtool: "source-map",

  entry: "./src/index.tsx",
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: "src/index.ejs"
    })
  ],
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: false,
        terserOptions: {
          keep_classnames: true,
          keep_fnames: true,
          // will not work like this
          mangle: { properties: {} }
          // without the properties option, it will work
          // mangle: {}
        }
      })
    ]
  }
};
