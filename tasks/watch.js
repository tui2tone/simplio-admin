import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task("watch", () => {
  gulp.watch(["./src/**/*.sass"], ["sass"])
  gulp.watch(["./src/**/*.html"], ["html", "refresh"])
})