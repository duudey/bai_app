<template>
    <div>
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col cols="3" v-for="(item, idx) in this.$store.state.displayedPosts" :key="idx" class="m-1">
                    <div v-bind:class="'box box-'+item.id" class="row align-items-center p-2">
                        <div class="col">
                            <div id="name">{{item.user.split("@")[0]}}</div>
                            <div id="category">{{categories.find(category => category.value === item.category).text}}
                            </div>
                            <div class="text-left">
                                <b>Potrzebuję:</b>
                                <div v-for="(el, idx) in item.basket" :key="idx">{{el.product}}: {{el.amount}}</div>
                            </div>
                            <div class="row pt-2">
                                <div class="col">
                                    <b-button v-b-modal="'postModal-'+item.id" class="btn btn-sm">Szczegóły</b-button>
                                    <b-modal
                                            v-bind:id="'postModal-'+item.id"
                                            v-bind:title="item.user.split('@')[0] + ' #' +item.id"
                                    >
                                        <p>Potrzebuje:</p>

                                        <div v-for="(el, idx) in item.basket"
                                             :key="idx">{{el.product}}: {{el.amount}}
                                        </div>
                                        <div class="pt-2">{{item.city}} {{item.street}}</div>
                                    </b-modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import {
        BRow,
        BContainer,
        BCol,
        BButton,
        VBModal,
        BModal
    } from "bootstrap-vue";

    export default {
        name: "Board",
        components: {
            BRow,
            BContainer,
            BCol,
            BButton,
            "b-modal": BModal
        },
        data() {
            return {
                categories: [
                    {value: "PS", text: "Produkty spożywcze"},
                    {value: "SC", text: "Środki czystości"},
                    {value: "AL", text: "Alkohol"},
                    {value: "TC", text: "Technologia"},
                    {value: "ED", text: "Edukacja"}
                ]
            }
        },
        directives: {"b-modal": VBModal}
    };
</script>

<style>
    .box {
        background-color: rgb(255, 255, 255);
        width: 100%;
        border-radius: 16px;
        height: 100%;
    }

    #name {
        font-size: 130%;
        color: black;
        font-weight: bold;
    }

    #category {
        font-style: italic;
        font-size: 12px;
    }
</style>