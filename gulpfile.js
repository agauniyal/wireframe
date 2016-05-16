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
const del = require('del');


gulp.task('default', ['lint-css']); // last dependency-chained task

gulp.task('sass', ['clean'], function() {

	return gulp.src('lib/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(sourcemaps.write())
		.pipe(cssfmt())
		.pipe(eol())
		.pipe(gulp.dest('css'));
});

gulp.task('css-min', ['sass'], function() {

	return gulp.src('css/*.css')
		.pipe(cssnano())
		.pipe(concat('wmin.css'))
		.pipe(gulp.dest('min'));
});

gulp.task('lint-css', ['css-min'], function lintCssTask() {

	return gulp
		.src(['css/**/*.css', '!css/normalize.css'])
		.pipe(gulpStylelint({
			reporters: [{
				formatter: 'string',
				console: true
			}]
		}))
});

gulp.task('clean', function() {
	return del([
		'min/**/*',
		'css/**/*',
		'!css/normalize.css'
	]);
});
