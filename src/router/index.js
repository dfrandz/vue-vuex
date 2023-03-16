import { createRouter, createWebHistory } from 'vue-router';
import Main from '../components/Main.vue'
import HomeView from '../views/Home.vue'
import MealName from '../views/MealByName.vue'
import MealLetter from '../views/MealByLetter.vue'
import MealIngrediant from '../views/Ingrediant.vue'
import MealSerch from '../views/Search.vue'
import LoginPage from '../components/LoginPage.vue'
import MealDetails from '../views/Detail.vue'
import MealByIngredient from '../views/MealByIngredient.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      component: Main,
      children :[
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: MealName
        },
        {
          path: '/by-letter/:letter?',
          name: 'byLetter',
          component: MealLetter
        },
        {
          path: '/by-ingredients',
          name: 'byIngredient',
          component: MealIngrediant
        },
        {
          path: '/meal-ingredient/:ingredient?',
          name: 'mealIngredient',
          component: MealByIngredient
        },
        {
          path: '/by-serch',
          name: 'bySerch',
          component: MealSerch,
        },
        {
          path: '/details/:id',
          name: 'details',
          component: MealDetails,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }




    
  ]
})

export default router
