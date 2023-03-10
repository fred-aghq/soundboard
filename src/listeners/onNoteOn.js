import useActivityStore from "@/stores/activityStore.js";
import { useInputListStore } from "@/stores/InputListStore.js";

const useOnNoteOn = () => {
    return input => {
        const activityStore = useActivityStore();

        input.addListener("noteon", (e) => {
            console.debug("ON: " + e.note.identifier);
            activityStore.setActive(e.note.identifier);

            let filename;

            switch (e.note.identifier) {
                case "B1":
                    filename = "694294.mp3";
                    break;
                case "C2":
                    filename = "694296.mp3";
                    break;
                case "C#2":
                    filename = "694298.mp3";
                    break;
                case "D2":
                    filename = "694309.mp3";
                    break;
            }

            new Audio('/src/assets/sounds/' + filename)
                .play();
        });

        input.addListener("noteoff", (e) => {
            console.debug("OFF: " + e.note.identifier);
            activityStore.setInactive();
        });
    }
}

export default useOnNoteOn;
