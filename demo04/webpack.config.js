module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'//CSS-loader用来阅读CSS文件，Style-loader来插入Style标签到HTML页面中。不同的加载器靠感叹号标记链接（！）
			},
		]
	}
}
