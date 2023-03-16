<script setup>
import PrimaryTitle from '../components/Global/atoms/PrimaryTitle.vue';
import useMappedNotesStore from '@/stores/mappedNotesStore.js';
import { storeToRefs } from 'pinia';
import TriggerPad from '@/components/Board/organisms/TriggerPad.vue';

const mappedNotesStore = useMappedNotesStore();
const { mappedNotes, getMapsSortedByOrder } = storeToRefs(mappedNotesStore);

const removeSound = (event) => {
    console.debug(event.note);
    mappedNotesStore.removeMap(event.note);
};

const addSound = (event, note) => {
    // @TODO: await midi note input here?
    console.log(event);
    const map = {
        note: note,
        label: "foo",
        filename: "foo.wav"
    }

    mappedNotesStore.addMap(note, '', map);
}
</script>

<template>
    <div>
        <PrimaryTitle>
            Soundboard
        </PrimaryTitle>
        <div class="grid grid-cols-4 grid-rows-4">
            <TriggerPad v-for="(note, _) in getMapsSortedByOrder" :key="_" :label="note.label" :filename="note.filename"
                :note="note.note" @removeSound="removeSound" />
            <div>
                <button 
                    @click="addSound($event, 'E3')"
                    class="grid min-w-sm space-y-4 p-6 border border-slate-600">+</button>
            </div>
        </div>

    </div>
</template>
