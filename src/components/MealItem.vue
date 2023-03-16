<template>
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
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
                            <YouubeBtn :href="meal.strYoutube"/>
                        </p>
                    </header>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2"></div>
                        <p class="text-gray-700 text-base">
                            <!-- {{ meal.strInstructions }} -->
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet vero aut animi molestiae id in eius voluptatem deserunt accusamus, minima enim qui nihil doloribus amet magnam illum commodi rerum velit.
                        </p>
                        <p class="text-grey-darker text-sm mt-3">
                            <router-link :to="{name: 'details', params:{id:meal.idMeal}}" class="rounded-md border text-white bg-purple-700 py-2 px-4 hover:bg-blue-700 hover:text-white">
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
</template>

<script setup>
    import YouubeBtn from './YouubeBtn.vue'

    const {meal} = defineProps({
        meal:{
            require:true,
            type: Object
        }
    })
</script>