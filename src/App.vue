<template>
  <div class="wrapper">
    <div class="nav">
      <router-link to="/pokemon">Pokemon</router-link>
      <router-link to="/moves">Moves</router-link>
      <router-link to="/abilities">Abilities</router-link>
      <router-link to="/locations">Locations</router-link>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.wrapper {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 18px;
  color: #eee;
  padding: 10px;
  display: flex;
  flex-direction: column;
  // align-items: center;
}

.container {
  min-width: 1440px;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;

  a {
    color: #eee;
    text-decoration: none;
    font-size: 22px;
    font-weight: 600;

    &:hover {
      color: #fff;
      text-decoration: underline;
    }
  }

  .router-link-active {
    text-decoration: underline;
  }
}
</style>
