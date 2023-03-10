<script setup>
import PrimaryTitle from '../components/Global/atoms/PrimaryTitle.vue';
import useMappedNotesStore from '@/stores/mappedNotesStore.js';
import { storeToRefs } from 'pinia';
import TriggerPad from '@/components/Board/organisms/TriggerPad.vue';

const mappedNotesStore = useMappedNotesStore();
const { mappedNotes } = storeToRefs(mappedNotesStore);

const removeSound = (event) => {
    console.debug(event.note);
    mappedNotesStore.removeMap(event.note);
};
</script>

<template>
    <div>
        <PrimaryTitle>
            Hello world!
        </PrimaryTitle>
        <div class="grid grid-cols-4 grid-rows-4">
            <TriggerPad 
                v-for="(note, _) in mappedNotes" 
                :key="_" 
                :label="note.label" 
                :filename="note.filename"
                :note="note.note"
                @removeSound="removeSound"
            />
        </div>
    </div>
</template>
