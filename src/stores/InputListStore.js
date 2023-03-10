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
            currentInput: initDefaultInput(), // @TODO: this should perhaps take place outside of the store
        }
    },
    getters: {
        currentInputChannels: state => state.currentInput.channels,
    },
    actions: {
        setCurrentInput(inputName) {
            this.currentInput.removeListener();

            const input = WebMidi.getInputByName(inputName);

            onNoteOn(input);

            this.$state.currentInput = input;
        },
        refresh() {
            this.$state.inputs = WebMidi.inputs;
        },

        // @TODO: add mechanism to allow user to exclude or hide device(s)
    }
});
