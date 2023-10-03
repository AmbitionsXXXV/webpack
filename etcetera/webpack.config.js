const path = require("path");

module.exports = {
	mode: "development",
	devtool: "source-map",
	context: path.resolve(__dirname, "."),
	entry: "./src/main.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				use: "babel-loader"
			}
		]
	},
	plugins: []
};
