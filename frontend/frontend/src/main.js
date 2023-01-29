import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTelegram, faTwitter, faFacebook, faGoogle, faVk } from '@fortawesome/free-brands-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const app = createApp(App)


library.add(fas, faInstagram, faTelegram, faTwitter, faFacebook, faGoogle, faVk )
router.app = app

app
    .component('fa', FontAwesomeIcon)
    .use(store)
    .use(router)
    .mount('#app')
