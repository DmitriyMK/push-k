var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    bourbon = require('node-bourbon'),
    uglify = require('gulp-uglifyjs'),

    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),

    del = require('del'),
    notify = require("gulp-notify");
//    rsync = require('gulp-rsync');



gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(sass({
            outputStyle: 'expanded'
        }).on("error", notify.onError()))
        .pipe(rename({
            suffix: '.min',
            prefix: ''
        }))
        .pipe(autoprefixer(['last 5 versions', '> 1%', 'ie 8'], {
            cascade: true
        }))
        .pipe(cleancss({
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false,
        // open: false,
        // online: false, // Work Offline Without Internet Connection
        // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
    });
});


gulp.task('scripts', function() {
    return gulp.src([

            'app/js/script.js',

        ])
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/main.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('app/css'));
});


gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});



gulp.task('clean', function() {
    return del.sync('dist');
});


gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});


gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {


    var buildFiles = gulp.src([
        'app/*.html',
        'app/.htaccess',
    ]).pipe(gulp.dest('dist'));

    var buildCss = gulp.src([
        'app/css/main.min.css',
    ]).pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src([
        'app/js/script.min.js',
    ]).pipe(gulp.dest('dist/js'));

    var buildFonts = gulp.src([
        'app/fonts/**/*',
    ]).pipe(gulp.dest('dist/fonts'));

});

gulp.task('clear', function() {
    return cache.clearAll();
})


gulp.task('default', ['watch']);