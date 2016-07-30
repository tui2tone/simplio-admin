'use strict';

import gulp from 'gulp';

gulp.task("assets", ["assets:flags"])

gulp.task('assets:flags', function () {
  return gulp.src('./node_modules/flag-icon-css/flags/**/*')
    .pipe(gulp.dest('temp/assets/flags'))
});
