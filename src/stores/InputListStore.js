import { defineStore } from "pinia";
import { WebMidi } from "webmidi";

export const useInputListStore = defineStore({
    id: "deviceList",
    state: () => ({
        inputs: [],
    }),
    getters: {
        inputsRaw(state) {
            return state.inputs;
        }
    },
    actions: {
        fill() {
            WebMidi
            .enable()
            .then(() => {
                console.debug("WebMidi enabled!");
                this.$state.inputs = WebMidi.inputs;
            })
            .catch((err) => {
                console.error("WebMidi could not be enabled.", err);
            });
        },
        // @TODO: add mechanism to allow user to exclude or hide device(s)

        // addDevice(device) {
        //     this.inputs.push(device);
        // },
        // removeDevice(device) {
        //     this.inputs = this.inputs.filter((d) => d.id !== device.id);
        // },
        // updateDevice(device) {
        //     this.inputs = this.inputs.map((d) => {
        //         if (d.id === device.id) {
        //             return device;
        //         }
        //         return d;
        //     }
        //     );
        // }
    }
});
