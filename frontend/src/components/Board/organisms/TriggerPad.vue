<script setup>
import useActivityStore from '@/stores/activityStore';
import { storeToRefs } from 'pinia';
import MidiLearnButton from '@/components/Board/molecules/MidiLearnButton.vue';
import { useInputListStore } from '@/stores/inputListStore';

defineProps({
    label: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
});

const { activeNote } = storeToRefs(useActivityStore());
const { inputCount } = storeToRefs(useInputListStore());

defineEmits(['removeSound']);

</script>
<template>
<div :class="{
    'grid min-w-sm space-y-4 p-6 border border-slate-600': true,
    'bg-green-500 dark:bg-green-800': activeNote === note
}">
    <h1 class="grid grid-cols-1 text-center border-b-2">{{ label }}</h1>
    <div class="grid grid-cols-1">
        <button>Play Sound</button>
    </div>
    <div class="grid grid-cols-2 divide-x">
        <MidiLearnButton :currentMappedNote=note :allowRemap="inputCount > 0">
            Map [{{  note }}]
        </MidiLearnButton>
        <button>
            <span class="text-xs">
                Sound ({{ filename }})
            </span>
        </button>
    </div>
    <div class="grid grid-cols-1">
        <button @click="$emit('removeSound', {note: note})">Remove</button>
    </div>
</div>
</template>
