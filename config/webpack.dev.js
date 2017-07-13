'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'babel-polyfill',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server', // do not reload whole page
		'react-hot-loader/patch',
		path.join(__dirname, '../src/index.jsx')
	],
	output: {
		path: path.join(__dirname, '../dist/'),
		filename: '[name].js',
		publicPath: '/'
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new ExtractTextPlugin('[name]-dev.css'),
		new OpenBrowserPlugin({ url: 'http://localhost:3000' })
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				enforce: "pre",
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					configFile: '.eslintrc',
					failOnWarning: false,
					failOnError: false
				}
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'stage-2']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader?modules=true&localIdentName=[local]!sass-loader')
			}
		]
	}
};
