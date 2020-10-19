<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Card 卡片</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">将信息聚合在卡片容器中展示。</p>
<!--基础用法-->
    <Block-code title="基础用法" :code="code1" height="336px">
      <template slot="source">
        <sxd-card pl="abc" klass="abc">
            <div slot="header">
                <span>header(可选)</span>
            </div>
            <p>列表内容1</p>
            <p>列表内容1</p>
            <p>列表内容1</p>
        </sxd-card>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的。
        </p>
      </template>
    </Block-code>
<!--卡片阴影-->
<Block-code title="卡片阴影" :code="code2" height="360px">
    <template slot="source">
    <sxd-card class="card-demo" shadow="always">
        <p>总是显示(默认)</p>
    </sxd-card>
    <sxd-card class="card-demo" shadow="hover">
        <p>鼠标悬停显示</p>
    </sxd-card>
    <sxd-card class="card-demo" shadow="never">
        <p>从不显示</p>
    </sxd-card>
    <div style="clear:both"></div>
    </template>
    <template slot="description">
    <p style="font-size: 14px;color: #5e6d82">
        通过shadow属性设置卡片阴影出现的时机：always、hover或never。
    </p>
    </template>
</Block-code>
<!--带图片-->
<Block-code title="带图片" :code="code3" height="340px">
    <template slot="source">
    <sxd-card class="card-picture" :bodyStyle="{padding:'0px'}">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"/>
        <div style="padding:20px;">
            <p>好吃的汉堡</p>
            <p>"2020-10-14T09:56:21.408Z</p>
        </div>
    </sxd-card>
    </template>
    <template slot="description">
    <p style="font-size: 14px;color: #5e6d82">
        通过shadow属性设置卡片阴影出现的时机：always、hover或never。
    </p>
    </template>
</Block-code>
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Input Attributes</p>
    <sxd-tablepro :columns="columns" :data="data">
      <template v-slot:name="{row}">
        {{row.name}}
      </template>
      <!--接收从（名字叫action）插槽里返回的数据-->
      <template v-slot:action="{row}">
        <sxd-button type="primary" @click="slot(row)">button slot</sxd-button>
      </template>
      
      <template v-slot:actiontwo="{index}">
        <sxd-button type="primary" @click="slot(index)">button2 slot</sxd-button>
      </template>
    </sxd-tablepro>
  </div>
</template>

<script>
export default {
  data () {
    return {
       inputVal:"",
       is_loading:true,
       data:[
          {
            arguments: 'header',
            brief: "通过 slot#header 传入 DOM",
            type: '—',
            options: '—',
            default:"—"
          },
          {
            arguments: 'body-style',
            brief: "设置 body 的样式",
            type: 'object',
            options: '—',
            default:"{ padding: '20px' }"
          },
          {
            arguments: 'shadow',
            brief: "设置阴影显示时机",
            type: 'string',
            options: 'always / hover / never',
            default:"always"
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
    <sxd-card>
        <div slot="header">
            <span>header(可选)</span>
        </div>
        <p>列表内容1</p>
        <p>列表内容1</p>
        <p>列表内容1</p>
    </sxd-card>
           `,
           javascript:``
       },
       code2:{
           html:`
    <sxd-card class="card-demo" shadow="always">
        <p>总是显示(默认)</p>
    </sxd-card>
    <sxd-card class="card-demo" shadow="hover">
        <p>鼠标悬停显示</p>
    </sxd-card>
    <sxd-card class="card-demo" shadow="never">
        <p>从不显示</p>
    </sxd-card>
           `,
           javascript:``
       },
       code3:{
           html:`
    <sxd-card class="card-picture" :bodyStyle="{padding:'0px'}">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
        <div style="padding:20px;">
            <p>好吃的汉堡</p>
            <p>"2020-10-14T09:56:21.408Z</p>
        </div>
    </sxd-card>
           `,
           javascript:``
       },
       
    }
  },
}
</script>

<style scoped>
.card-demo{
    width:30%;
    float: left;
    margin:0 1%;
}
.card-picture{
    width:30%
}
.card-picture img{
    width:100%;
}
</style>
