'use strict';

import gulp from "gulp";
import concat from "gulp-concat";

const js_libs = [ 
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
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
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('temp/js'))
});

gulp.task('vendor:css', function () {
  return gulp.src(css_libs)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('temp/css'))
});