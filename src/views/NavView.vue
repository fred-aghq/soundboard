<script setup>
import ActivityLight from '@/components/Devices/atoms/ActivityLight.vue';
import { RouterLink } from 'vue-router'

</script>
<template>
    <nav class="flex justify-between items-center py-4">
        <h1 class="text-2xl font-bold">
            <RouterLink to="/">My App</RouterLink>
        </h1>
        <div>
            <RouterLink to="/settings" class="p-4">Settings</RouterLink>
        </div>

    </nav>
</template>
