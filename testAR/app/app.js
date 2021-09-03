import Vue from 'nativescript-vue'

import Home from './components/Home'
Vue.registerElement("AR", () => require("nativescript-ar").AR);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start()
