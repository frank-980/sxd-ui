<script>
    export default {
      functional:true,
        render:(h,{props,listeners,children,slots}) => {
          //const hText = `<h1>123</h1>` 
          console.log(slots().name1)
          console.log(children)
          return h(
            'div',
            {
              attrs:{
                value:props.data,
                placeholder:props.placeholder
              },
              on:{
                click:listeners.click
              }
            },
            children
          )
        }
    };
</script>