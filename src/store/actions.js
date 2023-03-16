import axiosClient from './../axiosClient';
export function searchMeals({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            commit('setSearchMeals', data.meals)
        })
}

export function mealDetail({commit}, id){
    axiosClient.get(`lookup.php?i=${id}`)
        .then(({data}) => {
            // debugger;
            commit('setMealDetail', data.meals[0])
        })
}


export function mealByLetter({commit}, letter){
    axiosClient.get(`search.php?f=${letter}`)
        .then(({data}) => {
            // debugger;
            commit('setMealByLetter', data.meals)
        })
} 

export function mealByIngredient({commit},ingredient){
    axiosClient.get(`list.php?i=${ingredient}`)
        .then(({data}) => {
            // debugger;
            commit('setMealByIngredient', data.meals)
        })
}

export function mealIngredient({commit},ingredient){
    axiosClient.get(`filter.php?i=${ingredient}`)
        .then(({data}) => {
            // debugger;
            commit('setMealIngredient', data.meals)
        })
}