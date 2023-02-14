const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
	entry: path.resolve(appDirectory, "src/index.js"), //path to the main .js file
	output: {
		filename: "js/bundled.js", //name for the js file that is created/compiled in memory
		clean: true
	},
	resolve: {
		extensions: [".js"]
	},
	devServer: {
		host: "0.0.0.0",
		port: 8080, //localhost:8080
		static: path.resolve(appDirectory, "public"), //tells webpack to serve from the public folder
		hot: true,
		devMiddleware: {
			publicPath: "/"
		}
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(appDirectory, "index.html")
		})
	],
	mode: "development"
};
