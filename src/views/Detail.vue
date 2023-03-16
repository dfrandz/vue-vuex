<template>
    <!-- <pre>
        {{ meal }}
    </pre> -->
    <h1 class="bg-blue-500">Meal details</h1>
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4" v-if="meal">
            <!-- Column -->
            <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                        <img class="block h-auto w-full" :src="meal.strMealThumb" :alt="meal.strMeal">
                    </a>
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                {{meal.strMeal}}
                            </a>
                        </h1>
                        <p class="text-grey-darker text-sm">
                            <YoutubeBtn :href="meal.strYoutube"/>
                        </p>
                    </header>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"></div>
                        
                        <p class="text-grey-darker text-sm mt-3">
                            
                        </p>
                    </div>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-2/4">
                <h1 class="text-3xl">Instruction</h1>
                <p class="text-gray-700 text-base">
                    {{ meal.strInstructions }}
                </p>
                <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fast</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#free</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food</span>
                </div>
            </div>
            <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <h1 class="text-xl mt-2">Ingrediants</h1>
                <template v-for="(el, ind) of new Array(20)">
                    <li v-if="meal[`strIngredient${ind +1}`]">
                        {{ ind +1 }} . {{ meal[`strIngredient${ind + 1}`] }}
                    </li>
                </template>
            </div>
            <div class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
                <h1 class="text-xl mt-2">Messures</h1>
                <template v-for="(el, ind) of new Array(20)">
                    <li v-if="meal[`strMeasure${ind +1}`]">
                        {{ ind +1 }} . {{ meal[`strMeasure${ind + 1}`] }}
                    </li>
                </template>
            </div>
        </div>
    </div>
</template>


//scripts
<script setup>
    import {computed,onMounted,ref} from 'vue'
    import store from '../store'
    import { useRoute } from 'vue-router';
    import YoutubeBtn from '../components/YouubeBtn.vue'

    const route = useRoute()
    const meal = computed( () => store.state.mealDetail);

    function mealDetail(){
        store.dispatch('mealDetail', route.params.id);
    }
    onMounted( ()=>{
        if(route.params.id){
            mealDetail()
        }
    })

</script>

//style
<style scoped>

</style>