const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [
        'babel-polyfill',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    context: path.resolve(__dirname, 'src'),
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                targets: {
                                    browsers: [
                                        '>0.25%',
                                        'not ie 11',
                                        'not op_mini all'
                                    ]
                                }
                            }],
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                'style-loader',
                'css-loader',
                'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                'file-loader'
                ]
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                    mimetype: 'image/png'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ template: './index.html' })
    ],
    devServer: {
        port: 3000,
        stats: 'errors-only',
        compress: true,
    }
}

module.exports = config;