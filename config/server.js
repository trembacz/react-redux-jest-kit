var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	compress: true,
	hot: true,
	inline: true,
	historyApiFallback: false,
	quiet: false,
	noInfo: false,
	stats: {
		assets: false,
		colors: true,
		chunks: false,
		chunkModules: false,
		hash: false,
		maxModules: 0,
		timings: true,
		version: false
	}
}).listen(3000, 'localhost', function (err) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:3000');
});
