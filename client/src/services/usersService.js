import axios from 'axios';


const BASE_URL = `http://localhost:3000/users`;


export const usersService = {
    login
}


async function login(data) {
    const user = await axios.post(`${BASE_URL}/login`, data);
    return _handleLogin(user.data)
}

function _handleLogin(user){
    sessionStorage.setItem('user',JSON.stringify(user));
    return user;
}

