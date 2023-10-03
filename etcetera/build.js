const webpack = require("../lib/webpack");
const config = require("./webpack.config");

// 创建一个对象: compiler
// 另外一个对象: compilation
const compiler = webpack(config);

compiler.run((err, stats) => {
	if (err) {
		console.log(err);
	} else {
		console.log(stats);
	}
});
