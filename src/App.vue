<template>
  <div id="app">
    <div class="logo">LOGO - click me to see menu</div>
  <Menu/>
  <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Menu from './components/Menu.vue';
import $ from 'jquery';

export default {
  name: 'App',
  components: {
    Home, Menu,
  },
  mounted(){
        $('.logo').click(()=>{
            $('.menu-list').toggle('display');
              var homePage = $('.homepage');
              homePage.toggleClass('active');

            
        });
        
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  width: 100%;
  margin-top: 0;
}
* { margin: 0 !important; }
</style>
