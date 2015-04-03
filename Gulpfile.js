var gulp = require('gulp'),
		concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    clean = require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src('dest/')
		.pipe(clean());
})
gulp.task('minify-css', function() {
  return gulp.src('source/css/*.css')
  	.pipe(concat('style.min.css'))
    .pipe(minifyCSS({}))
    .pipe(gulp.dest('dest/'));
});
gulp.task('default', ['clean', 'minify-css']);