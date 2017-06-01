require.ensure(['./a'],function(require){
	var content = require('./a');
	document.getElementById('a').onclick = function(){
		alert(content);
	}
})
require.ensure(['./b'],function(require){
	var content2 = require('./b');
	document.getElementById('b').onclick = function(){
		alert(content2)
	}
})


