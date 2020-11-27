import formItem from '../form/src/form-item'
formItem.install = Vue => {
    Vue.component(formItem.name, formItem)
}
export default formItem