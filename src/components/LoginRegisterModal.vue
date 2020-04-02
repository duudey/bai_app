<template>
    <div>
        <b-button v-b-modal.loginRegisterModal>{{modalTitle}}</b-button>
        <b-modal id="loginRegisterModal" title="Logowanie / Rejestracja" centered hide-footer>
            <b-form-group v-if="signUp"
                          id="registerEmailGroup"
                          label="Wprowadź e-mail"
                          label-for="registerEmailInput">
                <b-form-input type="email" id="registerEmailInput" v-model="registerEmail" trim></b-form-input>
            </b-form-group>
            <b-form-group v-if="signUp"
                          id="registerPasswordGroup"
                          label="Wprowadź hasło"
                          label-for="registerPasswordInput">
                <b-form-input type="password" id="registerPasswordInput" v-model="registerPassword" trim></b-form-input>
            </b-form-group>
            <b-button v-b-modal.modal-1 block @click="loginOrRegister" class="loginButton">OK</b-button>

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
                registerEmail: "",
                registerPassword: "",
                registerUsername: "",
                loginEmail: "",
                loginPassword: "",
                signUp: true
            };
        },
        computed: {
            modalTitle: function () {
                return this.signUp ? "Zarejestruj się" : "Zaloguj się";
            }
        },
        methods: {
            getUserNameFromEmail: function (email) {
                return email.split("@")[0];
            },
            loginOrRegister: function () {
                this.signUp ? this.register(this.registerEmail, this.registerPassword, this.getUserNameFromEmail(this.registerEmail)) : this.login(this.loginEmail, this.loginPassword);
                this.$root.$emit('bv::hide::modal', 'loginRegisterModal');
            },
            register: function (email, password, username) {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .catch(function (error) {
                        alert(error.message);
                    });

                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        user
                            .updateProfile({
                                displayName: username
                            })
                            .then(() => {
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                });
                firebase.auth().signOut();
            },
            login: function (email, password) {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .catch(function (error) {
                        alert(error.message);
                    });
            },
            loginWithGoogle: function () {
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then()
                    .catch(function (err) {
                        console.log(err);
                    });
                this.$root.$emit('bv::hide::modal', 'loginRegisterModal');
            }
        },
    };

</script>
<style>
    .loginButton {
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>