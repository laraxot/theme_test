window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

 try {
    // global.$ = global.jQuery = window.$ = window.jQuery = require('jquery');
    global.$ = global.jQuery = require('jquery');
    //window.Popper = require('popper.js').default;
    window.Popper = require('@popperjs/core/dist/umd/popper').default;
    window.bootstrap = require('bootstrap');
    require('bootstrap-select');

    window.objectFitImages=require('object-fit-images');
    require('jquery.cookie');
    require('magnific-popup');
    require('prismjs');
    //var Swiper = window.Swiper = require('swiper/swiper-bundle.js');
    //window.Swiper = require('swiper/js/swiper');
    //window.Swiper = require('swiper');
    //import Swiper, {SwiperOptions} from "swiper";
    //var Swiper = global.Swiper =
    window.Swiper = require('swiper').default;;

    window.Dropzone=require('dropzone');
    window.SmoothScroll = require('smooth-scroll');

    //const Swal = window.Swal = require('sweetalert2');
    window.Swal = global.Swal = require('sweetalert2');

    window.noUiSlider = require('nouislider');

    const flatpickr = window.flatpickr = $.flatpickr = require("flatpickr");
    //const it = require("flatpickr/dist/l10n/it.js").default.it;
    require('jquery-migrate');
    require('select2');
    //global.videojs = window.videojs =  require('video.js');
    //require('video.js');

    //require('videojs-offset');



} catch (e) {
    console.log('--- error ---');
    console.log(e);
}
//Aliasing the jQuery Object
//When $.noConflict() is used to avoid namespace conflicts, the $ shortcut is no longer available. However, the .ready() handler is passed a reference to the jQuery object that called the method. This allows the handler to use a jQuery object, for example as $, without knowing its aliased name:
//jQuery.noConflict();

//if (typeof $ == 'undefined') {
//    var $ = jQuery;
//}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

 let token = document.head.querySelector('meta[name="csrf-token"]');

 if (token) {
     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
 } else {
     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
 }

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
//https://laracasts.com/discuss/channels/elixir/use-bootstrap-5-module-in-blade
import { Toast, Tooltip, Popover } from 'bootstrap';
