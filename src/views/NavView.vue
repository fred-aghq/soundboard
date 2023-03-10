<script setup>
import ActivityLight from '@/components/Devices/atoms/ActivityLight.vue';
import { RouterLink } from 'vue-router'

</script>
<template>
    <nav class="flex items-center justify-between py-4">
        <h1 class="text-2xl font-bold">
            <RouterLink to="/">My App</RouterLink>
        </h1>
        <div class="">
            <RouterLink to="/settings" class="p-4">Settings</RouterLink>
        </div>
        <div>
            <ActivityLight class="justify-end h-12 w-8 p-4 border border-2 border-gray-400"/>
        </div>
    </nav>
</template>
