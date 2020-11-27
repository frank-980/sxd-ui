
<script>
import tb from './tab-bar.vue'
export default {
name: 'tn',
  props:{
    tabClick: Function,
    panes: Array,
  },
  data() {
    return {
      currentName: this.value,
    };
  },
  methods:{
      
  },
  computed:{

  },
  render(h){
    let {
      panes,
      tabClick,
      currentName
    } = this
    if(panes.length==0) return
   
    const tabs = this._l(panes,(pane,index)=>{
        let active = pane.active
        let tabName = pane.name
        let tabContentName = pane.label      
        return (
          <div 
            class={{'pane-item':true,'active':active}}
            id={'pane-' + index}
            ref="tabs"
            on-click={(ev)=>tabClick(pane,tabName,ev)}
          >
            {tabContentName}
          </div>
        )
    })
    return (
      <div class='nav-header'>
        <div class='nav-wrap'>
          
          {tabs}
          
        </div>
        <div style='clear:both'/>
      </div>
    )
  }
}
</script>  
<style scoped>
  /*.nav-header{
    position: relative;
  }
  .nav-wrap:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #e4e7ed;
    z-index: 1;
  }
  .active-bar{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #7763e9;
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
    list-style: none;
    z-index:2
  }*/
/* default */  
  .sxd-tabs .pane-item:first-child{
    padding-left:0px;
  }
  .sxd-tabs .pane-item:last-child{
    padding-right:0px;
  }
  .sxd-tabs .pane-item{
    padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    cursor: pointer;
    transition:all .3s cubic-bezier(.645,.045,.355,1);
    transition:border .01s;
  }
  .sxd-tabs .pane-item:hover{
    color:#7763e9
  }
  .sxd-tabs .pane-item.active{
    color: #7763e9;
    border-bottom:2px solid #7763e9;
    z-index:2;
    transition:all .3s cubic-bezier(.645,.045,.355,1);
    transition:border .01s;
  }

/* card */
.card .nav-wrap{
  border:1px solid #e4e7ed;
  border-bottom: none;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box;
    float:left
}
  .card .pane-item:first-child{
    padding-left:20px;
  }
  .card .pane-item:last-child{
    padding-right:20px;
  }
  .card .pane-item{
    padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #303133;
    position: relative;
    cursor: pointer;
    border-right:1px solid #e4e7ed;
    border-bottom:1px solid #e4e7ed;
  }
  .card .pane-item.active{
    color: #7763e9;
    border-bottom: 1px solid transparent;
    z-index:2
  }
/* border-card */

  .border-card .pane-item:first-child{
    padding-left:20px;
  }
  .border-card .pane-item:last-child{ 
    padding-right:20px;
  }
  .border-card .pane-item{
    color: #909399;
  }
  .border-card .pane-item.active{
    border-bottom: none;
    background-color: #fff;
    border-right-color: #dcdfe6;
    border-left-color: #dcdfe6;
  }
</style>