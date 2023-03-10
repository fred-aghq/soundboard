import useActivityStore from "@/stores/activityStore.js";
import { useInputListStore } from "@/stores/InputListStore.js";

const useOnNoteOn = input => {
    const activityStore = useActivityStore();

    input.addListener("noteon", (e) => {
        console.debug("ON: " + e.note.identifier);
        activityStore.setActive(e.note.identifier);

        let filename;

        switch (e.note.identifier) {
            case "C3":
                filename = "808.wav";
                break;
            case "D3":
                filename = "Kick.wav";
                break;
            case "E3":
                filename = "Snare 1.wav";
                break;
            case "F3":
                filename = "Hat Closer 1.wav";
                break;
            default:
                filename = null;
                break;
        }

        filename && new Audio('/assets/sounds/' + filename)
            .play();
    });

    input.addListener("noteoff", (e) => {
        console.debug("OFF: " + e.note.identifier);
        activityStore.setInactive();
    });
};

export default useOnNoteOn;
