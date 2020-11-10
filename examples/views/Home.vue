<template>
  <div class="home">
    <div class="header">
      <div class="sxdTitle container">
        <h1>SXD-UI</h1>
      </div>
    </div>
    <div class="main container">
      <div class="sidebar">
        <ul class="firstUl">
          <li class="firstLi" v-for="(item1,index) in sidebar" :key="index">
            <a class="firstTit">{{item1.text}}</a>
            <div v-for="(item2,index) in item1.children" :key="index">
              <h4 class="secondTit" v-if="item2.group">{{item2.group}}</h4>
              <a 
              hidefocus="true"
              :class="{'thirdTit':active,'active':active == item2.id}"
              :href="item2.path"
              @click="active=item2.id">{{item2.text}}</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="contentbar">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  
  data(){return{
    active: 1,
    sidebar:[
      {
        text:"开发指南",
        children:[
          {
            id:1,
            text:"安装",
            path:"#/component/install",
          },
          {
            id:2,
            text:"快速上手",
            path:"#/component/usage",
          },
        ]
      },
      {
        text:"组件",
        children:[
          {
            id:3,
            group:"Basic",
            text:"input 输入框",
            path:"#/component/input",
          },
          {
            id:4,
            text:"input pro",
            path:"#/component/inputpro",
          },
          {
            id:5,
            text:"icon 图标",
            path:"#/component/icon",
          },
          {
            id:6,
            text:"button 按钮",
            path:"#/component/button",
          },
          {
            id:7,
            text:"table 表格",
            path:"#/component/table",
          },
          {
            id:8,
            text:"select 下拉",
            path:"#/component/select",
          },
          {
            id:9,
            text:"Message 消息提示",
            path:"#/component/message",
          },
          {
            id:10,
            text:"checkbox 多选框",
            path:"#/component/checkbox",
          },
          {
            id:11,
            text:"pagination 分页",
            path:"#/component/pagination",
          },
          {
            id:12,
            text:"card 卡片",
            path:"#/component/card",
          },
          {
            id:13,
            text:"dialog 对话框",
            path:"#/component/dialog",
          },
          {
            id:14,
            text:"radio 单选",
            path:"#/component/radio",
          },
          {
            id:15,
            text:"Progress 进度条",
            path:"#/component/progress",
          },
        ]
      },
    ]
  }},

}
</script>
<style scoped>
h1,h2,h3,h4{
  margin:0;
  padding:0
}
a{
    text-decoration: none;
    outline:none;
    border:none
}
a:-webkit-any-link:focus {
  outline:none !important;
    outline-offset: 0px !important;
}
a:focus {
  outline:none !important;
    outline-offset: 0px !important;
}
.container{
  width:1140px;
  margin:0 auto;
}
.header{
  width:100%;
  height:80px;
  position: fixed;
  
  z-index:99999;
  top:0;
  background: white;
}
.sxdTitle{
  height:100%;
  display: flex;
  align-items: center;
  border-bottom:1px solid #7763e9;
}
.sxdTitle h1{
  color:#7763e9;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  margin:0;
}
.main{
  display: flex;
  align-content: center;
  padding-top:80px
}
.sidebar{
  padding-top:51px;
  padding-left:8px;
  width:240px;
  position: fixed;
  top:80px;
  height: 100%;
  overflow: auto;
}
.sidebar .active, .thirdTit:hover{
  color:#7763e9 !important
}
.sidebar .firstUl{
  padding:0 0 190px 0;
  list-style-type:none;
  margin:0;
}
.sidebar .firstTit{
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  position: relative;
  transition: .15s ease-out;
  font-weight: 700;
  margin-top:15px;
}
.sidebar .secondTit{
  font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
    font-weight:normal
}
.sidebar .thirdTit{
      display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
}
.contentbar{
  width:870px;
  padding:50px 0 50px 270px;
}
</style>
