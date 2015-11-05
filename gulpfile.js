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

gulp.task('serve', function () {
  $.nodemon({
    script: './server/app.js',
    watch: ['./server/'],
    ignore: ['./server/test/', './node_modules'],
    env: { 'NODE_ENV': 'development' }
  });
});

 gulp.task('test', ['test:server']);
 gulp.task('default', ['serve']);