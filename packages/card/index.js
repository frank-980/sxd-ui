import card from './src/main'
card.install = Vue => {
    Vue.component(card.name, card)
}
export default card