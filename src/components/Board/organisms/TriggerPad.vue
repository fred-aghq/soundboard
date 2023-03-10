<script setup>
import useActivityStore from '@/stores/activityStore';
import { storeToRefs } from 'pinia';

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

defineEmits(['removeSound']);

</script>
<template>
<div :class="{
    'grid min-w-sm space-y-4 p-6 border border-slate-600': true,
    'bg-green-500': activeNote === note
}">
    <h1 class="grid grid-cols-1 text-center border-b-2">{{ label }}</h1>
    <div class="grid grid-cols-1">
        <button>Play Sound</button>
    </div>
    <div class="grid grid-cols-2 divide-x">
        <button>
            <span class="text-xs">
                MIDI ({{ note }})
            </span>
        </button>
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
