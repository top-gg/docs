<template>
  <div>
    <input
      class="token-input"
      placeholder="Paste your top.gg token here"
      :value="token"
      @input="tokenChange"
    />
  </div>
</template>

<script>
export default {
  name: 'TokenInput',
  computed: {
    token() {
      return localStorage.getItem('token')
    },
  },
  methods: {
    tokenChange(event) {
      const { value } = event.target
      localStorage.setItem('token', value)
    },
  },
}
</script>

<style lang="stylus" scoped>
.token-input {
  color: #2f2f3e;
  padding: 10px 20px;
  max-width: 100%;
  width: 600px;
  margin-bottom: 1em;
}
</style>