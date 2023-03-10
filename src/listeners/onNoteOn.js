import useActivityStore from "@/stores/ActivityStore.js";
import useMappedNotesStore from "@/stores/MappedNotesStore.js";

const useOnNoteOn = input => {
    const activityStore = useActivityStore();
    const mappedNotesStore = useMappedNotesStore();

    input.addListener("noteon", (e) => {
        const note = e.note.identifier;

        console.debug("ON: " + note);
        activityStore.setActive(note);

        let map = mappedNotesStore.mappedNotes.filter(map => {
            if(map.note === note) {
                return map;
            }
        });

        if (!map.length) {
            return;
        }

        map = map[0];

        map.filename && new Audio('/assets/sounds/' + map.filename)
            .play();
    });

    input.addListener("noteoff", (e) => {
        console.debug("OFF: " + e.note.identifier);
        activityStore.setInactive();
    });
};

export default useOnNoteOn;
