var express = require('express');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var compiler = webpack(webpackConfig);


var app = express();
app.use(express.static(path.join(__dirname, '../www')));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));



var port = 3003;
app.listen(port, _ => {
  console.log(`server is listening on port ${port}`);
});
