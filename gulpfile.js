var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var htmlExtend = require('gulp-html-extend');
var imageMin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var critical = require('critical');
var browserSync = require('browser-sync');

// Tâche "css" = autoprefixer + minify
gulp.task('css', function() {
    return gulp.src('dev/styles/*.css')
      .pipe(autoprefixer())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest('css/'))
      .pipe(browserSync.reload({stream:true}));
});

// Tâche "js" = uglify + concat
gulp.task('js', function() {
    return gulp.src('dev/scripts/*.js')
      .pipe(uglify())
      .pipe(concat('global.min.js'))
      .pipe(gulp.dest('js/'))
      .pipe(browserSync.reload({stream:true}));
});

// Tâche "img" = Images optimisées
gulp.task('img', function () {
    return gulp.src('dev/images/*.{png,jpg,jpeg,gif,svg}')
      .pipe(imageMin())
      .pipe(gulp.dest('img/'))
      .pipe(browserSync.reload({stream:true}));
});

// Tâche "html" = includes HTML
gulp.task('html', function() {
    return  gulp.src('dev/html/index.html')
      // Generates HTML includes
      .pipe(htmlExtend({
        annotations: false,
        verbose: false
      })) // default options
      .pipe(gulp.dest('./'))
      .pipe(browserSync.reload({stream:true}));
});

// Tâche "critical" = critical inline CSS
// gulp.task('critical', function() {
//     return  gulp.src('*.html')
//       .pipe(critical.generate({
//         base: '',
//         inline: true,
//         src: 'index.html',
//         dest: '',
//         minify: true
//       }))
// });


gulp.task('watch', function () {
    gulp.watch('dev/styles/*.css', gulp.task('css'));
    gulp.watch('dev/scripts/*.js', gulp.task('js'));
    gulp.watch('dev/html/*.html', gulp.task('html'));
    gulp.watch('dev/images/*.{png,jpg,jpeg,gif,svg}', gulp.task('img'));
 });

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: true
    });
});

gulp.task('start', gulp.parallel('browser-sync', 'watch'));
gulp.task('build', gulp.parallel('css', 'js', 'img', 'html'));