<template>
  <div id="app">
    <top-header></top-header>
    <router-view  class="uk-container"/>
  </div>
</template>

<script>
import 'uikit'

import TopHeader from "./components/top-header";
export default {
  components: { "top-header": TopHeader },
};
</script>

<style lang="scss">
@import '../node_modules/uikit/dist/css/uikit.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  list-style: none;
  justify-content: center;

  h4 {
    margin: 0;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
