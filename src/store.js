import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: '',
        userHasSession: false
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        setSession(state, hasSession) {
            state.userHasSession = hasSession;
        }
    },
    actions: {
        setUsername(context, username) {
            context.commit('setUsername', username)
        },
        setSession(context, hasSession) {
            context.commit('setSession', hasSession)
        }
    }
});