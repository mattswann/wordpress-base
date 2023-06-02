/**
 * Gulpfile for File Icon Vectors
 *
 * @author Daniel M. Hendricks
 * @license GPL-2.0-or-later
 * {@link https://github.com/cloudverve/wp-sync-db GitHub repository}
 */

var pkg           = require( './package.json' );
var gulp          = require( 'gulp' );
var rename        = require( 'gulp-rename' );
var minifycss     = require( 'gulp-uglifycss' );
var sass          = require( 'gulp-sass' );
var autoprefixer  = require( 'gulp-autoprefixer' );
var cache         = require( 'gulp-cache' );
var lineec        = require( 'gulp-line-ending-corrector' );
var filter        = require( 'gulp-filter' );
var concat				= require( 'gulp-concat' );
var uglify				= require( 'gulp-uglify' );
var notify        = require( 'gulp-notify' );
var project       = pkg.name;

const AUTOPREFIXER_BROWSERS = [ 'last 2 version', '> 1%', 'ie >= 9', 'ie_mob >= 10', 'ff >= 30', 'chrome >= 34', 'safari >= 7', 'opera >= 23', 'ios >= 7', 'android >= 4', 'bb >= 10' ];

gulp.task( 'styles', function() {
	return gulp
		.src( './src/scss/styles.scss' )
		.pipe(
			sass({
				errLogToConsole: true,
				outputStyle: 'expanded',
				precision: 10
			})
		)
		.on( 'error', sass.logError )
		.pipe( autoprefixer( AUTOPREFIXER_BROWSERS ) )
		.pipe( lineec() )
		.pipe( gulp.dest( './asset/css' ) )
		.pipe( filter( '**/*.css' ) )
		.pipe( rename( { suffix: '.min' } ) )
    .pipe( minifycss() )
		.pipe( lineec() )
		.pipe( gulp.dest( './asset/css' ) )
		.pipe( notify({ message: 'TASK: "styles" completed', onLast: true }) );
});

gulp.task( 'js', function() {
	return gulp
		//.src( './src/js/*.js' )
    .src( [ './src/js/common.js', './src/js/hook.js', './src/js/script.js' ] )
    .pipe( concat( project + '.js' ) )
    .pipe( rename( {
      basename: project,
    }))
    .pipe( lineec() )
    .pipe( gulp.dest( './asset/js' ) )
    .pipe( rename( {
      basename: project,
      suffix: '.min'
    }))
    .pipe( uglify() )
    .pipe( lineec() )
    .pipe( gulp.dest( './asset/js' ) )
    .pipe( notify( { message: 'TASK: "js" completed.', onLast: true } ) );
});

gulp.task(
	'default',
	gulp.parallel(
		[ 'js', 'styles' ],
		function watchFiles() {
			gulp.watch( './src/js/*.js', gulp.parallel( 'js' ) );
      gulp.watch( './src/scss/styles.scss', gulp.parallel( 'styles' ) );
		}
	)
);
