var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("hooray - you created a task");
});
gulp.task('html', function(){
  console.log('Something useful being done to your html');
});
gulp.task('styles', function(){
  console.log('Imaginse Sass tasks running here');
});
gulp.task('watch', function(){
  watch('./app/index.html', function() {
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
