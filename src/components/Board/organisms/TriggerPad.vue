<script setup>
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
</script>
<template>
<div class="min-w-sm space-y-4 p-6">
    <h1 class="grid grid-cols-1 text-center">{{ label }}</h1>
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
</div>
</template>
