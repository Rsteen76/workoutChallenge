<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
}
</script>

<style>
  .gap {
    margin-top: 50px;
  }
  html {
    height: 100%;
    width: auto;
  }
</style>