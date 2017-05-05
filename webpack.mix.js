const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/js/app.js', 'dist/js')
  .sass('src/sass/app.scss', 'dist/css')
  .copy('src/index.html', 'dist/index.html')
  .browserSync(
    {
      server: {
        baseDir: './dist', index: 'index.html'
      },
      files: ['dist/css/*.css','dist/js/*.js','dist/*.html'],
      proxy: null
  });
