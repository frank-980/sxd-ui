<template>
<div class="sxd-button">
  <div>
    <button>{{a}}</button>
    <slot name="head"></slot>
    <slot name="body"></slot>
    <slot :color="color">{{color}}</slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'SxdSwitch', 
  props:{
    a:{
      type:String,
      default:"default",
    }
  },
  data () {
    return {
       is_focus:false,
       color:"#7763e9,#9d69ef,#ce73f2,#ec75f7"
    }
  },
  methods: {
    click () {
      this.$emit("click")
    },
  }
}
</script>

<style lang="scss" scoped>
</style>