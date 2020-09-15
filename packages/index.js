
import SxdInput from './sxd-input'
import SxdInputpro from './sxd-inputpro'
import SxdButton from './sxd-button'
import SxdIcon from './sxd-icon'
import BlockCode from './block-code'
import SxdTable from './sxd-table'
import SxdTablecol from './sxd-table-col'
import SxdTablepro from './sxd-table-pro'
import SxdSwitch from './sxd-switch'
import SxdSelect from './select'
import SxdSelectOptions from './select-options'
// 所有组件列表
const components = [
  SxdInput,
  SxdInputpro,
  SxdButton,
  SxdIcon,
  BlockCode,
  SxdTable,
  SxdTablepro,
  SxdTablecol,
  SxdSelect,
  SxdSelectOptions,
  SxdSwitch,
]
// 定义 install 方法，接收 Vue 作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component))
  // 下面这个写法也可以
  // components.map(component => Vue.use(component))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
  ...components
}