
<script setup>
import InputDropdown from '@/components/Devices/InputDropdown.vue';
import { useInputListStore } from '@/stores/inputListStore.js';
import PrimaryTitle from '@/components/Global/atoms/PrimaryTitle.vue';
import { ref } from 'vue';

const inputListStore = useInputListStore();

const inputs = inputListStore.inputs;
let selectedDevice = inputListStore.currentInput;

function updateSelectedInput (event) {
    inputListStore.setCurrentInput(event.target.value);
    console.log(inputListStore.currentInput);
};
</script>

<template>
    <p v-if="!inputs.length">
        No devices were found.
    </p>

    <PrimaryTitle class="pb-4">
        Managing Device: {{ inputListStore.currentInput }}
    </PrimaryTitle>

    <InputDropdown @inputSelected="$event => updateSelectedInput($event)" :inputs="inputs" />
</template>
 