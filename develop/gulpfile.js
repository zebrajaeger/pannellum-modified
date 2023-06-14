const {watch, series, src, dest} = require('gulp');

function copyJs() {
    console.log('copy js')
    return src('../src/js/*.js')
        .pipe(dest('C:/prj/jsphere2cube/build2'));
}

function watchJs() {
    watch('../src/js/*.js', copyJs);
}

exports.default = series(copyJs, watchJs);
