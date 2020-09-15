import select from './src/main'
select.install = Vue => {
  Vue.component(select.name, select)
}
export default select