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
        <pre>
            {{ meals }}
        </pre>
    </div>
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <!-- Column -->
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-for="meal of meals" :key="meal.idMeal">
                <!-- Article -->
                <article class="overflow-hidden rounded-lg shadow-lg">
                    <a href="#">
                        <img alt="Placeholder" class="block h-auto w-full" :src="meal.strMealThumb" :alt="meal.strMeal">
                    </a>
                    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg">
                            <a class="no-underline hover:underline text-black" href="#">
                                {{meal.strMeal}}
                            </a>
                        </h1>
                        <p class="text-grey-darker text-sm">
                           <a :href="meal.strYoutube" target="_blank" class="rounded-md border text-white bg-gray-700 py-2 px-4 hover:bg-blue-700 hover:text-white">Youtube</a>
                        </p>
                    </header>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"></div>
                        <p class="text-gray-700 text-base">
                            <!-- {{ meal.strInstructions }} -->
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet vero aut animi molestiae id in eius voluptatem deserunt accusamus, minima enim qui nihil doloribus amet magnam illum commodi rerum velit.
                        </p>
                        <p class="text-grey-darker text-sm mt-3">
                            <router-link :to="{name: 'details'}" class="rounded-md border text-white bg-purple-700 py-2 px-4 hover:bg-blue-700 hover:text-white">
                                Detail
                            </router-link>
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fast</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#free</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#food</span>
                    </div>
                </article>
                <!-- END Article -->
            </div>
            <!-- END Column -->
            
        </div>
    </div>
</template>

<script setup>
    //les imports
    import { computed,onMounted, ref } from 'vue';
    import store from '../store'
    import { useRoute } from 'vue-router';


    //varable
    const keyword = ref('');
    const route = useRoute()
    const meals = computed( () => store.state.searchMeals);

    //
    
    //access au donnees
    function searchMeals(){
        store.dispatch('searchMeals', keyword.value);
    }
    onMounted(() => {
        keyword.value = route.params.name;
    })
</script>

<style scoped>

</style>