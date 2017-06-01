module.exports = {
	entry:'./main.jsx',
	output: {
		filename:'budle.js'
	},
	module: {
	  loaders: [
	    {
	      test: /\.jsx?$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
	      exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
	      loader: 'babel-loader',//大爷的，官方说可以写成“babel”，但实际操作报错，一顿好找啊
	      query: {
	        presets: ['es2015', 'react']
	      }
	    }
	  ]
	}
}
