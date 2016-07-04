import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task("watch", () => {
  gulp.watch(["./src/**/*.sass"], ["sass", "refresh"])
  gulp.watch(["./src/**/*.html"], ["html", "refresh"])
})