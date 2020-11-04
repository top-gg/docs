<template>
  <table>
    <tr v-for="rows in columns" :key="rows[0]">
      <td>
        <strong>{{ rows[0] }}</strong>
      </td>
      <td>
        {{ rows[1] }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'HTable',
  props: {
    columns: {
      default: () => [[]],
      type: Array,
    },
  },
}
</script>
