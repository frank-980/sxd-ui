import Main from './main.vue'
import Vue from 'vue'
let AlertConstructor = Vue.extend(Main)
let instance
let seed = 1
let index = 2000
const Message = function(options){
    options = options || {};
    if(typeof options ==='string'){
        options={
            message:options
        }
    }
    let id='message_' + seed++;
    instance=new AlertConstructor({
        propsData: options
    })
    instance.id=id
    instance.$mount()
    document.body.appendChild(instance.$el)
    return instance
}
export default Message;
/*const install = () => {
  Object.defineProperty(Vue.prototype, '$alert', {
    get () {
      let id = 'message_' + seed++
      const alertMsg = options => {
        instance = new AlertConstructor({
          propsData: options
        })
        index++
        instance.id = id
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el)
        instance.vm.$el.style.zIndex = index
        return instance.vm
      }
      return alertMsg
    }
  })
}
export default install*/