var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var htmlExtend = require('gulp-html-extend');
var imageMin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var critical = require('critical');
var browserSync = require('browser-sync');

// Tâche "css" = LESS + autoprefixer + minify
gulp.task('css', function() {
    return gulp.src('/dev/styles/*.css')
      .pipe(autoprefixer())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(minify())
      .pipe(gulp.dest('./css/'));
});

// Tâche "js" = uglify + concat
gulp.task('js', function() {
    return gulp.src('/dev/scripts/*.js')
      .pipe(uglify())
      .pipe(concat('global.min.js'))
      .pipe(gulp.dest('./js/'));
});

// Tâche "img" = Images optimisées
gulp.task('img', function () {
    return gulp.src('/dev/images/*.{png,jpg,jpeg,gif,svg}')
      .pipe(imagemin())
      .pipe(gulp.dest('./img/'));
});

// Tâche "html" = includes HTML
gulp.task('html', function() {
    return  gulp.src('/dev/html/*.html')
      // Generates HTML includes
      .pipe(extender({
        annotations: false,
        verbose: false
      })) // default options
      .pipe(gulp.dest('./'))
});

// Tâche "critical" = critical inline CSS
gulp.task('critical', function() {
    return  gulp.src('./*.html')
      .pipe(critical({
        base: './',
        inline: true,
        src: 'index.html',
        minify: true
      }))
      .pipe(gulp.dest('./'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('start', ['css', 'js', 'img', 'html', 'critical', 'browser-sync']);