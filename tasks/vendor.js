'use strict';

import gulp from "gulp";

const js_libs = [ 
  'bower_components/chartist-plugin-pointlabels/dist/chartist-plugin-pointlabels.min.js'
]

const css_libs = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css',
  'bower_components/font-awesome/css/font-awesome.min.css',
  'bower_components/chartist/dist/chartist.min.css'
]

gulp.task('vendor', ['vendor:js', 'vendor:css']);

gulp.task('vendor:js', function () {
  return gulp.src(js_libs)
    .pipe(gulp.dest('temp/vendor/js'))
});

gulp.task('vendor:css', function () {
  return gulp.src(css_libs)
    .pipe(gulp.dest('temp/vendor/css'))
});