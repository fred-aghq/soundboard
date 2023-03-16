import { defineStore } from "pinia";
import { sortBy } from 'lodash';

const findMap = (state, note) => {
    console.log(state.mappedNotes[note])
    return state.mappedNotes[note];
}

const mapExists = (state, note) => {
    return state.mappedNotes[note] !== undefined;
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
                    order: 0,
                },
                "D2": {
                    label: "Kick",
                    note: "D2",
                    filename: "Kick.wav",
                    order: 1,
                },
                "E2": {
                    label: "Snare",
                    note: "E2",
                    filename: "Snare 1.wav",
                    order: 2,
                },
                "F2": {
                    label: "Hat Closed",
                    note: "F2",
                    filename: "Hat Closer 1.wav",
                    order: 3,
                }
            },
        }
    },
    getters: {
        getMappingByNote: state => {
            return note => {
                return findMap(state, note);
            }
        },
        getMapsSortedByOrder: state => {
            return sortBy(state.mappedNotes, 'order');
        }
    },
    actions: {
        removeMap(note) {
            mapExists(this.$state, note) && delete this.$state.mappedNotes[note];
        },
        addMap(note, oldNote = '') {
            let newMap = {};

            // Lazy bail if the new note is already mapped to another sound
            if (mapExists(this.$state, note)) {
                console.debug(note + " already mapped to a sound. Ignoring.");
                return;
            }

            if (mapExists(this.$state, oldNote)) {
                newMap = findMap(this.$state, oldNote);
                newMap.note = note;
                this.removeMap(oldNote);
            }

            this.$state.mappedNotes[note] = newMap;
        }
    },
});

export default useMappedNotesStore;
