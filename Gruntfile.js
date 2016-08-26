'use strict';

module.exports = function (grunt) {

  var coverage = process.env.GRUNT_SCRUFFY_COVERAGE;

  require('time-grunt')(grunt);

  grunt.initConfig({

    jshint: {
      all:     [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    scruffy: {
      complex: {
        src: ['test/complex.yuml'],
        dest: 'test/complex.png'
      }
    },

    nodeunit: {
      tests:   ['test/*_test.js'],
      options: {
        reporter: coverage ? 'lcov' : 'verbose',
        reporterOutput: coverage ? 'coverage/tests.lcov' : undefined
      }
    },

    clean: {
      tests:    ['test/complex.png'],
      coverage: ['coverage']
    },

    instrument: {
      files: 'tasks/*.js',
      options: {
        lazy: true,
        basePath: 'coverage/'
      }
    },

    storeCoverage: {
      options: {
        dir: 'coverage'
      }
    },

    makeReport: {
      src: 'coverage/coverage.json',
      options: {
        type: 'lcov',
        dir: 'coverage',
        print: 'detail'
      }
    },

    coveralls: {
      tests: {
        src: 'coverage/lcov.info'
      }
    }

  });

  grunt.loadTasks(coverage ? 'coverage/tasks' : 'tasks');

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', coverage ?
    ['jshint', 'clean', 'instrument', 'scruffy', 'nodeunit',
     'storeCoverage', 'makeReport'] :
    ['jshint', 'clean:tests', 'scruffy', 'nodeunit']);

};
