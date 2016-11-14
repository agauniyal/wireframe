'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const gulpStylelint = require('gulp-stylelint');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const eol = require('gulp-eol');
const cssfmt = require('gulp-cssfmt');
const connect = require('gulp-connect');
const open = require('gulp-open');
const del = require('del');
const request = require('request');
const fs = require('fs');


gulp.task('default', ['down-normalize', 'down-tip', 'lint-css', 'css-min', 'server']);

gulp.task('down-normalize', function() {
	fs.access('css/normalize.css', fs.F_OK, function(err) {
		if(!err) {
			return err;
		} else {
			return request('https://necolas.github.io/normalize.css/4.1.1/normalize.css')
				.pipe(fs.createWriteStream('css/normalize.css'));
		}
	});
});

gulp.task('down-tip', function() {
	fs.access('css/bmin.css', fs.F_OK, function(err) {
		if(!err) {
			return err;
		} else {
			return request('https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.2.4/balloon.min.css')
				.pipe(fs.createWriteStream('css/bmin.css'));
		}
	});
});


gulp.task('sass', ['clean'], function() {

	return gulp.src('lib/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(cssfmt())
		.pipe(eol())
		.pipe(connect.reload())
		.pipe(gulp.dest('css'));
});

gulp.task('css-min', ['sass', 'down-normalize', 'down-tip'], function() {

	return gulp.src(['css/normalize.css', 'css/**/*.css'])
		.pipe(autoprefixer({
			browsers: ['last 3 versions']
		}))
		.pipe(cssnano())
		.pipe(concat('wmin.css'))
		.pipe(gulp.dest('./min'));
});

gulp.task('lint-css', ['css-min'], function lintCssTask() {

	return gulp
		.src(['css/**/*.css', '!css/normalize.css', '!css/bmin.css'])
		.pipe(gulpStylelint({
			reporters: [{
				failAfterError: false,
				formatter: 'string',
				console: true
			}]
		}));
});

gulp.task('clean', function() {
	return del([
		'min/**/*',
		'css/**/*',
		'!css/normalize.css',
		'!css/bmin.css'
	]);
});

gulp.watch('lib/**/*.scss', ['default']);

// Local HTTP Server
var devServer = {
	host: '0.0.0.0',
	port: 4444,
	file: 'index.html',
	livereloadPort: 35729

};

// Local HTTP Server
gulp.task('server', function() {
	connect.server({
		port: devServer.port,
		livereload: {
			port: devServer.livereloadPort
		},
		host: devServer.host,
		fallback: devServer.file
	});
});

// Open app in browser
gulp.task('open', ['server'], function() {
	var options = {
		uri: 'http://' + devServer.host + ':' + devServer.port
	};
	gulp.src('./' + devServer.file)
		.pipe(open(options));
});



