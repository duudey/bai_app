<template>
    <div id="app">
        <Menu/>
        <Home/>
    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Menu from './components/Menu.vue';
    import * as firebase from "firebase/app";
    import "firebase/auth";
    import "firebase/firestore";
    import firebaseConfig from "./firebaseConfig";
    import Vue from 'vue'
    import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';

    export default {
        name: 'App',
        components: {
            Home, Menu
        },
        mounted() {
            Vue.use(BootstrapVue);
            Vue.use(IconsPlugin);
            firebase.initializeApp(firebaseConfig);
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 0;
        width: 100%;
        margin-top: 0;
        height: 100vh;
    }

</style>
