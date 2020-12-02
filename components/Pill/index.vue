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
  border-radius: 16px;
  font-size: 0.9rem;
}
</style>
