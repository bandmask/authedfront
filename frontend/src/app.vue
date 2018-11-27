<template>
  <div id="app">
    <router-view class="component-content"/>
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'
export default {
  mounted () {
    this.$store.dispatch(ACTIONS.INIT)
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .component-content {
      padding: 20px 0px;
      width: 500px;
      margin: 100px auto;
      border: 1px solid lightgray;
      border-radius: 3px;
    }

    h1,
    h2,
    h3 {
      display: inline-block;
      margin: 10px 0px;
    }

    h3 {
      font-style: italic;
      margin-bottom: 0px;
    }

    p {
      margin: 5px 0px;
    }
  }
}
</style>
