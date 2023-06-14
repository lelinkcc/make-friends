import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from '@/router/index'
import "@/assets/font/roboto.css"
import "@/assets/font/sourceHanSansSc.css"
import "@/assets/font/popins.css"
Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueRouter);
new Vue({
  render: h => h(App),
    router,
}).$mount('#app')
