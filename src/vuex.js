import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    user: null
};

const store = new Vuex.Store({
    state,
    getters: {
        user: (state) => {
            return state.user
        }
    }, // Are forgetting the current state value
    actions: {
        user(context, user) {
            context.commit('user', user);
        }
    }, // Are for changing the value of the state but they are not changed on the action itself
    mutations: {
        user(state, user) {
            state.user = user;
        }
    } // They are changed on the mutations so we do an action, we call the mutation to change the state and we can get it via the getters
});

export default store;