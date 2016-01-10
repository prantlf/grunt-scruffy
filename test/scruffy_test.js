'use strict';

var fs = require('fs'),
    path = require('path');

exports.scruffy = {

  complex: function (test) {
    var output = fs.statSync(path.join(__dirname, 'complex.png'));
    test.ok(output.isFile() && output.size > 0, 'creates a PNG file');
    test.done();
  }

};
