<script setup>
import { useInputListStore } from '@/stores/InputListStore.js';
import useActivityStore from '@/stores/ActivityStore.js';
import { storeToRefs } from 'pinia';
import useMappedNotesStore from '@/stores/MappedNotesStore.js';
import { ref } from 'vue';

const props = defineProps({
    currentMappedNote: {
        type: String,
        required: false,
        default: null,
    }
});

const awaitingInput = ref(false);

function learnInput(e) {
    if ( awaitingInput.value === true) {
        awaitingInput.value = false;
        return;
    }

    const { currentInput } = storeToRefs(useInputListStore());
    console.debug('Waiting to learn input', e);
    awaitingInput.value = true;

    const learnInputHandler = (e) => {
        const { activity, activeNote } = useActivityStore();

        useMappedNotesStore().addMap(e.note.identifier, props.currentMappedNote ?? '');

        awaitingInput.value = false;
    };

    currentInput.value.addListener('noteon', learnInputHandler, { remaining: 1 });
};

</script>
<template>
    <button :class="{ 'dark: bg-red-800 bg-red-400': awaitingInput }" @click.prevent="learnInput">
        <slot></slot>
    </button>
</template>
