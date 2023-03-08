import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import router from '@/router/routes.js';
import { WebMidi } from "webmidi";
import { useInputListStore } from '@/stores/InputListStore';



const app = createApp(App);

const pinia = createPinia();

app.use(router);
app.use(pinia);

// @TODO: this is probably not ideal
await WebMidi
.enable()
.catch((err) => {
    console.error("WebMidi could not be enabled.", err);
});

console.debug("WebMidi enabled!");
app.mount('#app');