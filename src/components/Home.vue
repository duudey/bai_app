<template>
    <div class="homepage">
        <div class="content">
            <p><b>Pomaga:</b> {{this.$store.state.helpersCount}} osoba/osoby. <b>Szuka pomocy:</b>
                {{this.$store.state.seekersCount}} osoba/osoby.</p>
            <Board/>
        </div>
        <News/>
    </div>
</template>

<script>
    import News from './News.vue';
    import Board from './Board.vue';

    export default {
        name: 'Home',
        components: {
            News, Board
        }
    };
</script>

<style>
    .homepage {
        background-color: burlywood;
        transition: width 1s;
        float: left;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: 1;
        overflow-y: auto;
    }
</style>