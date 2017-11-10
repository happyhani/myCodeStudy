var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
//API
gulp.src('client/templates/*.jade')
  .pipe(jade())  //nodejs中的pipe
  .pipe(minify())
  .pipe(gulp.dest('build/minified_templates'));