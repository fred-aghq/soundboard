import { defineStore } from "pinia";

const useMappedNotesStore = defineStore({
    id: "mappedNotes",
    state() {
        return {
            mappedNotes: [
                {
                    label: "808",
                    note: "C2",
                    filename: "808.wav",
                },
                {
                    label: "Kick",
                    note: "D2",
                    filename: "Kick.wav",
                },
                {
                    label: "Snare",
                    note: "E2",
                    filename: "Snare 1.wav",
                },
                {
                    label: "Hat Closed",
                    note: "F2",
                    filename: "Hat Closer 1.wav",
                }
            ],
        }
    },
    getters: {
        getMappingByNote: state => {
            return note => {
                state.find(map => map.note === note)
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
            console.debug("addMap", note);
                      


        }
    },
});

export default useMappedNotesStore;
