"use strict";
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var path = require('path');
const open_1 = require("open");
const webpack_1 = require("webpack");
const webpack_config_dev_1 = require("../webpack.config.dev");
const port = 3000;
const app = express_1();
const compiler = webpack_1(webpack_config_dev_1.default);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpack_config_dev_1.default.output.publicPath
}));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../src/index.html'));
});
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        open_1('http://localhost:' + port);
    }
});
