const webpackStream = require('webpack-stream');
const webpack = webpackStream.webpack;
let isDevelopment = true;

let gulpVars = require('./gulp.vars');

module.exports = {
    output: {
        publicPath: gulpVars.publicPath,
        filename: isDevelopment ? '[name].js' : '[name]-[chunkhash:10].js'
    },
    watch:   isDevelopment,
    devtool: isDevelopment ? 'cheap-module-inline-source-map' : false,
    module:  {
        rules: [
            {
                test:    /\.js$/,
                include: gulpVars.plugins.path.join(__dirname, gulpVars.jsPath),
				exclude: '/node_modules/',
                loader: "babel-loader",
                options: {
                    presets: [
                        ["babel-preset-env"]
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};