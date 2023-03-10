<script setup>
import useActivityStore from '@/stores/activityStore.js';
import { storeToRefs } from 'pinia';

const { activity, activeNote } = storeToRefs(useActivityStore());
</script>

<template>
    <div :class="{
        'bg-green-400': activity,
    }">
        {{  activeNote }}
    </div>
</template>
