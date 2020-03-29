<template>
  <div class="homepage">
    <h1> 👋🏼 Witamy w naszej aplikacji, będziemy tutaj pracować</h1>
    <News/>
  </div>
</template>

<script>

import News from './News.vue';

export default {
  name: 'Home',
  components:{
    News,
  }
};
</script>

<style>
</style>