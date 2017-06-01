var webpack = require('webpack');
var devFlagPlugin = new webpack.DefinePlugin({
	// __DEV__ 默认是 false，除非手动设置开发环境
	_DEV_:JSON.stringify(JSON.parse(process.env.DEBUG||'false'))
});

module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	plugins: [devFlagPlugin]
};
