import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
         {
            path: "/",
            component: () => import("../view/MakeFriends.vue"),
            name: 'make-friends',
      
            
        }
    ]
})

export default router