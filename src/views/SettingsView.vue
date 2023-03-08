
import DeviceList from '../components/Devices/DeviceList.vue';

<script setup>
import InputDropdown from '@/components/Devices/InputDropdown.vue';
import { useInputListStore } from '@/stores/inputListStore.js';
import PrimaryTitle from '@/components/Global/atoms/PrimaryTitle.vue';

const inputListStore = useInputListStore();

const inputs = inputListStore.getInputs;
let selectedDevice = inputListStore.getSelectedDevice;

const updateSelectedInput = (event) => {
    console.log(event);
    inputListStore.setCurrentInput(event.device);
    selectedDevice = device;
};

</script>

<template>
    <p v-if="!inputs.length">
        No devices were found.
    </p>

    <PrimaryTitle class="pb-4">
        Managing Device: {{ inputListStore.getDeviceName }}
    </PrimaryTitle>

    <InputDropdown @inputSelected="updateSelectedInput" :inputs="inputs" />
</template>
 