<template>
    <div :class="['card_wrap',shadow?'shadow-'+shadow:'shadow-always']">
        <div class="card_header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="card_content" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"sxdCard",
    props:{
        shadow:{
            type:String,
        },
        bodyStyle:{

        }
    },
    data(){
        return {

        }
    }
}
</script>
<style>
.shadow-hover:hover{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.shadow-always{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.card_wrap{
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
    transition: .3s;
}
.card_header{
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
}
.card_content{
    padding: 20px;
}
</style>