const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
   return gulp.src('./src/scss/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
   gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
});
