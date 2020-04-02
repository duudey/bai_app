<template>
    <div class="menu">
        <div class="menu-list">
            <ul>
                <li>
                    <LoginRegisterModal/>
                </li>
                <li>Dodaj Post</li>
                <li>Zaloguj się</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import LoginRegisterModal from './LoginRegisterModal.vue';

    export default {
        name: 'Menu',
        components: {LoginRegisterModal}
    }
</script>

<style>
    .menu-list {
        background-color: blueviolet;
        float: left;
        height: 100vh;
        margin: 0;
        padding: 0;
        position: fixed;
        display: none;
        width: 15%;
    }

    .menu {
        width: 30px;
        float: left;
        margin: 0;
        padding: 0;
        position: fixed;
    }
</style>