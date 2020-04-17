<template>
    <div class="profileModal">
        <b-button v-if="this.$store.state.user.session" v-b-modal.profileModal block>Profil</b-button>
        <b-modal id="profileModal" title="Profil" centered hide-footer>
            <b-form-group
                    id="emailGroup"
                    label="Adres e-mail"
                    label-for="emailGroupInput">
                <b-form-input type="email" id="emailGroupInput" v-model="email" trim></b-form-input>
            </b-form-group>
            <b-form-group
                    id="cityGroup"
                    label="Miasto"
                    label-for="cityGroupInput">
                <b-form-input type="text" id="cityGroupInput" v-model="city" trim></b-form-input>
            </b-form-group>
            <b-form-group
                    id="streetGroup"
                    label="Dzielnica / ulica"
                    label-for="streetGroupInput">
                <b-form-input type="text" id="streetGroupInput" v-model="street" trim></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-radio v-model="helper" name="helper" value="true">Pomagam!</b-form-radio>
                <b-form-radio v-model="helper" name="helper" value="false">Szukam pomocy!</b-form-radio>
            </b-form-group>
            <b-button v-b-modal.modal-1 block @click="saveChanges" class="loginButton" variant="primary">Zapisz
            </b-button>
            <b-button v-b-modal.modal-1 block @click="exitProfile" class="loginButton">Anuluj</b-button>
        </b-modal>
    </div>
</template>

<script>
    import {BModal, BButton, VBModal, BFormGroup, BFormInput, BFormRadio} from 'bootstrap-vue';
    import * as firebase from "firebase/app";

    export default {
        name: "ProfileModal",
        components: {
            BModal, BButton, BFormGroup, BFormInput, BFormRadio
        },
        directives: {'b-modal': VBModal},
        data: function () {
            return {
                email: this.$store.state.user.email,
                cityValue: '',
                streetValue: '',
                helperValue: 'false'
            };
        },
        computed: {
            city: {
                get: function () {
                    return this.$store.state.address.city;
                },
                set: function (val) {
                    this.cityValue = val;
                }
            },
            street: {
                get: function () {
                    return this.$store.state.address.street;
                },
                set: function (val) {
                    this.streetValue = val;
                }
            },
            helper: {
                get: function () {
                    return this.$store.state.helper;
                },
                set: function (val) {
                    this.helperValue = val;
                }
            }
        },
        methods: {
            saveChanges: function () {
                if ((this.cityValue || this.$store.state.address.city) && (this.streetValue || this.$store.state.address.street) && (this.helperValue || this.$store.state.helper)) {
                    const db = firebase.firestore();
                    const user = {
                        email: this.email,
                        city: this.cityValue || this.$store.state.address.city,
                        street: this.streetValue || this.$store.state.address.street,
                        helper: this.helperValue || this.$store.state.helper
                    };
                    const usersRef = db.collection('users').doc(this.email);
                    usersRef.set(user, {merge: true}).then(() => {
                        this.$store.dispatch('setAddress', {city: user.city, street: user.street});
                        this.$store.dispatch('setHelper', user.helper);
                        this.exitProfile()
                    }).catch(error => alert(error.message));
                }
            },
            exitProfile: function () {
                this.$root.$emit('bv::hide::modal', 'profileModal');
            }
        },
    };

</script>