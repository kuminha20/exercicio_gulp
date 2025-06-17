const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Tarefa para compilar SASS
function compileSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// Tarefa para comprimir imagens
function compressImages() {
    return gulp.src('images/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { name: 'removeViewBox', active: true },
                    { name: 'cleanupIDs', active: false }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/images'));
}

// Tarefa para comprimir JavaScript
function compressJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'));
}

// Tarefa padrão que executa todas as tarefas
exports.default = gulp.series(compileSass, compressImages, compressJS);

// Tarefas individuais
exports.sass = compileSass;
exports.images = compressImages;
exports.js = compressJS; 