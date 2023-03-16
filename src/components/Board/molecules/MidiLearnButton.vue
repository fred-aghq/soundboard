<script setup>
import { useInputListStore } from '@/stores/InputListStore.js';
import useActivityStore from '@/stores/ActivityStore.js';
import { storeToRefs } from 'pinia';
import useMappedNotesStore from '@/stores/MappedNotesStore.js';

const props = defineProps({
    currentMappedNote: {
        type: String,
        required: false,
        default: null,
    }
});

function learnInput(e) {
    const { currentInput } = storeToRefs(useInputListStore());
    console.debug('Waiting to learn input', e);

    const learnInputHandler = (e) => {
        const { activity, activeNote } = useActivityStore();

        useMappedNotesStore().addMap(e.note.identifier, props.currentMappedNote ?? '');
    };

    currentInput.value.addListener('noteon', learnInputHandler, { remaining: 1 });
};

</script>
<template>
    <button @click.prevent="learnInput">
        <slot></slot>
    </button>
</template>
