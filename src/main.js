import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vmodal from 'vue-js-modal'
import HelloWorld from './components/HelloWorld.vue'
import about from './components/about.vue'
import books from './components/books.vue'
import contact from './components/contact.vue'
import declarativeRendering from './components/declarativeRendering.vue'
import vbindTitle from './components/vbindTitle.vue'
import ConditionalsandLoops from './components/ConditionalsandLoops.vue'
import userImput from './components/userImput.vue'
import passingProps from './components/passProps/passingProps.vue'
import importComponent from './components/importComponent.vue'
import interpolations from './components/interpolations.vue'
import watcchAndComputed from './components/watcchAndComputed.vue'
import SpecialIsKeyword from './components/SpecialIsKeyword.vue'
// import accordion from './components/accordion.vue'
import checkboxes from './components/checkboxes.vue'
import sass from './components/sass.vue'
import mediumDotComModal from './components/medium.comModal/mediumDotComModal.vue'
import OfficialVuemodal from './components/officialVueModal/OfficialVuemodal.vue'
import slotparent from './components/slots/slotparent.vue'
import classAndStyleBindings from './components/classAndStyleBindings.vue'
import simpleCssModal from './components/simpleCssModal.vue'
import profileSearch from './components/profileSearch.vue'
import collapsable from './components/collapsable.vue'


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
  { path: '/passingProps', component: passingProps },
  { path: '/importComponent', component: importComponent },
  { path: '/interpolations', component: interpolations },
  { path: '/watcchAndComputed', component: watcchAndComputed },
  { path: '/SpecialIsKeyword', component: SpecialIsKeyword },
  // { path: '/accordion', component: accordion},
  { path: '/checkboxes', component: checkboxes },
  { path: '/sass', component: sass },
  { path: '/mediumDotComModal', component: mediumDotComModal },
  { path: '/OfficialVuemodal', component: OfficialVuemodal },
  { path: '/slotparent', component: slotparent },
  { path: '/classAndStyleBindings', component: classAndStyleBindings },
  { path: '/simpleCssModal', component: simpleCssModal },
  { path: '/profileSearch', component: profileSearch },
  { path: '/collapsable', component: collapsable },



]
const router = new VueRouter({
  routes
})
Vue.use(vmodal)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
