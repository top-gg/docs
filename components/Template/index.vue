<script>
export default {
  name: 'Template',
  props: {},
  methods: {
    replaceAllTokenStrings(node) {
      if (node.text) {
        node.text = node.text.replace(/{{\s*token\s*}}/g, this.valueText)
      }
      if (node.children) {
        for (const child of node.children) {
          this.replaceAllTokenStrings(child)
        }
      }
    },
  },
  computed: {
    value() {
      return localStorage.getItem('token')
    },
    notDefined() {
      return this.value === undefined
    },
    valueText() {
      return this.value || this.errMessage
    },
    errMessage() {
      return `your-bot-token-here`
    },
  },
  render(h) {
    const [root] = this.$slots.default
    this.replaceAllTokenStrings(root)
    return this.$slots.default
  },
}
</script>

<style lang="stylus">
.const {
  &--not-defined {
    cursor: help;
  }
}
</style>
