<script setup>

import { useInputListStore } from '@/stores/inputListStore.js';
import { storeToRefs } from 'pinia';
const inputListStore = useInputListStore();


const { inputs } = storeToRefs(inputListStore);

function updateSelectedInput(event) {
    inputListStore.setCurrentInput(event.target.value);
};
</script>

<template>
    <select class="border border-2 rounded-md p-1 pr-5" @change="updateSelectedInput" v-if="inputs.length">
        <option class="dark: bg-slate-600 light:bg-white" v-for="(input, _) in inputs" :key="_" :value="input.name">
            {{ input.name }}
        </option>
    </select>
</template>
