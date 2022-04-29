import {createRouter,createWebHashHistory} from "vue-router";
import Home from '../views/index.vue'
// 在vue-routr新版本中，需要使用createRouter来创建路由
export default createRouter({
    // 指定路由模式，此处用的是hash
    history:createWebHashHistory(),
    // 路由地址
    routes:[{
        path: '/',
        name: 'Home',
        component: Home
    }]
})
