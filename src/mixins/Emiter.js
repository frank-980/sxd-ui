export default {
    methods: {
        dispatch(componentName,eventName,value){
            let parent = this.$parent
            let name = parent.$options.componentName
            while(name!==componentName && parent){
                parent = parent.$parent
                if(parent){
                    name = parent.$options.componentName
                }
            }
            if(parent){
                this.$emit.apply(parent,[eventName].concat(value))
            }
        },
        broadcast(componentName,eventName,value){
            this.$children.forEach(item => {
                let name = item.$options.componentName
                if(name == componentName){
                    this.$emit.apply(item,[eventName].concat(value))
                }else{
                    this.broadcast(item,eventName,value)
                }                
            });
        }
    }
};