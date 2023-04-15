const path = require('path');
const { prepareEntry } = require('./lib/webpackManager');
const config = require('./lib/config');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	externals: [nodeExternals()],
	entry: prepareEntry(config),
	plugins: [new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: '[name].js',
		libraryTarget: 'umd',
	},
};
