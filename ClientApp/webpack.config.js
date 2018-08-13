const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: { main: "./src/index.js" },
    output: {
        path: path.join(__dirname, "static"),
        filename: "../../wwwroot/js/[name].bundle.js",
        publicPath: '/'
    },
    devServer: {
        contentBase: './static',
        hot: true,
        historyApiFallback: true
    },
    performance: { hints: false },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new BundleTracker({ path: './', filename: 'webpack-stats.json' }),
        new LiveReloadPlugin({ port: 5001, hostname: 'localhost' }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    }
};