const storedCart = localStorage.getItem('cartItems');
const cartLength = localStorage.getItem('cartItemsLength');

function saveToStorage(storageNameItem, storageNameCount, item, count) {
    localStorage.setItem(storageNameItem, JSON.stringify(item));
    localStorage.setItem(storageNameCount, JSON.stringify(count));
}

export default {
    state: {
        cart: storedCart ? JSON.parse(storedCart) : [],
        numOfCartItems: cartLength > 0 ? JSON.parse(cartLength) : 0,
    },
    getters: {
        getCart(state) {
            return state.cart;
        },
        getCartLength(state) {
            return state.numOfCartItems;
        },
        getTotalCartPrice(state){
            return state.cart.reduce((acc,val) => acc + (val.price * val.quantity),0);
        }
    },
    mutations: {
        addItemToCart(state, { item }) {
            if (state.cart.some(currItem => currItem._id === item._id)) {
                const idx = state.cart.findIndex(currItem => currItem._id === item._id);
                state.cart[idx].quantity = (state.cart[idx].quantity || 1) + 1;
                state.numOfCartItems += 1;
                saveToStorage('cartItems', 'cartItemsLength', state.cart, state.numOfCartItems);
            }
            else {
                const updatedItem = {...item};
                updatedItem.quantity = 1;
                state.cart.unshift(updatedItem);
                state.numOfCartItems += 1;
                saveToStorage('cartItems', 'cartItemsLength', state.cart, state.numOfCartItems);
            }
        },
        removeItemFromCart(state, { item }) {
            const idx = state.cart.findIndex(currItem => currItem._id === item._id);
            if (state.cart[idx].quantity > 1) {
                state.cart[idx].quantity -= 1;
                state.numOfCartItems -= 1;
                saveToStorage('cartItems', 'cartItemsLength', state.cart, state.numOfCartItems);
            }
            else {
                state.cart.splice(idx, 1);
                state.numOfCartItems -= 1;
                saveToStorage('cartItems', 'cartItemsLength', state.cart, state.numOfCartItems);
            }
        }
    },
    actions: {

    }
}