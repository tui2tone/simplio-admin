'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';

const tarks = requireDir("./tasks");

gulp.task('angularjs', () => {
  return runSequence('angularjs:html', 'angularjs:js:watch', 'angularjs:watch')
})

gulp.task('dev', () => {
  return runSequence('html', 'sass', 'fonts','image', 'js:watch','browser-sync','angularjs', 'watch');
});