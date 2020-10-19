<template>
<transition 
name="dialog-fade" 
@after-enter="afterEnter"
@after-leave="afterLeave">
    <div class="dialog_wrap" v-show="visible" @click.self="handleCloseDialog">
        <div :class="['dialog']" :style="'margin-top:'+top+';width:'+width">
            <div class="dialog_header" v-if="$slots.header || title">
                <slot name="header">
                    <span class="dialog_header_title">{{title}}</span>
                    <i class="dialog_close iconfont icon-close" @click="handleCloseDialog"></i>
                </slot>
            </div>
            <div class="dialog_body">
                <slot></slot>
            </div>
            <div class="dialog_footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
export default {
    name:"sxdDialog",
    props:{
        title:{
            type:String,
        },
        visible:{
        },
        width:{
            type:String
        },
        top:{
            type:String
        }
    },
    data(){
        return {

        }
    },
    methods:{
        handleCloseDialog(){
            this.$emit("update:visible",false)
        },
        afterEnter(){
            this.$emit("opened")
        },
        afterLeave(){
            this.$emit("closed")
        }
    },
    mounted(){
    },
}
</script>
<style>
.dialog-fade-enter-active , .dialog-fade-leave-active{
    transition: all .3s;
}
.dialog-fade-enter{
    transform: translateY(-50px);
    opacity: 0;
}
.dialog-fade-leave-to{
    transform: translateY(50px);
    opacity: 0;
}
.dialog_wrap{
position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index:2020;
    background: rgba(0,0,0,0.5);
}
.dialog{
    position: relative;
    z-index:2021;
    margin: 15vh auto 0px auto;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    width: 50%;
}
.dialog_header{
    padding: 20px 20px 10px;
}
.dialog_header_title{
    line-height: 24px;
    font-size: 18px;
    color: #303133;
}
.dialog_close{
    float:right;
    cursor: pointer;
}
.dialog_body{
    padding: 30px 20px;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}
.dialog_footer{
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;
}
</style>