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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.styles([
    'public/asset/public/assets/css/bootstrap-responsive.css',
    'public/asset/public/assets/css/fancybox/jquery.fancybox.css',
    'public/asset/public/assets/css/jcarousel.css',
    'public/asset/public/assets/css/style.css',
    'public/asset/public/assets/skins/default.css'
],'public/asset/public/frontend.css')
