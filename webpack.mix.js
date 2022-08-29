/**
 * https://github.com/laravel-mix/laravel-mix/issues/1722
 */

let mix = require('laravel-mix');
const path = require('path');

require('laravel-mix-polyfill');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

var public_path = 'Resources/dist';

mix.js('Resources/js/app.js', 'js');

mix.sass('Resources/scss/app.scss', 'css');

mix.vue({ version: 3 });
/*
mix.postCss('Resources/css/app.css', 'Reources/views/dist/css', [
    //
]);
*/
//mix.setResourceRoot('../');
mix.setPublicPath(public_path);

//Make jQuery Available to Every Module
mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'], // more than one
    moment: 'moment' // only one
        //tether: ['Tether', 'windows.Tether'],
});
/*
mix.extract([
    'axios',
    'vue',
    'tether',
    'lodash',
    'popper.js',
    'jquery',
    'sweetalert2',
    'moment',
    'nouislider',
    'bootstrap',
    'video.js',
    'videojs',
]);
*/
mix.extract();

/*
plugins: [
  new webpack.ProvidePlugin({
    videojs: ['video.js', 'default']
  })
]
*/
//*
//const VueLoaderPlugin = require('vue-loader/lib/plugin');//Must Import

//const vue = require('vue');

//console.log('QUI');
/*
mix.webpackConfig({
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            //'videojs': path.resolve(__dirname, 'node_modules/video.js/dist/video.min.js'),
            //'theme::': path.resolve('../../Modules/Theme/Resources/js'),
            //'vue': path.resolve('./node_modules/@vue/runtime-dom'),
            //'vue$': 'vue/dist/vue.esm.js',
            //'@': path.resolve('resources/js'),
            //'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
            //vue: 'vue/dist/vue.js'
            //'vue': '@vue/runtime-dom',
        }
    },
    //plugins: [new VueLoaderPlugin()]//Must configurate
    //externalsType: 'script',
    externals: {
        vue: "Vue",
    //    vue: "vue",
        //vue: ['https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js', 'Vue'],
        //vue: ['https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js'],
    }
    //externals: ['vue', 'axios']
    //externals: ['vue']
});
*/
//*
//mix.webpackConfig({
//resolve: {
//}
/*
externals: {
    'vue': 'Vue',
    'lodash': '_',
}
*/
//});
//*/
// webpack needs to be explicitly required
//const webpack = require('webpack');

//const {defineConfig} = require('@vue/cli-service');

//console.log('----------------------------');
//console.log(defineConfig);
//import Vue from 'vue';

//const Vue = require('vue');

mix.webpackConfig({
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules')
        ]
    },
    plugins: [
        // fix "process is not defined" error:
        // (do "npm install process" before running the build)
        //new webpack.ProvidePlugin({
        //    Vue: ['vue', 'default']
        //jQuery: 'jquery',
        //$: 'jquery'
        //}),

    ],
    //externals: {
    //    "vue": "Vue"
    //}
});

//*/
mix.polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: { "firefox": "50", "ie": 11 }
});

//With File Versioning
//mix.version();
//Generate JavaScript source maps.
mix.sourceMaps();

var $from = './Resources/dist';
var $to = '../../../public_html/themes/Test/dist';
console.log('from :' + $from);
console.log('to :' + $to);

//UnhandledPromiseRejectionWarning: Error: ENOENT: no such file or directory, open 'F:\var\www\base_xxx\laravel\Themes\AdminLTE\Resources\views\dist\public_html\themes\AdminLTE\dist\admin-lte.css'
//Error: ENOENT: no such file or directory, open 'F:\Resources\views\dist\css\admin-lte.css'

mix.copyDirectory($from, $to);