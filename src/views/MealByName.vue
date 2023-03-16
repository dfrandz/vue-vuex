<template>
    <div class="p-6 flex justify-center">
        <input 
            v-model="keyword"
            class="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text" 
            placeholder="Search for Meals"
            @change="searchMeals"
        />
    </div>
    <div>
        
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <!-- Column -->
            <Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
            <!-- END Column -->
        </div>
    </div>
</template>

<script setup>
    //les imports
    import { computed,onMounted, ref ,watch} from 'vue';
    import store from '../store'
    import { useRoute } from 'vue-router';
    import Mealitem from '../components/Mealitem.vue';


    //varable
    const keyword = ref('');
    const route = useRoute()
    const meals = computed( () => store.state.searchMeals);

    //access au donnees
    function searchMeals(){
        store.dispatch('searchMeals', keyword.value);
    }
    onMounted(() => {
        keyword.value = route.params.name;
        if(keyword.value){
            searchMeals()
        }
    })
</script>

<style scoped>

</style>