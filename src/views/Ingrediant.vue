<template>
    
    <h1 class="bg-blue-500">Meal By Ingrediant</h1>
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <!-- Column -->
            <!-- <Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/> -->
            <!-- END Column -->
        </div>
    </div>
    
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="max-w-sm py-1 px-2 bg-white shadow-lg rounded-lg my-10 m-2" v-for="ingredient of angredients" :key="ingredient.idIngredient">
                <div>
                    <h2 class="text-gray-800 text-3xl font-semibold">{{ ingredient.strIngredient }}</h2>
                    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis eius ipsum distinctio dolore eaque ducimus unde necessitatibus! Repellendus</p>
                </div>
                <div class="flex justify-end mt-4">
                    <router-link :to="{name: 'mealIngredient', params:{ingredient: ingredient.strIngredient}}" class="rounded-md border text-white bg-gray-700 py-2 px-4 hover:bg-blue-700 hover:text-white">
                        View Meals
                    </router-link>
                </div>
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

    const route = useRoute()
    const angredients = computed( () => store.state.mealByIngredient);
    console.log(angredients['value'].length)
    



    methods:{
        watch(route, () =>{
        store.dispatch('mealByIngredient', route.params.ingredient); 
        })
        onMounted(() => {
            store.dispatch('mealByIngredient', route.params.ingredient);
        })  
    }
    
</script>

//style
<style scoped>

</style>