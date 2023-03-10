import { defineStore } from "pinia";

const useMappedNotesStore = defineStore({
    id: "mappedNotes",
    state() {
        return {
            mappedNotes: [
                {
                    label: "808",
                    note: "C3",
                    filename: "808.wav",
                },
                {
                    label: "Kick",
                    note: "D3",
                    filename: "Kick.wav",
                },
                {
                    label: "Snare",
                    note: "E3",
                    filename: "Snare 1.wav",
                },
                {
                    label: "Hat Closed",
                    note: "F3",
                    filename: "Hat Closer 1.wav",
                }
            ],
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
        }
    },
});

export default useMappedNotesStore;
