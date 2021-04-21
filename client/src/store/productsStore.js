
import { productsService } from './../services/productsService';
export default {
    state: {
        products: null,
        product: null,
        similarItems: null
    },
    getters: {
        getProducts(state) {
            return state.products;
        },
        getProduct(state) {
            return state.product;
        },
        getSimilarItems(state) {
            return state.similarItems;
        }
    },
    mutations: {
        setProducts(state, { products }) {
            state.products = products;
        },
        setProduct(state, { product }) {
            state.product = product
        },
        setSimilarItems(state, { productType }) {
            if (productType) {
                state.similarItems = state.products.filter(currProduct => {
                    return currProduct.type === productType;
                    // return 'furniture' === currProduct.category
                });
                localStorage.setItem('similarItems',
                    JSON.stringify(state.similarItems));
            }
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
        },

        loadSimilarItems(context, { productType }) {
            console.log(productType);
            context.commit({ type: 'setSimilarItems', productType });
        }
    }
}