<script>
    export default {
      functional:true,
        render:(h,{props,listeners,children,slots,parent}) => {
          /*console.log(slots().name1)*/
          /*const style = document.createElement('style')
          style.innerHTML=`
            .selectItem{
              color:red
            }
          `
          document.body.appendChild(style)*/
            return h('li', 
              {
                'class': {
                  selectItem: true,
                  disabled:props.data.disabled?true:false
                },
                attrs:{
                  class:'selectItem',
                  value:props.data.value,
                  label:props.data.label,
                },
                style: {
                  cursor: 'pointer',
                  fontSize: '14px',
                  padding:'0 20px',
                  height:'34px',
                  lineHeight:'34px',
                  boxSizing:'border-box',
                  color:'#606266'
                },
                on:{
                  click:listeners.click
                }
              },props.data.label
            )
        }
    }
</script>
<style>
.selectItem:hover{
    background-color: #f5f7fa;
}
.disabled{
    color: #c0c4cc !important;
    cursor: not-allowed !important;
}
.disabled:hover{
    background-color: #fff !important;
}
</style>