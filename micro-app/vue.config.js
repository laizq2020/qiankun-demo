module.exports = {
	publicPath: "/micro-app",
	lintOnSave: false,
	configureWebpack: {
		output: {
			library: "micro_app",
			libraryTarget: "umd",
			chunkLoadingGlobal: `webpackJsonp_micro_app`,
		},
	},
	devServer: {
		port: 8081,
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},
}
