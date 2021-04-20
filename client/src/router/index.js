import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import product from '../components/products-app.cmp.vue'
import productDetails from '../components/product-details.cmp.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/product',
        name: 'product',
        component: product
    },
    {
        path: '/product/details/:productId',
        name: 'details',
        component: productDetails
    }

]

const router = new VueRouter({
    routes
})

export default router
