import dialog from './src/main'
dialog.install = Vue => {
    Vue.component(dialog.name, dialog)
}
export default dialog