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
    },
    allowRemap: {
        type: Boolean,
        required: false,
        default: true,
    }
});

const awaitingInput = ref(false); 
// @FIXME: more than one button can be awaiting input at once from a UI perspective.
// functionally, the first button to be clicked will be the only one to map the input
// so its not the worst thing in the world, but it would be nice to have a better solution.

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
    <button 
        :disabled="!allowRemap" 
        :class="{ 
            'dark:bg-red-800 bg-red-400': awaitingInput,
            'dark:bg-gray-600 bg-gray-200': !allowRemap & !awaitingInput,
            'dark:bg-yellow-600 bg-yellow-300': allowRemap & !awaitingInput
        }" 
        @click.prevent="learnInput">
        <slot></slot>
    </button>
</template>
