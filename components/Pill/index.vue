<template>
  <code class="pill">
    <slot></slot>
  </code>
</template>

<script>
export default {
  name: 'Pill',
}
</script>

<style scoped>
.pill {
  letter-spacing: 0;
  color: rgb(17, 23, 53);
  border-radius: 16px;
  font-size: 0.9rem;
  background: #eee;
}
</style>
