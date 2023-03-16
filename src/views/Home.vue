<template>
    <Slider/>
    <hr>
    <!-- <div class="flex flex-col p-8">
        <input 
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text" 
            placeholder="Search for Meals" 
        /> 
        
        <div class="flex justify-center gap-1 mt-2">
            <router-link v-for="letter of letters" :to="{name: 'byLetter', params:{letter}}" key="letter">
                {{ letter }}
            </router-link>
        </div>
    </div> -->

    <Cards/>
</template>


//scripts
<script setup>
    //les imports
    import Slider from '../components/slider.vue';
    import Cards from '../components/cards.vue';
    import { computed,onMounted, ref } from 'vue';
    import store from '../store'
    import axiosClient from '../axiosClient.js'



    //les variables
    // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const ingrediants = ref([]);



    //les functions
    onMounted( async () => {
        const response = await axiosClient.get('list.php?i=list')
        console.log(response.data);
        ingrediants.value = response.data;

    })
</script>

//style
<style scoped>

</style>