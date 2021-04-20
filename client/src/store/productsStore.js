
import { productsService } from './../services/productsService';
export default {
    state: {
        products: null,
        product: null
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        getProduct(state){
            return state.product;
        }
    },
    mutations: {
        setProducts(state, { products }) {
            state.products = products;
        },
        setProduct(state, { product }) {
            state.product = product
        }
    },
    actions: {
        async loadProducts(context) {
            const products = await productsService.query();
            context.commit({ type: 'setProducts', products });
        },

        async loadProduct(context, { productId }) {
            const product = await productsService.loadProduct(productId);
            context.commit({ type: 'setProduct', product });
        }
    }
}