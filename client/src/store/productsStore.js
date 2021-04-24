
import { productsService } from './../services/productsService';
const types = ['sofa', 'table', 'chair', 'lamp', 'dresser', 'carpet', 'bed', 'decoration'];
export default {
    state: {
        products: null,
        product: null,
        similarItems: null,
        loadingStatus: false,
        filter: {
            name: '',
            price: null,
            type: ''
        }
    },
    getters: {
        getProducts(state) {
            const { filter } = state;
            const { products } = state;
            if (filter.name || filter.price || filter.type) {
                return products.filter(product => product.title.toLowerCase().includes(filter.name.toLowerCase())
                    && product.price <= filter.price && filter.type === 'all' ? products : product.type === filter.type
                    && product.price <= filter.price && product.title.toLowerCase().includes(filter.name.toLowerCase()));
            }
            else return products;
        },
        getProduct(state) {
            return state.product;
        },
        getSimilarItems(state) {
            return state.similarItems;
        },
        getLoadingStatus(state) {
            return state.loadingStatus;
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
        setFilterBy(state, { filter }) {
            state.filter.name = filter.filterName;
            state.filter.price = filter.currPrice;
            state.filter.type = filter.filterType;
        },
        setLoadingStatus(state, newStatus) {
            state.loadingStatus = newStatus;
            console.log(state.loadingStatus);
        },
    },
    actions: {
        async loadProducts(context) {
            context.commit('setLoadingStatus', true);
            const products = await productsService.query()
                .then(context.commit('setLoadingStatus', false));
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