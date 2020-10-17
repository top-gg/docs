import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-python'
const { defaultLocales, getDefaultLocales } = require('./helpers/locales')

const locales = Object.keys(defaultLocales)

const containerConfig = Object.keys(defaultLocales['/'].container).map(
  (item) => {
    const defaultTitle = {}

    locales.forEach((locale) => {
      defaultTitle[locale] = getDefaultLocales(locale, `container.${item}`)
    })

    return [
      'container',
      {
        type: item,
        defaultTitle,
      },
    ]
  }
)

containerConfig.push([
  'container',
  {
    type: 'details',
    before: (info) =>
      `<details class="custom-block details">${
        info ? `<summary>${info}</summary>` : ''
      }\n`,
    after: () => '</details>\n',
  },
])

module.exports = {
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/last-updated',
    ['smooth-scroll', true],
  ].concat(containerConfig),
}
