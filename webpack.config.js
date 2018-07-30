const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            targets: {
                                rowsers: [
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
            use: [
            'style-loader',
            'css-loader',
            'sass-loader'
            ]
        },
        {
            test: /\.svg$/,
            use: [
            'file-loader'
            ]
        },
        {
            test: /\.png$/,
            use: [
            {
                loader: 'url-loader',
                options: {
                mimetype: 'image/png'
                }
            }
            ]
        }
    ]
  }
}

module.exports = config;