import selectOptions from './src/main'
selectOptions.install = Vue => {
  Vue.component(selectOptions.name, selectOptions)
}
export default selectOptions