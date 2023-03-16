import { defineStore } from "pinia";

const findMap = (state, note) => {
    return state.mappedNotes.find(map => map.note === note);
}

const useMappedNotesStore = defineStore({
    id: "mappedNotes",
    state() {
        return {
            mappedNotes: {
                "C2": {
                    label: "808",
                    note: "C2",
                    filename: "808.wav",
                },
                "D2": {
                    label: "Kick",
                    note: "D2",
                    filename: "Kick.wav",
                },
                "E2": {
                    label: "Snare",
                    note: "E2",
                    filename: "Snare 1.wav",
                },
                "F2": {
                    label: "Hat Closed",
                    note: "F2",
                    filename: "Hat Closer 1.wav",
                }
            },
        }
    },
    getters: {
        getMappingByNote: state => {
            return note => {
                findMap(state, note);
            }
        }
    },
    actions: {
        removeMap(note) {
            const filtered = this.mappedNotes = this.mappedNotes.filter(map => {
                if (map.note !== note) {
                    return map;
                }
            });

            this.$state.mappedNotes = filtered;
        },
        addMap(note, oldNote = '') {
            // @FIXME: this removes and re-adds the map if the note is changed
            // so it gets pushed to the end of the array
            console.debug("addMap", note);
            console.debug("old note: ", oldNote);

            let oldMap = null;

            if (oldNote.length > 1) {
                oldMap = findMap(this.$state, oldNote);
                console.debug(oldMap);

                if (oldMap) {
                    console.debug("found old map: ", oldMap.note, oldMap.filename);
                    this.removeMap(oldNote);
                }
            }

            const label = oldMap?.label ?? 'New mapped';
            const filename = oldMap?.filename ?? 'Hat Closer 1.wav';

            const newMap = {
                label: label,
                note: note,
                filename: filename,
            };

            this.$state.mappedNotes.push(newMap);
        }
    },
});

export default useMappedNotesStore;
