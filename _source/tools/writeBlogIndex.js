var path = require('path');
var config = { 
  'paths': {
    'source': 'source/content',
    'build': '../'
  }
};
var sourcePath = path.resolve(config.paths.source);
var fs = require('fs');
var glob = require("glob");

function writeBlogIndex() {
    var blogIndex = path.join(sourcePath, '/blog/201**/*.*');
    var myRequires = '';
    var yearIndex = {};
    return glob(blogIndex, {}, function (er, files) {
        files.forEach(function(originalPath) {
            var file = originalPath.split('blog/')[1];
            var year = file.slice(0,4);
            yearIndex[year] = year;
            var key = file.split('.')[0];
            myRequires = myRequires + 'exports.__' + key.replace(/[^a-z0-9]/ig,'_') + ' = require(\'./blog/' + file + '\');\n';
            myRequires = myRequires + 'exports.__' + key.replace(/[^a-z0-9]/ig,'_') + '.date = "' + year + '-' + key.slice(5, 10) + '";\n';
        });
        fs.writeFile(path.join(sourcePath, 'blogIndex.js'), myRequires, function (err) {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    });
}

writeBlogIndex();
