/*eslint linebreak-style: ["error", "windows"]*/

"use restrict";

//dependencies
const gulp      = require('gulp');
const sass      = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const rename    = require('gulp-rename');
const changed   = require('gulp-changed');

const SCSS_SRC  = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css';

gulp.task('sass', () =>(

    gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(changed(SCSS_DEST))
        .pipe(gulp.dest(SCSS_DEST))

));


gulp.task('sass:watch', () => (
    gulp.watch(SCSS_SRC, ['sass'])
));


gulp.task('default', ['sass:watch']);