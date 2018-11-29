<template>
  <div>
    <h1>Verification result</h1>
    <div v-if="vm.verificationResult">
      <span>{{vm.verificationResult}}</span>
    </div>
    <div v-else>
      <span>Nothing to show</span>
    </div>
    <button @click="vm.verify()">Verify</button>
  </div>
</template>

<script>
import { ACTIONS } from '@/store/actions'
export default {
  computed: {
    vm () {
      return this
    },
    verificationResult () {
      return this.$store.state.verificationResult
    }
  },
  methods: {
    verify () {
      this.$store.dispatch(ACTIONS.VERIFY_USER)
    }
  }
}
</script>

<style>
</style>
