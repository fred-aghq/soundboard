import { defineStore } from "pinia";

const useActivityStore = defineStore({
    id: "activity",
    state() {
        return {
            activity: false,
            note: '',
        }
    },
    actions: {
        setActive(note) {
            this.$state = {
                note: note,
                activity: true,
            };
        },
        setInactive() {
            this.$state = {
                activity: false,
                note: '',
            }
        },
    },
});

export default useActivityStore;
