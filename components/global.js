import Button from './Button'
import Section from './Section'
import Block from './Block'
import Example from './Example'
import CURL from './CURL'
import Message from './Message'
import Select from './Select'
import Menubar from './Menubar'
import Template from './Template'
import Blank from './Blank'
import NetworkPanel from './NetworkPanel'
import Search from './Search'
import Pill from './Pill'
import TokenInput from './TokenInput'
import HTable from './HTable'

const components = [
  Button,
  Section,
  Block,
  Example,
  CURL,
  Select,
  Menubar,
  Blank,
  NetworkPanel,
  Search,
  Template,
  Pill,
  TokenInput,
  HTable,
]

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
}

export default {
  install,
}
