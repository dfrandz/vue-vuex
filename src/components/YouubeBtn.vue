<template>
    <a :href="href" target="_blank" class="rounded-md border text-white bg-gray-700 py-2 px-4 hover:bg-blue-700 hover:text-white">Youtube</a>
</template>

<script setup>
    const props = defineProps({
        href:String
    })
</script>