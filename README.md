# grunt-scruffy [![NPM version](https://badge.fury.io/js/grunt-scruffy.png)](http://badge.fury.io/js/grunt-scruffy) [![Build Status](https://travis-ci.org/prantlf/grunt-scruffy.png)](https://travis-ci.org/prantlf/grunt-scruffy) [![Coverage Status](https://coveralls.io/repos/prantlf/grunt-scruffy/badge.svg)](https://coveralls.io/r/prantlf/grunt-scruffy) [![Dependency Status](https://david-dm.org/prantlf/grunt-scruffy.svg)](https://david-dm.org/prantlf/grunt-scruffy) [![devDependency Status](https://david-dm.org/prantlf/grunt-scruffy/dev-status.svg)](https://david-dm.org/prantlf/grunt-scruffy#info=devDependencies) [![devDependency Status](https://david-dm.org/prantlf/grunt-scruffy/peer-status.svg)](https://david-dm.org/prantlf/grunt-scruffy#info=peerDependencies) [![Code Climate](https://codeclimate.com/github/prantlf/grunt-scruffy/badges/gpa.svg)](https://codeclimate.com/github/prantlf/grunt-scruffy) [![Codacy Badge](https://www.codacy.com/project/badge/f3896e8dfa5342b8add12d50390edfcd)](https://www.codacy.com/public/prantlf/grunt-scruffy) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![NPM Downloads](https://nodei.co/npm/grunt-scruffy.png?downloads=true&stars=true)](https://www.npmjs.com/package/grunt-scruffy)

This module provides a grunt multi-task generating images from [yuml]
diagram sources using [scruffy].
    
If you generate HTML technical documention from textual sources, you may want
to maintain only sources of UML diagrams in your repository and generate the
pictures only during the documentation build.  You will be able to do changes
easily, without committing both diagram sources and pictures and sychronizing
them manually.

If you want to just quickly convert a yuml source file to a picture, you
can use the [scruffy] command-line tool, which this task is based on.

## Installation

You need [node >= 0.12][node], [npm] and [grunt >= 0.4][Grunt] installed
and your project build managed by a [Gruntfile] with the necessary modules
listed in [package.json].  If you haven't used Grunt before, be sure to
check out the [Getting Started] guide, as it explains how to create a
Gruntfile as well as install and use Grunt plugins.  Once you're familiar
with that process, you may ensure native dependencies of this plugin and
install it:

1. Install [pre-requisites](https://github.com/aivarsk/scruffy/blob/master/INSTALL.md)
   of [scruffy] depending on your operating system (Python 2.7, OSX and
   Ubuntu tested)

2. Install the Grunt task:

```shell
$ npm install grunt-scruffy --save-dev
```

## Configuration

Add the `scruffy` entry with the scruffy task configuration to the
options of the `grunt.initConfig` method:

```js
grunt.initConfig({
  scruffy: {
    one: {
      files: {
        'dist/doc/images/diagram.png': ['doc/images/diagram.yuml']
      }
    },
    all: {
      src: ['doc/images/*.classses.yuml']
      dest: 'dist/doc/images'
    }
  }
});
```
The configuration consists of key-value pairs with the output image path
as a key pointing to the yuml input file.  If you specify more source
files by wildcards, the destination should be a directory; the source file
extension wil lbe replaced by the output format in the output file name.

Then, load the plugin:

```javascript
grunt.loadNpmTasks('grunt-scruffy');
```

## Build

Call the `scruffy` task:

```shell
$ grunt scruffy
```

or integrate it to your build sequence in `Gruntfile.js`:

```js
grunt.registerTask('default', ['scruffy', ...]);
```

## Customizing

Default behaviour of the task can be tweaked by the task options; these
are the defaults:

```js
grunt.initConfig({
  scruffy: {
    one: {
      files: {
        'dist/doc/images/diagram.png': ['doc/images/diagram.yuml']
      },
      options: {
        scruffy: true,
        shadow: false,
        type: 'class',       // class|sequence
        format: 'png',       // png|svg
        fontFamily: 'Purisa'
      }
    }
  }
});
```
See the [parameters of the command-line scruffy tool](https://github.com/aivarsk/scruffy/blob/master/bin/suml)
 or run `suml --help` for more information.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding
style.  Add unit tests for any new or changed functionality. Lint and test
your code using Grunt.

## Release History

 * 2016-26-08   v0.2.0   Upgrade to Grunt 1.x
 * 2016-03-05   v0.1.1   Update dependencies, improve build testing
 * 2016-01-10   v0.1.0   Initial release

## License

Copyright (c) 2016 Ferdinand Prantl

Licensed under the MIT license.

[node]: http://nodejs.org
[npm]: http://npmjs.org
[package.json]: https://docs.npmjs.com/files/package.json
[Grunt]: https://gruntjs.com
[Gruntfile]: http://gruntjs.com/sample-gruntfile
[Getting Gtarted]: https://github.com/gruntjs/grunt/wiki/Getting-started
[scruffy]: https://github.com/aivarsk/scruffy
[yuml]: http://yuml.me/
