const gulpLess = require('gulp-less')
const path = require('path')
const gulp = require('gulp')

gulp.task('less', function() {
  return gulp
    .src('./source/_less/**/*.less')
    .pipe(
      gulpLess({
        paths: [path.join(__dirname, 'source/_less')]
      })
    )
    .pipe(gulp.dest('./source/css/aircloud.css'))
})
