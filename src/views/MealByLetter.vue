<template>
    <h1 class="bg-blue-500">Meal by letter</h1>
    <div class="flex flex-col p-8">
        <!-- <input 
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text" 
            placeholder="Search for Meals" 
        />  -->
        <div class="flex justify-center gap-1 mt-2">
            <router-link v-for="letter of letters" :to="{name: 'byLetter', params:{letter}}" :key="letter">
                {{ letter }}
            </router-link>
        </div>
        <div class="container my-12 mx-auto px-4 md:px-12">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                <Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
            </div>
        </div>
    </div>
</template>


//scripts
<script setup>
    import {onMounted, watch} from 'vue'
    import {computed} from '@vue/reactivity'
    import store from '../store'
    import { useRoute } from 'vue-router';
    import Mealitem from '../components/Mealitem.vue';

    const route = useRoute()
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    
    const meals = computed( () => store.state.mealByLetter);
    
    watch(route, () =>{
        store.dispatch('mealByLetter', route.params.letter); 
    })
    onMounted(() => {
        store.dispatch('mealByLetter', route.params.letter);
    })
</script>

//style
<style scoped>


    
</style>