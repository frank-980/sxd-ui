<script>
    export default {
        inject:['formItem','Form'],
        props:{
            updateAll:Boolean,
            autoWidth:Boolean
        },
        data(){
            return {
                computedWidth: 0
            }
        },
        render(){
            let slots = this.$slots.default
            let style = {}
            let LongestItem = this.Form.getLongestItem
            if(this.autoWidth){
                if(LongestItem){
                    let marginLeft = LongestItem - this.computedWidth
                    if(marginLeft&&this.Form.labelPosition=="right"){
                        style.marginLeft=marginLeft+"px"
                    }else if(marginLeft&&this.Form.labelPosition=="left"){
                        style.marginRight=marginLeft+"px"
                    }
                }
                return (<div style={style}>{slots}</div>)
            }else{
                return (<div>{slots[0]}</div>)
            }
        },
        watch:{
            computedWidth(n,o){
                if(this.updateAll){
                    this.formItem.updateLabelWidth(n)
                    this.Form.addItemToWidthArr(n)
                }
            }
        },
        methods:{
            getLabelWidth(){
                if(this.$el){
                    let computedWidth = window.getComputedStyle(this.$el).width.replace("px","")
                    return Math.ceil(parseFloat(computedWidth));
                    
                }else{
                    return 0
                }
            },
            updateLabelWidth(action="update"){
                if(this.$el && this.autoWidth && this.$slots.default){
                    if(action=="update"){
                        this.computedWidth = this.getLabelWidth()
                    }else if(action=="remove"){

                    }
                }
                
            }
        },
        mounted() {
            this.updateLabelWidth('update');
        },
        updated() {
            this.updateLabelWidth('update');
        },
    }
</script>