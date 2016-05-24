<template>
  <div class="router">
    <h1>{{ msg }}</h1>
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p>
  </div>
</template>
<script>
  import $ from 'jquery'
  // var $ =require('jq');
  export default {
    data () {
      return {
        msg: '路由测试！'
      }
    }
  }
  $("body").css({
    "background":"red"
  });
  $(document).ready(function(){
    alert("ready!");
  });
</script>
<style scoped>
  h1 {
    color: #42b983;
  }
</style>