const glob = require('glob');
const path = require('path');

// join multiple extensions as **/*{.js,.jsx}`
const prepareEntry = ({ cwd, ignore }) => glob
	.sync('**/*.js', { cwd, ignore })
	.reduce((acc, filePath) => ({
		...acc,
		[path.parse(filePath).name]: `${ cwd }/${ filePath }`,
	}), {});

module.exports = {
	prepareEntry,
};
