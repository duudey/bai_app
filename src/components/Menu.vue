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
            <!-- Component should be here, to decide how we are adding posts -->
            <b-button>Dodaj post</b-button>
        </div>
    </div>
</template>

<script>
    import LoginRegisterModal from './LoginRegisterModal.vue';
    import {BButton, BAvatar} from 'bootstrap-vue';
    import ProfileModal from "./ProfileModal";

    export default {
        name: 'Menu',
        components: {LoginRegisterModal, BButton, BAvatar, ProfileModal}
    }
</script>

<style>
    .menu {
        background-color: rgb(130, 158, 196);
        height: 100%;
        width: 200px;
        float: left;
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