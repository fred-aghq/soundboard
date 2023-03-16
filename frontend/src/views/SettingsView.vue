
<script setup>
import InputDropdown from '@/components/Devices/molecules/InputDropdown.vue';
import { useInputListStore } from '@/stores/inputListStore.js';
import PrimaryTitle from '@/components/Global/atoms/PrimaryTitle.vue';
import { storeToRefs } from 'pinia';
import ActivityLight from '@/components/Devices/atoms/ActivityLight.vue';

const inputListStore = useInputListStore();


const { currentInput, inputCount } = storeToRefs(inputListStore);
</script>

<template>
    <p v-if="!inputCount">
        No devices were found.
    </p>

    <div v-else>
        <PrimaryTitle class="pb-4">
            Managing Device: <span class="text-sm">{{ currentInput.name }}</span>
        </PrimaryTitle>

        <p>
            <InputDropdown />
        </p>

        <p>
            MIDI activity: <ActivityLight class="h-36 w-24 border border-2 border-gray-400"/>
        </p>
    </div>
</template>
