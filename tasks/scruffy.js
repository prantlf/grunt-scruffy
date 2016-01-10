// grunt-scruffy
// https://github.com/prantlf/grunt-scruffy
//
// Copyright (c) 2016 Ferdinand Prantl
// Licensed under the MIT license.
//
// Generates images from yuml diagram sources.

'use strict';

var exec = require("child_process").exec,
    path = require('path'),
    Q = require('q');

module.exports = function (grunt) {

  function processDiagram(fileSrc, fileDest, options) {
    grunt.log.subhead('Processing diagram "' + fileSrc + '"');
    return Q.Promise(function (resolve, reject) {
      var command = 'suml "--input_file=' + fileSrc +
            '" "--output_file=' + fileDest +
            '" --' + options.format + ' --' + options.type;
      if (options.scruffy) {
        command += ' --scruffy';
      }
      if (options.shadow) {
        command += ' --shadow';
      }
      if (options.fontFamily) {
        command += ' "--font-family=' + options.fontFamily + '"';
      }
      exec(command, function (error, stdout) {
        grunt.log.write(stdout);
        if (error) {
          grunt.log.error(error);
          grunt.fail.warn('Generating diagram from "' + fileSrc +
            '" to "' + fileDest + '" failed\n');
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  grunt.registerMultiTask('scruffy',
    'Generates images from yuml diagram sources',
    function () {
      var done = this.async(),
          options = this.options({
            scruffy: true,
            shadow: false,
            type: 'class',       // class|sequence
            format: 'png',       // png|svg
            fontFamily: 'Purisa'
          }),
          promises = this.files.map(function (file) {
            // If multiple source files are specified, the destination
            // path should point to a directory
            var single = file.orig.src.length === 1 &&
                  !file.orig.src.some(function (src) {
                    return src.indexOf('*') >= 0 || src.indexOf('?') >= 0;
                  }),
                promises = file.src.map(function (src) {
                  // If the destination is a directory, use the source file name
                  // with the target image format as extension
                  var dest = single ? file.dest : path.join(file.dest,
                        path.parse(src).name + '.' + options.format),
                      dir = path.dirname(dest);
                  grunt.file.mkdir(dir);
                  return processDiagram(src, dest, options);
                });
            return Q.all(promises);
          });
      Q.all(promises)
       .then(done);
    });
  };
