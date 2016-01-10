# grunt-mkdocs [![NPM version](https://badge.fury.io/js/grunt-mkdocs.png)](http://badge.fury.io/js/grunt-mkdocs) [![Build Status](https://travis-ci.org/prantlf/grunt-mkdocs.png)](https://travis-ci.org/prantlf/grunt-mkdocs) [![Coverage Status](https://coveralls.io/repos/prantlf/grunt-mkdocs/badge.svg)](https://coveralls.io/r/prantlf/grunt-mkdocs) [![Dependency Status](https://david-dm.org/prantlf/grunt-mkdocs.svg)](https://david-dm.org/prantlf/grunt-mkdocs) [![devDependency Status](https://david-dm.org/prantlf/grunt-mkdocs/dev-status.svg)](https://david-dm.org/prantlf/grunt-mkdocs#info=devDependencies) [![devDependency Status](https://david-dm.org/prantlf/grunt-mkdocs/peer-status.svg)](https://david-dm.org/prantlf/grunt-mkdocs#info=peerDependencies) [![Code Climate](https://codeclimate.com/github/prantlf/grunt-mkdocs/badges/gpa.svg)](https://codeclimate.com/github/prantlf/grunt-mkdocs) [![Codacy Badge](https://www.codacy.com/project/badge/f3896e8dfa5342b8add12d50390edfcd)](https://www.codacy.com/public/prantlf/grunt-mkdocs) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![NPM Downloads](https://nodei.co/npm/grunt-mkdocs.png?downloads=true&stars=true)](https://www.npmjs.com/package/grunt-mkdocs)

> Grunt plugin generating documentation web site from Markdown sources
  using mkdocs

## Getting Started

You need [node >= 0.8][node], [npm] and [grunt >= 0.4][Grunt] installed
and your project build managed by a [Gruntfile] with the necessary modules
listed in [package.json].  If you haven't used Grunt before, be sure to
check out the [Getting Started] guide, as it explains how to create a
Gruntfile as well as install and use Grunt plugins.  Once you're familiar
with that process, you may install this plugin with this command:

```shell
$ npm install grunt-mkdocs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mkdocs');
```

## The "mkdocs" tool

This plugin depends on the [mkdocs] documentation web site generator,
which can produce HTML files and other assets suitable for upload to
the [Read The Docs] web site.  You must install it before you build
the documentation.

You need [Python] and [pip] installed, then you install the mkdocs package:
https://github.com/aivarsk/scruffy/blob/master/INSTALL.md

```shell
$ sudo pip install mkdocs
```

## Input

Store your written articles in to a folder (docs) and specify a target
folder for the generated HTML pages (site); the index.md file will become
the title page:

```text
docs/
  index.md
  overview.md
  ...
site/
 overview/
 index.html
 ...
mkdocs.yml
Gruntfile.js
```

## The "mkdocs" task

This module provides a grunt multi-task generating HTML documentation from
Markdown sources using [mkdocs].  In your project's Gruntfile, add a section
named `mkdocs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mkdocs: {
    dist: {
      src: '.',
      options: {
        clean: true
      }
    }
  }
})
```

All documentation project options should be maintained in the
[mkdocs configuration] file (mkdocs.yml) in this plugin version.

### Options

#### src
Type: `String`
Default value: `'.'`

Path to documentation root directory with the `mkdocs.yml` file.

#### options.clean
Type: `Boolean`
Default value: `false`

Removes stale files (from previous builds) from the target folder.

## Build

Call the `mkdocs` task:

```shell
$ grunt mkdocs
```

or integrate it to the default build sequence in the Gruntfile:

```js
grunt.registerTask('default', ['mkdocs', ...]);
```

## Notes

If you want to browse the generated web site from the file system (using
the `file://` scheme), add the option `use_directory_urls: false` to the
`mkdocs.yml` configuration files.  The generated links will point to
`.../index.html` files instead of just `.../` directories relying on the
default documents supported by the web servers.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding
style.  Add unit tests for any new or changed functionality. Lint and test
your code using Grunt.

## License

Copyright (c) 2015-2016 Ferdinand Prantl

Licensed under the MIT license.

[node]: http://nodejs.org
[npm]: http://npmjs.org
[package.json]: https://docs.npmjs.com/files/package.json
[Grunt]: https://gruntjs.com
[Gruntfile]: http://gruntjs.com/sample-gruntfile
[Getting Gtarted]: https://github.com/gruntjs/grunt/wiki/Getting-started
[Python]: https://www.python.org
[pip]: http://pip.readthedocs.org/en/latest/installing.html
[mkdocs]: http://www.mkdocs.org
[mkdocs configuration]: http://www.mkdocs.org/user-guide/configuration
[Read The Docs]: https://readthedocs.org
