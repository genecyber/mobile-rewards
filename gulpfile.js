var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('default',['steroids-login','connect'], function() {
  // place code for your default task here
});

gulp.task('steroids-login', function(){ 
    return gulp.src('') .pipe(
        shell(
                [ 'mkdir .appgyver', 'cp .appgyver/*.* ~/.appgyver', 'cp ~/.appgyver/*.* .appgyver', 'steroids login' ],
                {ignoreErrors: true}
        )
     )
})

gulp.task('connect', function() {
  return gulp.src('') .pipe(
        shell(['steroids connect --livereload'] ,
              {ignoreErrors: true} 
        ))
});