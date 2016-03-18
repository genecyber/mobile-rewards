var gulp  = require('gulp')
var shell = require('gulp-shell')

gulp.task('default',['connect','steroids-login','connect'], function() {
  // place code for your default task here
});

gulp.task('steroids-login', function(){ 
    return gulp.src('') .pipe(
        shell(
                [ 'mkdir .appgyver', 'cp token.json ~/.appgyver', 'steroids login' ],
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