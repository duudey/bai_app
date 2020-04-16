<template>
    <div class="addPostModal">
        <!-- Using modifiers -->
        <b-button v-b-modal.postModal>Dodaj post</b-button>
        <!-- The modal -->
        <b-modal id="postModal" title="Wypełnij pola i daj sobie pomóc 😊" @ok="onSubmit">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <label for="input-group-1" style="font-size: 10px">Użytkownik:
                    {{this.$store.state.user.username}}</label>
                <b-form-group id="input-group-1">
                    <b-container fluid>
                        <b-row id="categoryRow" class="my-1">
                            <b-col sm="2">
                                <label for="category" style="font-size: 10px">Kategoria:</label>
                            </b-col>
                            <b-col sm="10">
                                <b-form-select id="category" v-model="form.category" :options="options"></b-form-select>
                            </b-col>
                        </b-row>
                        <b-row id="productRow" class="my-3">
                            <b-col sm="2">
                                <label style="font-size: 10px">Produkty:</label>
                            </b-col>
                            <ol id="productList">
                                <li v-for="(item, index) in form.basket" class="my-1" v-bind:key="index">
                                    <b-col sm="2" class="float-right">
                                        <b-form-spinbutton id="sb-inline" size="sm" v-model="item.amount"
                                                           inline></b-form-spinbutton>
                                    </b-col>
                                    <b-col sm="8">
                                        <b-form-input size="sm" v-model="item.product"
                                                      placeholder="Produkt"></b-form-input>
                                    </b-col>
                                </li>
                            </ol>
                        </b-row>
                        <b-row v-if="productsCount < 10">
                            <b-col>
                                <a href="#" @click="addProduct()" class="d-block float-right" style="font-size: 10px;">Dodaj
                                    produkt...</a>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-form-group>
            </b-form>
        </b-modal>
    </div>
</template>

<script>
    import {
        BButton,
        BModal,
        VBModal,
        BForm,
        BFormGroup,
        BFormInput,
        BContainer,
        BCol,
        BRow,
        BFormSelect,
        BFormSpinbutton
    } from "bootstrap-vue";
    import * as firebase from "firebase/app";
    import _ from 'lodash';

    export default {
        name: "PostModal",
        props: ["username"],
        data() {
            return {
                form: {
                    category: "",
                    basket: [{product: "", amount: 0}],
                    street: "",
                    city: ""
                },
                show: true,
                selectedCat: null,
                valueSpin: 3,
                productsCount: 1,
                options: [
                    {value: null, text: "Wybierz kategorię"},
                    {value: "Produkty spożywcze", text: "Produkty spożywcze"},
                    {value: "Środki czystości", text: "Środki czystości"},
                    {value: "Alkohol", text: "Alkohol"},
                    {value: "Technologia", text: "Technologia"},
                    {value: "Edukacja", text: "Edukacja"}
                ],
            };
        },
        components: {
            BButton,
            "b-modal": BModal,
            BForm,
            BFormGroup,
            BFormInput,
            BCol,
            BRow,
            BContainer,
            BFormSelect,
            BFormSpinbutton
        },
        directives: {"b-modal": VBModal},
        methods: {
            onSubmit() {
                console.log("hello");
                if (this.form.category && this.form.basket.some(item => item.product && item.amount)) {
                    const db = firebase.firestore();
                    const need = {
                        ...this.form,
                        street: this.$store.state.address.street,
                        city: this.$store.state.address.city,
                        user: this.$store.state.user.email,
                        id: _.random(0, 999999).toString()
                    };
                    const needsRef = db.collection('needs').doc(need.id);
                    needsRef.set(need, {merge: true}).then(() => {
                        this.getPosts();
                    }).catch(error => alert(error.message));
                }
            },
            getPosts() {
                firebase.firestore().collection("needs")
                    .get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            let item = doc.data();
                            this.$store.dispatch('addPost', item);
                        });
                    })
                    .catch(function (error) {
                        console.log("Error getting documents: ", error);
                    });
            },
            onReset() {
                return 0;
            },

            addProduct() {
                this.form.basket.push({product: '', amount: 0});
            }
        }
    };
</script>

<style>
</style>