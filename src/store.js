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
        seekersCount: '',
        posts: [],
        displayedPosts: [],
        categories: [
            {value: "PS", text: "Produkty spożywcze"},
            {value: "SC", text: "Środki czystości"},
            {value: "AL", text: "Alkohol"},
            {value: "TC", text: "Technologia"},
            {value: "ED", text: "Edukacja"}
        ],
        chosenCategories: ["PS", "SC", "AL", "TC", "ED"]
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
        },
        addPost(state, post) {
            state.posts.push(post);
            state.displayedPosts = state.posts;
        },
        filterByCity(state, city) {
            state.displayedPosts = state.posts.filter(post => post.city.toUpperCase().search(city.toUpperCase()) >= 0);
        },
        filterByCategories(state, categories) {
            state.displayedPosts = state.posts.filter(post => categories.includes(post.category))
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
        },
        addPost(context, post) {
            context.commit('addPost', post);
        },
        filterByCity(context, city) {
            context.commit('filterByCity', city);
        },
        filterByCategories(context, categories) {
            context.commit('filterByCategories', categories);
        }
    }
});