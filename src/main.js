import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import about from './components/about.vue'
import books from './components/books.vue'
import contact from './components/contact.vue'
import declarativeRendering from './components/declarativeRendering.vue'
import vbindTitle from './components/vbindTitle.vue'
import ConditionalsandLoops from './components/ConditionalsandLoops.vue'
import userImput from './components/userImput.vue'
// import todoitem from './components/todoitem.vue'



Vue.config.productionTip = false


Vue.use(VueRouter)
const routes = [
  { path: '', component: about },
  { path: '/helloworld', component: HelloWorld },
  { path: '/about', component: about },
  { path: '/books', component: books },
  { path: '/contact', component: contact },
  { path: '/declarativeRendering', component: declarativeRendering },
  { path: '/vbindTitle', component: vbindTitle },
  { path: '/ConditionalsandLoops', component: ConditionalsandLoops },
  { path: '/userImput', component: userImput },
  // { path: '/todoitem', component: todoitem},
 

]
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
