import axios from 'axios';


const BASE_URL = `http://localhost:3000/products`;


export const productsService = {
    query,
    loadProduct
}


async function query(){
    const products = await axios.get(BASE_URL);
    return products.data;
}

async function loadProduct(productId){
    const product = await axios.get(`${BASE_URL}/${productId}`);
    return product.data;
}
