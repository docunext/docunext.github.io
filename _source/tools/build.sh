#!/bin/sh
node tools/writeBlogIndex.js
cp source/views/index.html ../
cp source/assets/css/app.css ../assets/css/
webpack --config tools/webpack.config.js
