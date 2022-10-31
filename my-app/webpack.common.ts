import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';
import { EnvironmentPlugin } from 'webpack';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config: webpack.Configuration = {
    entry: {
        app: './src/index.tsx',
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.tsx', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Application name",
            template: './src/index.html'
        }),
        new EnvironmentPlugin({
            filmAPI: 'http://localhost:4000/movies'
        })
    ]
}

module.exports = config;