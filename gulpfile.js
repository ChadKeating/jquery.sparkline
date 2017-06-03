var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('default', function() {
  return gulp
	.src([
		'./src/header.js',
		'./src/defaults.js',
		'./src/utils.js',
		'./src/simpledraw.js',
		'./src/rangemap.js',
		'./src/interact.js',
		'./src/base.js',
		'./src/chart-line.js',
		'./src/chart-bar.js',
		'./src/chart-tristate.js',
		'./src/chart-discrete.js',
		'./src/chart-bullet.js',
		'./src/chart-pie.js',
		'./src/chart-box.js',
		'./src/vcanvas-base.js',
		'./src/vcanvas-canvas.js',
		'./src/vcanvas-vml.js',
		'./src/footer.js'
	])
	.pipe(concat('jquery.sparkline.js'))
    .pipe(gulp.dest('./dist/'));
});