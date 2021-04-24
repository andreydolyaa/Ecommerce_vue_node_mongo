import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart,faThumbsUp,faThumbsDown,faTrashAlt,faStar,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faShoppingCart,faThumbsDown,faThumbsUp,faTrashAlt,faStar,faSignOutAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
