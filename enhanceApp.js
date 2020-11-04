import globalComponents from './components/global'
import Prism from 'prismjs'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-python'

export default ({ Vue }) => {
  // console.log(Prism)
  // register components.
  Vue.use(globalComponents)
  Vue.prototype.$prism = Prism
}
