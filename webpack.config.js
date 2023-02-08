const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// For analyzing the bundle size
const BuundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
// Don't change anything here - A developer ? -> you can change
module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/main/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // name specified in entry will come inside 'name' in bracket.
        // contenthash fro cach(e)ing
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /^.*\.(css|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // For compating with all the browsers
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // for all asset resources
            {
                test: /\.(jpg|png|gif|ttf|otf|woff|mp3|wav|mp4|webm|pdf|doc|xls|json|csv)/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/',
                    publicPath: "assets/",
                    emitFile: true,
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack - base',
            filename: 'index.html',
            template: 'src/main/index.html'
        }),
        // new BundleAnalyzerPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/assets', to: 'assets' },
            ],
        }),


    ]
}