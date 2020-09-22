<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Button 按钮</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">常用的操作按钮</p>
<!--基础用法-->
    <Block-code title="基础用法" :code="code1" height="1000px">
      <template slot="source">
        <sxd-button class="demo-button" @click="open1" type="primary">默认</sxd-button>
        <sxd-button class="demo-button" @click="open2" type="primary">成功</sxd-button>
        <sxd-button class="demo-button" @click="open3" type="primary">警告</sxd-button>
        <sxd-button class="demo-button" @click="open4" type="primary">错误</sxd-button>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          用来显示「成功、警告、消息、错误」类的操作反馈
        </p>
      </template>
    </Block-code>
    
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Button Attributes</p>
    <sxd-tablepro :columns="columns" :data="data">
    </sxd-tablepro>
  </div>
</template>

<script>
export default {
  data () {
    return {
        data:[
            {
                arguments: 'msg',
                brief: "消息文字",
                type: 'string',
                options: '—',
                default:"—"
            },
            {
                arguments: 'type',
                brief: "主题",
                type: 'string',
                options: 'default / success / warning / error',
                default:"default"
            },
            {
                arguments: 'duration',
                brief: "显示时间, 毫秒。设为 0 则不会自动关闭",
                type: 'number',
                options: '—',
                default:"3000"
            },
        ],
        columns: [
            {
                title: '参数',
                key: 'arguments'
            },
            {
                title: '说明',
                key: 'brief'
            },
            {
                title: '类型',
                key: 'type'
            },
            {
                title: '可选值',
                key: 'options',
                
            },
            {
                title: '默认值',
                key: 'default',
            }
        ],
       code1:{
           html:`
    <sxd-button class="demo-button" @click="open1" type="primary">默认</sxd-button>
    <sxd-button class="demo-button" @click="open2" type="primary">成功</sxd-button>
    <sxd-button class="demo-button" @click="open3" type="primary">警告</sxd-button>
    <sxd-button class="demo-button" @click="open4" type="primary">错误</sxd-button>
           `,
           javascript:`
    export default {
        methods: {
            open1(){
                this.$message({
                    msg:"默认消息",
                    type:"default"
                })
            },
            open2(){
                this.$message({
                    msg:"成功消息",
                    type:"success"
                })
            },
            open3(){
                this.$message({
                    msg:"警告消息",
                    type:"warning"
                })
            },
            open4(){
                this.$message({
                    msg:"错误消息",
                    type:"error"
                })
            },
        }
    }
            `
       }
    }
  },
    methods: {
        open1(){
            this.$message({
                msg:"默认消息",
                type:"default"
            })
        },
        open2(){
            this.$message({
                msg:"成功消息",
                type:"success"
            })
        },
        open3(){
            this.$message({
                msg:"警告消息",
                type:"warning"
            })
        },
        open4(){
            this.$message({
                msg:"错误消息",
                type:"error"
            })
        },
    }
}
</script>

<style scoped>
  .demo-button{
    margin-left:15px;
  }
</style>
