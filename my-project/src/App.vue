<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png" width="100" height="auto">
    <!-- <hello></hello> -->
    <a v-link="{path:'/hello'}">hello</a>
    <p>
      Welcome to your Vue.js app!
    </p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a v-link="{path:'/router'}">its documentation</a>
      <router-view></router-view>
  </div>
</template>

<script>

  // import Hello from './components/Hello'
  // export default {
  //   components: {
  //     Hello
  //   }
  // }
</script>

<style>
  html {
    height: 100%;
  }
  
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  
  #app {
    color: #2c3e50;
    margin-top: -100px;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
  }
  
  #app a {
    color: #42b983;
    text-decoration: none;
  }
  
  .logo {
    width: 100px;
    height: 100px
  }
</style>
