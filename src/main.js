import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import router from '@/router/routes.js';
import { WebMidi } from "webmidi";
import useActivityStore from './stores/activityStore';
import { useInputListStore } from './stores/inputListStore';




// @TODO: this is probably not ideal
WebMidi
    .enable()
    .then(() => {
        console.debug("WebMidi enabled!");
        const app = createApp(App);

        const pinia = createPinia();

        app.use(router);
        app.use(pinia);

        const activityStore = useActivityStore();
        const deviceInputList = useInputListStore();

        // @TODO: definitely refactor this stuff out of main.js
        deviceInputList.currentInput.addListener("noteon", (e) => {
            activityStore.setActive(e.note.identifier);
        });

        deviceInputList.currentInput.addListener("noteoff", (e) => {
            activityStore.setInactive();
        });

        app.mount('#app');
    })
    .catch((err) => {
        console.error("WebMidi could not be enabled.", err);
    });
