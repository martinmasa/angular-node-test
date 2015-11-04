/* jshint node: true */

'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

 // run server tests
 gulp.task('test:server', function () {
  return gulp.src('./server/test/**/*.spec.js', { read: false })
    .pipe($.mocha())
    .once('error', function () {
      process.exit(1);
    })
    .once('end', function () {
      process.exit();
    });
 });

 gulp.task('test', ['test:server']);