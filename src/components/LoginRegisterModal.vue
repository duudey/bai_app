<template>
    <div class="loginRegisterModal">
        <b-button v-if="!this.$store.state.user.session" v-b-modal.loginRegisterModal block>Logowanie</b-button>
        <b-button v-if="this.$store.state.user.session" @click="logout" block>Wyloguj się</b-button>
        <b-modal id="loginRegisterModal" title="Logowanie / Rejestracja" centered hide-footer>
            <b-form-group
                    id="emailGroup"
                    label="Wprowadź e-mail"
                    label-for="emailGroupInput">
                <b-form-input type="email" id="emailGroupInput" v-model="email" trim></b-form-input>
            </b-form-group>
            <b-form-group
                    id="passwordGroup"
                    label="Wprowadź hasło"
                    label-for="passwordGroupInput">
                <b-form-input type="password" id="passwordGroupInput" v-model="password" trim></b-form-input>
            </b-form-group>
            <b-button v-b-modal.modal-1 block @click="login" class="loginButton">Zaloguj się</b-button>
            <b-button v-b-modal.modal-1 block @click="register" class="loginButton">Zarejestruj się</b-button>
            <hr class="line"/>

            <b-button v-b-modal.modal-1 block variant="primary" @click="loginWithGoogle" class="loginButton">Zaloguj się
                za pomocą Google
            </b-button>
        </b-modal>
    </div>
</template>

<script>
    import {BModal, BButton, VBModal, BFormGroup, BFormInput} from 'bootstrap-vue';
    import * as firebase from "firebase/app";

    export default {
        name: "LoginRegisterModal",
        components: {
            BModal, BButton, BFormGroup, BFormInput
        },
        directives: {'b-modal': VBModal},
        data: function () {
            return {
                email: "",
                password: "",
                username: ""
            };
        },
        methods: {
            getUserNameFromEmail: function (email) {
                return email.split("@")[0];
            },
            register: function () {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .catch(error => alert(error.message));
                firebase.auth().signOut();
                this.$root.$emit('bv::hide::modal', 'loginRegisterModal');
            },
            login: function () {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .then(result => this.setUserData(result))

                    .catch(error => alert(error.message));
                this.$root.$emit('bv::hide::modal', 'loginRegisterModal');
            },
            loginWithGoogle: function () {
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then(result => this.setUserData(result))
                    .catch(error => alert(error.message));
                this.$root.$emit('bv::hide::modal', 'loginRegisterModal');
            },
            logout: function () {
                firebase.auth().signOut().then(() => this.$store.dispatch('deleteUserData'));
            },
            setUserData: function (result) {
                this.$store.dispatch('setUserData', {
                    username: this.getUserNameFromEmail(result.user.email),
                    email: result.user.email,
                    session: true
                });
                const userRef = firebase.firestore().collection('users').doc(result.user.email);
                userRef.get().then(doc => {
                    if (doc.exists) {
                        const data = doc.data();
                        this.$store.dispatch('setAddress', {city: data.city, street: data.street});
                        this.$store.dispatch('setHelper', data.helper);
                    }
                }).then(() => this.$forceUpdate()).catch(error => alert(error.message));
            },
            setAddress: function () {

            }
        },
    };

</script>