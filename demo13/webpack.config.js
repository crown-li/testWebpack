//var webpack = require('webpack');
//module.exports = {
//entry: {
//  app: './main.js',
//  vendor: ['jquery']
//},
//output: {
//  filename: 'bundle.js'
//},
//plugins: [
//  new webpack.optimize.CommonsChunkPlugin({name: 'vendor',filename: 'vendor.js'})
//]
//};

/*
 * If you want a module available as variable in every module,
 * such as making $ and jQuery available in every module without 
 * writing require("jquery"). You should use ProvidePlugin.
 */
var webpack = require('webpack');
module.exports = {
	entry: {
		app: './main.js',
		//vendor: ['jquery']
	},
	output: {
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			JQuery: "jquery",
			"window.JQuery":"jquery"
		}),
		//new webpack.optimize.CommonsChunkPlugin({name: 'vendor',filename: 'vendor.js'})
	]
}
/*
 * If without writing the 'entry.vendor' and 'webpack.optimize.CommonsChunkPlugin',
 * it will be packaged into a large file
 */