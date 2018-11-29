<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">home</router-link>
      <div v-if="vm.authInitiated" class="user-account">
        <span>/</span>
        <div v-if="vm.userModel.loggedIn" class="user">
          <router-link to="/verifyUser" class="verify">verify</router-link>
          <span>/</span>
          <router-link to="/signout" class="signout">signout</router-link>
        </div>
        <div v-else>
          <router-link to="/signin">signin</router-link>
          <span>/</span>
          <router-link to="/register" class="register">register</router-link>
        </div>
      </div>
    </div>
    <router-view class="component-content"/>
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'
export default {
  mounted () {
    this.$store.dispatch(ACTIONS.INIT)
  },
  computed: {
    vm () {
      return this
    },
    authInitiated () {
      return this.$store.state.authInitiated
    },
    userModel () {
      return this.$store.state.userModel
    }
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

    .nav {
      display: block;
      padding: 20px 0;

      & div {
        display: inline;
      }

      & span {
        margin: 0 4px;
      }
    }

    .component-content {
      padding: 20px 0px;
      width: 500px;
      margin: 80px auto;
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
