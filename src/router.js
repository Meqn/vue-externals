import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mandui from './components/Mandui'
import Axios from './components/Axios'
import Swiper from './components/swiper'
import Draggable from './components/vuedraggable'
import PickerDate from './components/PickerDate'
import Vchart from './components/Vchart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mandui',
      name: 'mandui',
      component: Mandui
    },
    {
      path: '/axios',
      name: 'axios',
      component: Axios
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    },
    {
      path: '/draggable',
      name: 'draggable',
      component: Draggable
    },
    {
      path: '/pickerDate',
      name: 'pickerDate',
      component: PickerDate
    },
    {
      path: '/vchart',
      name: 'vchart',
      component: Vchart
    }
  ]
})
