<script>
export default {
  name: 'Template',
  props: {},
  computed: {
    value() {
      if (typeof window === 'undefined') {
        return this.errMessage
      }
      return window?.localStorage.getItem('token')
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
  methods: {
    replaceAllTokenStrings(node) {
      if (node.text) {
        node.text = node.text.replace(/{{\s*token\s*}}/g, this.valueText.trim())
      }
      if (node.children) {
        for (const child of node.children) {
          this.replaceAllTokenStrings(child)
        }
      }
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
