import onNoteOn from "@/listeners/onNoteOn.js";
import { defineStore } from "pinia";
import { WebMidi } from "webmidi";

const initDefaultInput = () => {
    if (WebMidi.inputs.length > 0) {
        const input = WebMidi.inputs[0];

        onNoteOn(input);

        return input;
    }

    return null;
}

export const useInputListStore = defineStore({
    id: "deviceList",
    state() {
        return {
            inputs: WebMidi.inputs,
            currentInput: initDefaultInput(),
        }
    },
    getters: {
        currentInputChannels: state => {
            return state.currentInput?.channels;
        }
    },
    actions: {
        setCurrentInput(inputName) {
            // @TODO: this only works when changing the input, not when the default input is initialized
            this.currentInput.removeListener("noteon");

            const input = WebMidi.getInputByName(inputName);

            onNoteOn(input);

            this.$state.currentInput = input;
        },
        refresh() {
            this.$state.inputs = WebMidi.inputs;
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
