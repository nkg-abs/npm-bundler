const path = require('path');
const glob = require('glob');

module.exports = {
	entry: {
		index: './src/',
		...glob.sync('./src/components/**.js').reduce((acc, filePath) => ({
			...acc,
			[path.parse(filePath).name]: filePath,
		}), {}),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '',
		filename: '[name].js',
		libraryTarget: 'umd',
	},
};
