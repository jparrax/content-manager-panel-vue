import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home.vue"
import Where from "@/components/Where.vue"
import Measurement from "@/components/Measurement.vue"
import Contact from "@/components/Contact.vue"
import Footer from "@/components/EditFooter.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/where',
      name: 'Where are you going',
      component: Where,
    },
    {
      path: '/measurements',
      name: 'Measurements',
      component: Measurement,
    },
    {
      path: '/contactus',
      name: 'Contact Us',
      component: Contact,
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer,
    }
  ]
})

