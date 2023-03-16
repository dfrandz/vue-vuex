<template>
    <h1 class="bg-blue-500">M</h1>
    <div class="container my-12 mx-auto px-4 md:px-12" v-if="meals">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
        </div>
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12" v-else>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            No data
        </div>
    </div>

</template>

<script setup>
    import {onMounted, watch} from 'vue'
    import {computed} from '@vue/reactivity'
    import store from '../store'
    import { useRoute } from 'vue-router';
    import Mealitem from '../components/Mealitem.vue';
    const route = useRoute()
    
    const meals = computed( () => store.state.mealIngredient);
    
    onMounted(() => {
        store.dispatch('mealIngredient', route.params.ingredient);
    })
</script>

<style scoped>

</style>