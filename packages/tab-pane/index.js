import tabPane from './src/tabPane'
tabPane.install = Vue=>{
    Vue.component(tabPane.name,tabPane)
}
export default tabPane