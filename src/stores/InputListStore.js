import { defineStore } from "pinia";
import { WebMidi } from "webmidi";

export const useInputListStore = defineStore({
    id: "deviceList",
    state() {
        return {
            inputs: WebMidi.inputs,
            // inputs: [
            //     {
            //         id: "test",
            //         name: "focusrite foobar",
            //         manufacturer: "focusrite",
            //     },
            //     {
            //         id: "test2",
            //         name: "test2",
            //         manufacturer: "test2",
            //     }
            // ],
            currentInput: '',
        }
    },
    getters: {

    },
    actions: {
        setCurrentInput(inputName) {
            this.currentInput = WebMidi.getInputByName(inputName);
        },
        refresh() {
            this.inputs = WebMidi.inputs;
        }
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
