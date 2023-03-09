<script setup>

defineProps({
    inputs: Array
});

</script>

<template>
    <select class="dark: bg-slate-600 bg-white border border-2 rounded-md p-1 pr-5" @change="$emit('inputSelected', $event)" v-if="inputs.length">
        <option v-for="input in inputs" :key="input.name" :value="input.name">
            {{ input.name }}
        </option>
    </select>
</template>
