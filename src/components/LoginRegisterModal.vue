<template>
    <div>
        <b-button v-b-modal.loginRegisterModal>Logowanie</b-button>
        {{username}}
        {{email}}
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
                    .then(() => this.username = this.getUserNameFromEmail(this.email))
                    .catch(function (error) {
                        alert(error.message);
                    });

                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        user
                            .updateProfile({
                                displayName: this.username
                            })
                            .then(() => {
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                });
                firebase.auth().signOut();
                this.$root.$emit('bv::hide::modal', 'loginRegisterModal');
            },
            login: function () {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password)
                    .catch(function (error) {
                        alert(error.message);
                    });
                this.$root.$emit('bv::hide::modal', 'loginRegisterModal');
            },
            loginWithGoogle: function () {
                const provider = new firebase.auth.GoogleAuthProvider();
                firebase
                    .auth()
                    .signInWithPopup(provider)
                    .then((result) => {
                        this.email = result.user.email;
                        this.username = this.getUserNameFromEmail(this.email);
                    })
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