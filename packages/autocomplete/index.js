import autoComplete from './src/main'
autoComplete.install = Vue => {
  Vue.component(autoComplete.name, autoComplete)
}
export default autoComplete