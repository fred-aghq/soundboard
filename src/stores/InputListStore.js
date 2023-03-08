import { defineStore } from "pinia";
import { WebMidi } from "webmidi";

export const useInputListStore = defineStore({
    id: "deviceList",
    state() {
        return {
            inputs: [
                {
                    id: "test",
                    name: "test",
                    manufacturer: "test",

                },
                {
                    id: "test2",
                    name: "test2",
                    manufacturer: "test",

                }
            ],
            currentInput: null,
        }
    },
    getters: {
        getInputs() {
            return this.inputsRaw;
        },
        inputsRaw(state) {
            return this.inputs;
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
