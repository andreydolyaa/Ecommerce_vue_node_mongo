import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import product from '../components/products-app.cmp.vue'
import productDetails from '../components/product-details.cmp.vue';
import login from '../components/login.cmp.vue';
import adminPanel from '../views/admin-area.vue';
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/admin',
        name: 'admin',
        component: adminPanel
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
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
});

router.beforeEach((to, from, next) => {
    const user = store.getters.getUser;
    if (to.path === '/admin' && !user) next({ path: '/' });
    else next();
});

export default router;
