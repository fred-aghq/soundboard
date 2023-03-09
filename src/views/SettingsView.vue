
<script setup>
import InputDropdown from '@/components/Devices/InputDropdown.vue';
import { useInputListStore } from '@/stores/inputListStore.js';
import PrimaryTitle from '@/components/Global/atoms/PrimaryTitle.vue';
import { storeToRefs } from 'pinia';

const inputListStore = useInputListStore();


const { inputs, currentInput } = storeToRefs(inputListStore);

function updateSelectedInput (event) {
    inputListStore.setCurrentInput(event.target.value);
    console.log(currentInput);
};

const refresh = () => {
    console.debug("refresh");
    inputListStore.refresh();
};
</script>

<template>
    <button class="p-4 border border-gray-500" @click="refresh">
        Refresh
    </button>
    <p v-if="!inputs.length">
        No devices were found.
    </p>

    <PrimaryTitle class="pb-4">
        Managing Device: {{ currentInput }}
    </PrimaryTitle>

    <InputDropdown @inputSelected="$event => updateSelectedInput($event)" :inputs="inputs" />

    <pre>
        {{  currentInput.id }}
    </pre>
</template>
 