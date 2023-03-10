<script setup>
import useActivityStore from '@/stores/activityStore.js';
import { storeToRefs } from 'pinia';

const { activity, activeNote } = storeToRefs(useActivityStore());
</script>

<template>
    <div :class="{
        'flex items-center justify-center': true,
        'light:bg-green-400 dark:bg-green-800': activity,
    }">
        {{ activeNote }}
    </div>
</template>
