const glob = require('glob');
const path = require('path');
const { reduce } = require('@laufire/utils/collection');

// join multiple extensions as **/*{.js,.jsx}`
const readComponents = (context) => {
	const { config: { entry, cwd, ignore }} = context;

	return { ...context, data: glob.sync(entry, { cwd, ignore }) };
};

const transformPaths = (context) => {
	const { config: { cwd }, data } = context;
	const entry = reduce(
		data, (acc, filePath) => ({
			...acc,
			[path.parse(filePath).name]: `${ cwd }/${ filePath }`,
		}), {}
	);

	return { ...context, data: entry };
};

const prepareEntry = (config) =>
	transformPaths(readComponents({ config })).data;

module.exports = {
	prepareEntry,
};
