const mix = require('laravel-mix');

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

mix
    .js('resources/js/app.js', 'public/js')
    .styles([
        'node_modules/open-sans-all/css/open-sans.css',
        'node_modules/font-awesome/css/font-awesome.css',
        'resources/cs/style.css'], 'public/css/style.css'
    )
;
