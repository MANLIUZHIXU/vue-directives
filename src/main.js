/*
 * @Author: your name
 * @Date: 2020-06-29 14:44:06
 * @LastEditTime: 2020-06-30 15:43:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \personlzx\src\main.js
 */ 



 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Directives from './direvtive/regist'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Directives)
// Vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// Vue.directive("focus",{
//   inserted(el){
//     console.log(el)
//     el.focus();
//   }
// })

// Vue.directive("loc",{
//   inserted(el,binding){
//     let res = binding.arg;
//     el.style.position = 'fixed';
//     el.style[res] = binding.value + "px"
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


