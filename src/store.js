import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            username: '',
            email: '',
            session: false
        },
        address: {
            city: '',
            street: ''
        },
        helper: 'false',
        helpersCount: '',
        seekersCount: ''
    },
    mutations: {
        setUserData(state, user) {
            state.user = user;
        },
        setAddress(state, address) {
            state.address = address;
        },
        setHelper(state, helper) {
            state.helper = helper;
        },
        deleteUserData(state) {
            state.user = {
                username: '',
                email: '',
                session: false
            };
            state.address = {
                city: '',
                street: ''
            };
            state.helper = 'false';
        },
        setHelpersCount(state, helpersCount) {
            state.helpersCount = helpersCount;
        },
        setSeekersCount(state, seekersCount) {
            state.seekersCount = seekersCount;
        }
    },
    actions: {
        setUserData(context, user) {
            context.commit('setUserData', user)
        },
        setAddress(context, address) {
            context.commit('setAddress', address)
        },
        setHelper(context, helper) {
            context.commit('setHelper', helper);
        },
        setHelpersCount(context, helpers) {
            context.commit('setHelpersCount', helpers);
        },
        setSeekersCount(context, seekers) {
            context.commit('setSeekersCount', seekers);
        },
        deleteUserData(context) {
            context.commit('deleteUserData');
        }
    }
});