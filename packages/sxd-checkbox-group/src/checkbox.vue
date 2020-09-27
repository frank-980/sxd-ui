<script>
export default {
  functional:true,
  render:(h,{props}) => {
    return h(
      'span',
      {
        'class':{
          'checkbox-label':true,
          'disabled':props.data.disabled?true:false,
          'labelChecked':props.data.checked?true:false
        }
      },
      props.data.label
    )
  }
}
</script>

<style scoped>
.checkbox-label{
  line-height: 1;
  padding-left: 10px;
  user-select: none;
  color:#606266;
}
.labelChecked{
  color:#7763e9;
}
.disabled{
  color: #c0c4cc;
}
</style>