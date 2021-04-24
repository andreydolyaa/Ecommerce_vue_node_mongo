
import { usersService } from './../services/usersService';

var localLoggedInUser = null;
if (sessionStorage.user) localLoggedInUser = JSON.parse(sessionStorage.user);

export default {
    state: {
        user: localLoggedInUser
    },
    getters: {
        getUser(state) {
            return state.user;
        }
    },
    mutations: {
        setLoggedUser(state, { user }) {
            state.user = user;
        },
        setLogout(state){
            sessionStorage.clear();
            state.user = localLoggedInUser;
        }
    },
    actions: {
        async setAdminLogin(context, { loginCred }) {
            const user = await usersService.login(loginCred);
            context.commit({ type: 'setLoggedUser', user });
        }
    }
}