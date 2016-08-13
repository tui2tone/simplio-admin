var gulp = require("gulp")

const fonts = {
  'font-awesome': 'node_modules/font-awesome/fonts/*',
  'ionicons': 'node_modules/ionicons/dist/fonts/*'
}

gulp.task('fonts', ['fonts:font-awesome']);

gulp.task('fonts:font-awesome', function () {
  return gulp.src(fonts['font-awesome'])
    .pipe(gulp.dest('temp/fonts'))
});

gulp.task('fonts:ionicons', function () {
  return gulp.src(fonts['ionicons'])
    .pipe(gulp.dest('temp/fonts/ionicons'))
});