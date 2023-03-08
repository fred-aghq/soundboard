import { defineStore } from "pinia";
import { WebMidi } from "webmidi";

export const useInputListStore = defineStore({
    id: "deviceList",
    state() {
        return {
            inputs: WebMidi.inputs ?? [],
            currentInput: null,
        }
    },
    getters: {
        getInputs(state) {
            return this.inputsRaw;
        },
        inputsRaw(state) {
            return state.inputs;
        }
    },
    actions: {
        setCurrentInput(input) {
            this.currentInput = input;
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
