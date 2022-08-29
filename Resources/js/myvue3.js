/**
 * @link https://www.freecodecamp.org/news/migrate-from-vue2-to-vue3-with-example-project/
 */

/*
app.config.isCustomElement = tag => tag.startsWith('input-')
*/
var path = require("path");

// path.resolve(

var extra='../../../../Modules/Theme/Resources/js/components';

import { createApp } from 'vue';
//import TinymceComponent from './components/TinymceComponent.vue';
//import ExampleComponent from '../../../components/ExampleComponent.vue';
//import Noui from './components/slider/Noui.vue';
//import Videojs from path.resolve(extra, 'videoplayer/Videojs.vue'); //errore

import Videojs                              from '../../../../Modules/Theme/Resources/js/components/videoplayer/Videojs.vue';
import ExampleComponent                     from '../../../../Modules/Theme/Resources/js/components/ExampleComponent';
import Noui                                 from '../../../../Modules/Theme/Resources/js/components/slider/Noui.vue';

//import TinymceComponent from './components/wysiwyg/Tinymce2Component.vue';

const app = createApp({
    data() {
        return {
            count: 0
        }
    }
});


app.component('videoplayer-component', Videojs);
app.component('v-example', ExampleComponent);
app.component('v-slider', Noui);
//app.component('slider-component', Noui);
//app.component('tinymce-component',TinymceComponent);

//per richiamarlo <videoplayer-component id='xxx' src='yyyy'>
//to call the component <videoplayer-component id='xxx' src='yyyy'>

app.mount('#app');
