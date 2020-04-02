<template>
<div class="menu">
  <div class="menu-list">
          <ul>
              <li>Dodaj Post</li>
              <li>Zaloguj się</li>
          </ul>
  </div>
</div>
</template>

<script>

export default {
    name: 'Menu',
}
</script>

<style>
.menu-list{
    background-color: blueviolet;
    float: left;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: fixed;
    display: none;
    width: 15%;
}

.menu{
    width: 30px;
    float: left;
    margin: 0;
    padding: 0;
    position: fixed;
}
</style>