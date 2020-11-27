import form from './src/form'
form.install = Vue => {
    Vue.component(form.name, form)
}
export default form