import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import router from '@/router/routes.js';
import { WebMidi } from "webmidi";
import { useInputListStore }  from '@/stores/InputListStore.js';




// @TODO: this is probably not ideal
WebMidi
    .enable()
    .then(() => {
        console.debug("WebMidi enabled!");
        const app = createApp(App);

        const pinia = createPinia();
        
        app.use(router);
        app.use(pinia);
        
        useInputListStore();
        app.mount('#app');
    })
    .catch((err) => {
        console.error("WebMidi could not be enabled.", err);
    });
