<script setup>

defineProps({
    inputs: Array
});

</script>

<template>
    <select @change="$emit('inputSelected', $event)" v-if="inputs.length">
        <option v-for="input in inputs" :key="input.name" :value="input.name">
            {{ input.name }}
        </option>
    </select>
</template>
