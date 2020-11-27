<template>
    <div class='active-bar' :style='barStyle'></div>
</template>
<script>
export default {
    name:"tb",
    props: {
      tabs: Array,
    },
    mounted(){
        console.log(this.$parent)
        //console.log(window.getComputedStyle(this.$parent.$refs.tabs))
    },
    watch:{
        tabs(o,n){
            console.log(this.$parent.$refs)
        }
    },
    computed: {
        barStyle:{
            get(){
                if(!this.$parent.$refs) return
                let style = {};
                let panes = this.tabs
                let activeIndex = panes.findIndex((pane)=>pane.active)
                let el = document.getElementById('pane-' + activeIndex);
                /*style.width="56px"
                style.transform="translateX(0px)"*/
                return style
            }
        }
    }
}
</script>
<style scoped>

</style>