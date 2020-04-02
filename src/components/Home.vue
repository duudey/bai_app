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
.homepage{
  padding: 0;
  margin: 0;
  width: 100%;
  float: right;
  background-color: burlywood;
  transition: width 1s;
}

.active{
  width: 85%;
  transition: width 1s;
}

</style>