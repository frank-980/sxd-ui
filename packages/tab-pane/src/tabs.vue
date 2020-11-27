
<script>
import tn from "./tab-nav.vue"
export default {
  name: 'SxdTabs', 
  props:{
    value:{},
    type:{
      type:String,
      default:"normal"
    },
    beforeLeave: Function,
  },
  data() {
    return {
      currentName: this.value,
      panes: []
    };
  },
  updated(){
    //this.calcPanesInstances()
  },
  created(){
    
    this.$on('tab-nav-update', this.calcPanesInstances.bind(null, true));
  },
  mounted(){
    if(!this.value) this.currentName = this.$slots.default[0].componentInstance.name
    this.calcPanesInstances()
  },
  methods:{
      calcPanesInstances(isForceUpdate=false){
        if(this.$slots.default){
          const paneSlots = this.$slots.default.filter(item=>{
            return item.tag && item.componentOptions && item.componentOptions.tag == "sxd-tab-pane"
          })
          const panes =  paneSlots.map(({ componentInstance }) => componentInstance);
         
          const panesChanged = !(panes.length === this.panes.length && panes.every((pane, index) => pane === this.panes[index]));
          if (isForceUpdate || panesChanged) {
            this.panes=panes
          }
        }else if (this.panes.length !== 0) {
          this.panes = [];
        }
        
      },
      setCurrentName(value){
        const changeCurrentName = ()=>{
          this.currentName = value
          this.$emit('input',value)
        }
        if(this.beforeLeave){
          const before = this.beforeLeave(this.currentName,value)
          if(before && before.then){
            before.then(()=>{
              changeCurrentName()
            },()=>{})
          }else if(before !== false){
            changeCurrentName()
          }
        }else{
          changeCurrentName()
        }
      },
      handelClick(tabNode,tabName,ev){
        this.setCurrentName(tabName);
        this.$emit('tab-click', tabNode, event);
      }
  },
  watch:{
      currentName(value){
        this.setCurrentName(value)
      },
      value(value){
        this.setCurrentName(value)
      }
  },
  render(h){
    let {
      panes,
      handelClick,
      currentName,
      type
    } = this
    let navData = {
      props:{
        tabClick:handelClick,
        panes
      }
    }
    const header = (
      <div class="pane-header">
        <tn {...navData}></tn>
      </div>
    )
    const panes1 = (
      <div class='pane-body'>
        {this.$slots.default}
      </div>
    )
    return (
      <div class={
        {'sxd-tabs':true,
        'card':type=='card',
        'border-card':type=='border-card'}
      }>
      {[header,panes1]}
      </div>
    )
  },
  
}
</script>  
<style scoped>
.sxd-tabs.border-card{
  background: #fff;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
}
.border-card .pane-header{
  background-color: #f5f7fa;
    border-bottom: 1px solid #e4e7ed;
    margin: 0;
}
.sxd-tabs .pane-body{
  margin-top:15px
}
.border-card .pane-body{
  margin:0;
  padding:15px
}
</style>