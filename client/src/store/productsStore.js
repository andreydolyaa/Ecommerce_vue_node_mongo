
import { productsService } from './../services/productsService';
export default {
    state: {
        products: null,
        product: null,
        similarItems: null,
        filterBy: {
            name: '',
            price: null,
            type: '',
            material: '',
            color: ''
        }
    },
    getters: {
        getProducts(state) {
            return (state.filterBy.name || state.filterBy.price || state.filterBy.type || state.filterBy.material || state.filterBy.color)
                ?
                state.products.filter(product => product.title.toLowerCase().includes(state.filterBy.name.toLowerCase())
                 || product.price <= state.filterBy.price)
                :
                state.products;
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
        },
        setUpdatedProduct(state, { newProduct }) {
            const idx = state.products.findIndex(product => {
                return product._id === newProduct._id;
            });
            state.products.splice(idx, 1, newProduct);
        },
        setFilterBy(state, { filter, pos }) {
            state.filterBy[pos] = filter;
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
            context.commit({ type: 'setSimilarItems', productType });
        },

        async updateProduct(context, { newProduct }) {
            const product = await productsService.updateProduct(newProduct._id, newProduct);
            context.commit({ type: 'setUpdatedProduct', newProduct });
            context.commit({ type: 'setProduct', product: newProduct });
        }
    }
}