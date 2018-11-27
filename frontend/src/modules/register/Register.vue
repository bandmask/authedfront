<template>
  <div class="register">
    <h1>Register</h1>
    <div class="register-form">
      <label for="username">
        <span>username:</span>
        <input id="username" v-model="vm.registerModel.userName" type="text">
      </label>
      <label for="email">
        <span>email:</span>
        <input id="email" v-model="vm.registerModel.email" type="text">
      </label>
      <label for="password">
        <span>password:</span>
        <input id="password" v-model="vm.registerModel.password" type="password">
      </label>
      <label for="passwordConfirm">
        <span>confirm password:</span>
        <input id="passwordConfirm" v-model="vm.confirmPassword" type="password">
      </label>
      <div class="buttons">
        <button @click="vm.send()" :disabled="vm.registerModel.isRegistering || !vm.isValid()" class="send">send</button>
        <button @click="vm.cancel()" class="cancel">cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'

const emailRegex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  data () {
    return {
      confirmPassword: ''
    }
  },
  computed: {
    vm () {
      return this
    },
    registerModel () {
      return this.$store.state.registerModel
    }
  },
  methods: {
    send () {
      this.registerModel.isRegistering = true
      this.$store.dispatch(ACTIONS.REGISTER, Object.assign({}, this.registerModel))
    },
    cancel () {
      this.confirmPassword = ''
      this.$store.dispatch(ACTIONS.RESET_REGISTER_MODEL, Object.assign({}, this.registerModel))
    },
    isValid () {
      return this.validateUserName() && this.validateEmail() && this.validatePassword()
    },
    validateUserName () {
      return this.registerModel.userName && this.registerModel.userName.length >= 3
    },
    validateEmail () {
      return this.registerModel.email && emailRegex.test(this.registerModel.email.toLowerCase())
    },
    validatePassword () {
      return this.registerModel.password && this.registerModel.password.length > 3 && this.registerModel.password === this.confirmPassword
    }
  }
}
</script>

<style lang="less" scoped>
.register {
  text-align: left;
  padding: 20px !important;

  .register-form {
    width: 100%;
    margin: 50px 0;

    label {
      display: block;
      width: 80%;
      margin: 0 auto 10px auto;

      span {
        display: block;
        margin-bottom: 3px;
      }

      input {
        display: block;
        width: 100%;
      }
    }

    .buttons {
      display: flex;
      width: 25%;
      margin: 20px auto 0 auto;
      justify-content: space-between;

      button {
        padding: 5px 10px;
        border-radius: 3px;
        background-color: transparent;
        border: 1px solid;
        cursor: pointer;

        &.send {
          color: #0099cc;
          border-color: #0099cc;

          &:hover {
            color: white;
            background-color: #0099cc;
          }

          &:disabled {
            pointer-events: none;
            background-color: lightgray;
          }
        }

        &.cancel {
          color: red;
          border-color: red;

          &:hover {
            color: white;
            background-color: red;
          }
        }
      }
    }
  }

  h1 {
    display: block !important;
    text-align: left !important;
  }
}
</style>
