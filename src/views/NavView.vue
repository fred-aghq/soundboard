<template>
    <nav class="flex justify-between items-center py-4">
        <h1 class="text-2xl font-bold">
        <router-link to="/">My App</router-link>
        </h1>
        <div>
        <router-link to="/about" class="p-4">About</router-link>
        <router-link to="/contact" class="p-4">Contact</router-link>
        </div>
    </nav>
</template>