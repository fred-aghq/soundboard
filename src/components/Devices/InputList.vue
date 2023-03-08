<script setup>
import { onMounted } from 'vue';
import { reactive } from 'vue';
import { useInputListStore } from '@/stores/InputListStore.js';

const inputListStore = useInputListStore();
const inputs = inputListStore.inputsRaw;

console.log(inputs);
</script>
<template>
    <ul v-if="inputs">
        <li v-for="input in inputs" :key="input.id">
            <p>
                {{  input.name }}
            </p>
            <p>
                {{ input.manufacturer }} {{ input.model}}
            </p>
        </li>
    </ul>
</template>
