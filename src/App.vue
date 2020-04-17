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
    import SimpleGDPR from 'simple-gdpr';
    import 'simple-gdpr/dist/simplegdpr.min.css';

    export default {
        name: 'App',
        components: {
            Home, Menu
        },
        mounted() {
            Vue.use(BootstrapVue);
            Vue.use(IconsPlugin);
            firebase.initializeApp(firebaseConfig);
            const db = firebase.firestore();
            const usersRef = db.collection("users");
            const helpersCount = usersRef.where("helper", "==", "true");
            const seekersCount = usersRef.where("helper", "==", "false");
            helpersCount.get().then(queryData => this.$store.dispatch('setHelpersCount', queryData.size));
            seekersCount.get().then(queryData => this.$store.dispatch('setSeekersCount', queryData.size));
            firebase.firestore().collection("needs")
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        let item = doc.data();
                        this.$store.dispatch('addPost', item);
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
            new SimpleGDPR({
                title: 'Polityka danych',
                message: 'Zakładając konto zgadzasz się na przechowywanie oraz udostępnianie twojego adresu e-mail, oraz ulicy / dzielnicy i miasta które możesz uzupełnić w profilu. ' +
                    'Celem usunięcia danych skontaktuj się z administracją strony: github.com/afternun',
                id: {button: 'gdprButton'}
            });

            document.getElementById('gdprButton').innerText = "Zgadzam się";

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
        height: 100%;
        display: flex;
    }

    html, body {
        height: 100%;
    }
</style>
