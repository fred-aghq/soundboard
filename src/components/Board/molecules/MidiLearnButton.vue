<script setup>
import { useInputListStore } from '@/stores/InputListStore.js';
import useActivityStore from '@/stores/ActivityStore.js';
import { storeToRefs } from 'pinia';
import useMappedNotesStore from '@/stores/MappedNotesStore.js';

function learnInput(e) {
    console.debug('Learn input');
    const { currentInput } = storeToRefs(useInputListStore());

    const learnInputHandler = (e) => {
        console.debug('Waiting to learn input', e);
        const { activity, activeNote } = useActivityStore();

        useMappedNotesStore().addMap(e.note.identifier);
    };

    currentInput.value.addListener('noteon', learnInputHandler, { remaining: 1 });
};

</script>
<template>
    <button @click.prevent="learnInput">
        <slot></slot>
    </button>
</template>
