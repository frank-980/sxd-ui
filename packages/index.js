import Vue from 'vue'
import SxdInput from './sxd-input'
import SxdInputpro from './sxd-inputpro'
import SxdButton from './sxd-button'
import SxdIcon from './sxd-icon'
import BlockCode from './block-code'
import SxdTable from './sxd-table'
import SxdTablecol from './sxd-table-col'
import SxdTablepro from './sxd-table-pro'
//import SxdSwitch from './sxd-switch'
import SxdSelect from './select'
import SxdSelectOptions from './select-options'
import SxdAutoComplete from './autocomplete'
import SxdCheckbox from './sxd-checkbox'
import SxdcheckboxGroup from './sxd-checkbox-group'
import SxdPagination from './sxd-pagination'
import SxdCard from './card'
import SxdDialog from './dialog'
import SxdRadio from './radio'
import SxdRadioButton from './radio-button'
import SxdRadioGroup from './radio-group'
import SxdProgress from './progress'
import SxdTabs from './tabs'
import SxdTabPane from './tab-pane'
import SxdSwitch from './switch'
import SxdForm from './form'
import SxdFormItem from './form-item'
import Message from './alert'
import '../public/iconfont/iconfont.css';
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
  SxdAutoComplete,
  SxdCheckbox,
  SxdcheckboxGroup,
  SxdPagination,
  SxdCard,
  SxdDialog,
  SxdRadio,
  SxdRadioButton,
  SxdRadioGroup,
  SxdProgress,
  SxdTabs,
  SxdTabPane,
  SxdSwitch,
  SxdForm,
  SxdFormItem,
  Message
]
Vue.prototype.$message = Message;
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
export {
  install,
  SxdButton,
}
export default {
  install,
  // 所有组件，必须具有 install，才能使用 Vue.use()
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
  SxdAutoComplete,
  SxdCheckbox,
  SxdcheckboxGroup,
  SxdPagination,
  SxdCard,
  SxdDialog,
  SxdRadio,
  SxdRadioButton,
  SxdRadioGroup,
  SxdProgress,
  SxdTabs,
  SxdTabPane,
  SxdSwitch,
  SxdForm,
  SxdFormItem,
}