const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MediaQuerySplittingPlugin = require('media-query-splitting-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
const sass = require('node-sass')

module.exports = {
  entry: {
    main: './src/javascript/index.js',
    cdn: './src/javascript/cdn.js',
    styleguide: './src/javascript/styleguide.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'javascripts/[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  },
  optimization: {
    //minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    runtimeChunk: {
      name: 'common'
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          test: /\.(css|scss|less)$/,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/static/index.html' }),
    new MiniCssExtractPlugin({ filename: 'stylesheet-new/[name].css' }),
    new CopyPlugin([{ from: 'src/static', to: '' }]),
    new CopyPlugin([
      {
        from: 'src/stylesheets/*.scss',
        to: './stylesheets/[name].css',
        transform(content, path) {
          const result = sass.renderSync({
            file: path
          })
          return result.css.toString()
        }
      }
    ]),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
