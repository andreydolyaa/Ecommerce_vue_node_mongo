
import { productsService } from './../services/productsService';
export default {
    state: {
        products: null,
    },
    getters: {
        getProducts(state) {
            return state.products;
        }
    },
    mutations: {
        setProducts(state, { products }) {
            state.products = products;
        }
    },
    actions: {
        async loadProducts(context) {
            const products = await productsService.query();
            context.commit({ type: 'setProducts', products });
        }
    }
}