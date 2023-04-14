const path = require('path');
const glob = require('glob');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: 'production',
	externals: [nodeExternals()],
	entry: {
		index: './src/',
		...glob.sync('./src/components/!(*.spec.js)')
			.reduce((acc, filePath) => ({
				...acc,
				[path.parse(filePath).name]: filePath,
			}), {}),
	},
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
