var path = require('path');

module.exports = {
	entry: './examples/main/index.tsx',
	output: {
		path: __dirname,
		filename: 'examples/main/index.js'
	},
	resolve: {
		extensions: ['', '.js', '.ts', '.tsx']
	},
	module: {
		loaders: [
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		]
	}
};
