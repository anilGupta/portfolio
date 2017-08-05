const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});
const HMRConfig = new webpack.HotModuleReplacementPlugin();
const CopyAssetPluginConfig = new CopyWebpackPlugin([
  { from: './src/assets', to: './assets' },
  { from: './src/manifest.webapp', to: './manifest.webapp' },
]);

const ExtractTextPluginConfig = new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: false });

module.exports = {
  entry:[
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './src/index.js',
    './src/assets/styles/style.scss'
  ]
  ,
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ],
        }))
      },
      /*{ test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    sourceMap: true,
                    modules: false,
                    context: path.join(process.cwd(), './src'),
                    localIdentName: '[name]__[local].[hash:base64:5]',
                    minimize: true,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    outputStyle: 'expanded',
                    sourceMap: true,
                    sourceMapContents: true,
                  },
                },
              ]
        }),
      },*/
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    ExtractTextPluginConfig,
    HtmlWebpackPluginConfig,
    CopyAssetPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'cheap-source-map',
  target: 'web',
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "build"),
    publicPath: '/',
    port: 9000,
    historyApiFallback: true
  }
};