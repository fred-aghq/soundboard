import onNoteOn from "@/listeners/OnNoteOn.js";
import { defineStore } from "pinia";
import { WebMidi } from "webmidi";
import useActivityStore from "./activityStore";
import useOnNoteOn from "@/listeners/onNoteOn.js";

const setupInput = input => {
    onNoteOn(input);
};

const initDefaultInput = () => {
    if (WebMidi.inputs.length > 0) {
        const input = WebMidi.inputs[0];

        setupInput(input);

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
        inputCount: state => state.inputs.length,
    },
    actions: {
        setCurrentInput(inputName) {
            this.currentInput.removeListener();
            const activityStore = useActivityStore();
            activityStore.$reset();

            const input = WebMidi.getInputByName(inputName);

            setupInput(input);

            this.$state.currentInput = input;
        },
        refresh() {
            this.$state.inputs = WebMidi.inputs;
        },

        // @TODO: add mechanism to allow user to exclude or hide device(s)
    }
});
