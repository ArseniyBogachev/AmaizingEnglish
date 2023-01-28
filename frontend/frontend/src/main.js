import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const app = createApp(App)

router.app = app

app
    .use(store)
    .use(router)
    .mount('#app')
