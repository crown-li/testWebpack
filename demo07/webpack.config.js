var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	plugins: [
		new uglifyJsPlugin({
			compress: {
				warnings: false//当删除没有用处的代码时，不显示警告
			}
		})
	]
};
