"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
exports.default = {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path_1.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path_1.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
};
