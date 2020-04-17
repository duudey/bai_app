<template>
    <div class="menu">
        <div class="menuItem">
            <b-avatar class="mr-3" square v-if="this.$store.state.user.session"></b-avatar>
            <span class="mr-auto" v-if="this.$store.state.user.session">{{this.$store.state.user.username}}</span>
        </div>
        <div class="menuItem" v-if="this.$store.state.user.session">
            <ProfileModal/>
        </div>
        <div class="menuItem">
            <LoginRegisterModal/>
        </div>
        <div class="line" v-if="this.$store.state.user.session"></div>
        <div class="menuItem" v-if="this.$store.state.user.session">
            <PostModal :username="this.$store.state.user.username"/>
        </div>

        <p><b>Filtrowanie</b></p>

        <div class="filter-form">
            <b-form-group
                    id="cityGroup"
                    label="Miasto"
                    label-for="cityGroupInput">
                <b-form-input type="text" id="cityGroupInput" v-model="city" @keydown="filterByCity"></b-form-input>
            </b-form-group>
            <p>Kategorie</p>
            <div class="form-check" v-for="category in this.$store.state.categories" v-bind:key="category.value">
                <input class="form-check-input" type="checkbox" :value="category.value" :id="category.value"
                       v-model="chosenCategories" @change="filterByCategories">
                <label class="form-check-label" :for="category.value">
                    {{category.text}}
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginRegisterModal from './LoginRegisterModal.vue';
    import ProfileModal from "./ProfileModal";
    import PostModal from "./PostModal";
    import {BAvatar, BFormGroup, BFormInput} from 'bootstrap-vue';

    export default {
        name: 'Menu',
        components: {LoginRegisterModal, BAvatar, ProfileModal, PostModal, BFormInput, BFormGroup},
        data() {
            return {
                chosenCategories: this.$store.state.categories.map(category => category.value),
                city: ''
            }
        },
        methods: {
            filterByCity: function () {
                this.$store.dispatch('filterByCity', this.city);
            },
            filterByCategories: function () {
                this.$store.dispatch('filterByCategories', this.chosenCategories);
            }
        }
    }
</script>

<style>


    .filter-form {
        padding: 0 5px 0 5px;
        text-align: left;
    }

    .menu {
        background-color: rgb(155, 155, 155);
        height: 100%;
        width: 200px;
        float: left;
        padding: 0 5px 0 5px;
    }

    .menuItem {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .line {
        border-bottom: solid 1px white;
        width: 80%;
        display: inline-block;
    }
</style>