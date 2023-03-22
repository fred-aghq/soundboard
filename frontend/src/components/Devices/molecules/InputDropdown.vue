<script setup>

import { useInputListStore } from '@/stores/inputListStore.js';
import { storeToRefs } from 'pinia';
const inputListStore = useInputListStore();


const { inputs, inputCount } = storeToRefs(inputListStore);

function updateSelectedInput(event) {
    inputListStore.setCurrentInput(event.target.value);
};
</script>

<template>
    <select :disabled="inputCount < 1" class="border border-2 rounded-md p-1 pr-5" @change="updateSelectedInput">
        <option 
            :class="{
                'dark: bg-slate-600 light:bg-white': true,
            }"
            v-for="(input, _) in inputs" 
            :key="_" :value="input.name"
            v-if="inputCount > 0"
        >
                {{ input.name }}
        </option>
        <option v-else>
            No devices detected.
        </option>
    </select>
</template>
 