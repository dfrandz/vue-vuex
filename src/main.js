import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './assets/main.css'
import './style.css'
import JwPagination from 'jw-vue-pagination';

const app = createApp(App)

app.component('jw-pagination', JwPagination);

app.use(router)
app.use(store)

app.mount('#app')
