const path = require('path');
const glob = require('glob');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cwd = './src';
const extensions = ['.js'];
const ignore = [
	'**/*.test.js',
	'**/*.spec.js',
	'**/setupTests.js',
];
const entry = glob
	.sync(`**/*{${ extensions.join(',') }}`, { cwd, ignore })
	.reduce((acc, filePath) => ({
		...acc,
		[path.parse(filePath).name]: `${ cwd }/${ filePath }`,
	}), {});

module.exports = {
	mode: 'production',
	externals: [nodeExternals()],
	entry: entry,
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
