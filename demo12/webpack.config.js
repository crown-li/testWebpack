var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
//var webpack = require('webpack');

module.exports = {
	entry: {
		bundle1: './main1.jsx',
		bundle2: './main2.jsx'
	},
	output: {
		filename: '[name].js'
	},
	module: {
		loaders:[
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015','react']
				}
			},
		]
	},
	plugins: [
		new CommonsChunkPlugin('init'),
		//new webpack.optimize.CommonsChunkPlugin('init')
	]
}
