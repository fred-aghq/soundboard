import { defineStore } from "pinia";

const useActivityStore = defineStore({
    id: "activity",
    state() {
        return {
            activity: false,
            activeNote: '',
        }
    },
    actions: {
        setActive(note) {
            this.$state = {
                activeNote: note,
                activity: true,
            };
        },
        setInactive() {
            this.$state = {
                activity: false,
                activeNote: '',
            }
        },
    },
});

export default useActivityStore;
