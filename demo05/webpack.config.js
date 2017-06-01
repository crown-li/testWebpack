module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(png|jpg)$/, 
				loader: 'url-loader?limit=8192'}//如果图片的大小小于8192比特，将编译成Data URl,否则，将会编译成普通的URl，问号(?)用来将参数传递到加载器中
		]
	}
}
