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
const open = require('gulp-open');
const del = require('del');
const request = require('request');
const fs = require('fs');


gulp.task('default', ['down-normalize', 'down-tip']);

gulp.task('down-normalize', function() {
	fs.access('public/css/normalize.css', fs.F_OK, function(err) {
		if(!err) {
			return err;
		} else {
			return request('https://necolas.github.io/normalize.css/4.1.1/normalize.css')
				.pipe(fs.createWriteStream('public/css/normalize.css'));
		}
	});
});

gulp.task('down-tip', function() {
	fs.access('public/css/bmin.css', fs.F_OK, function(err) {
		if(!err) {
			return err;
		} else {
			return request('https://cdnjs.cloudflare.com/ajax/libs/balloon-css/0.2.4/balloon.min.css')
				.pipe(fs.createWriteStream('public/css/bmin.css'));
		}
	});
});


gulp.task('sass', ['clean'], function() {
	return gulp.src('sass/css/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(cssfmt())
		.pipe(eol())
		.pipe(gulp.dest(__dirname + '/public/css'));
});

gulp.task('css-min', ['sass', 'down-normalize', 'down-tip'], function() {

	return gulp.src(['public/css/normalize.css', 'public/css/**/*.css'])
		.pipe(autoprefixer({
			browsers: ['last 3 versions']
		}))
		.pipe(cssnano())
		.pipe(concat('wmin.css'))
		.pipe(gulp.dest('./public/min'));
});

gulp.task('lint-css', ['css-min'], function lintCssTask() {

	return gulp
		.src(['public//css/**/*.css', '!public/css/normalize.css', '!public/css/bmin.css'])
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
		'public/min/**/*',
		'public/css/**/*',
		'!public/css/normalize.css',
		'!public/css/bmin.css'
	]);
});

gulp.watch('lib/**/*.scss', ['default']);





