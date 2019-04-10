import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import mandMobile from 'mand-mobile'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import Draggable from 'vuedraggable'
import VCharts from 'v-charts'




// require styles
import 'mand-mobile/lib/mand-mobile.css'
import 'swiper/dist/css/swiper.css'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'


Vue.use(mandMobile)
Vue.use(VueAwesomeSwiper)
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)
Vue.component('Draggable', Draggable)
Vue.use(VCharts)
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
