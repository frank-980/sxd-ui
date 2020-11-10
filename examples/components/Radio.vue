<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Button 按钮</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">常用的操作按钮</p>
<!--基础用法-->
    <Block-code title="基础用法" :code="code1" height="200px">
      <template slot="source">
        <sxd-radio v-model="radio" label="普陀区">普陀区</sxd-radio>
        <sxd-radio v-model="radio" label="宝山区">宝山区</sxd-radio>
        <h3>绑定值为：{{radio}}</h3>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值
        </p>
      </template>
    </Block-code>

<!--单选框组-->
    <Block-code title="单选框组" :code="code2" height="295px">
      <template slot="source">
        <sxd-radio-group v-model="radio2">
          <sxd-radio label="普陀区">普陀区</sxd-radio>
          <sxd-radio disabled label="宝山区">宝山区</sxd-radio>
          <sxd-radio label="徐汇区">徐汇区</sxd-radio>
        </sxd-radio-group>
        <h3>绑定值为：{{radio2}}</h3>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          结合sxd-radio-group元素和子元素sxd-radio可以实现单选组，在sxd-radio-group中绑定v-model，在sxd-radio中设置好label即可，无需再给每一个sxd-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。 
        </p>
      </template>
    </Block-code>

<!--按钮样式-->
    <Block-code title="按钮样式" :code="code3" height="845px">
      <template slot="source">
        <div style="margin-bottom:20px">
          <sxd-radio-group v-model="radio3">
            <sxd-radio-button label="普陀区">普陀区</sxd-radio-button>
            <sxd-radio-button label="宝山区">宝山区</sxd-radio-button>
            <sxd-radio-button label="徐汇区">徐汇区</sxd-radio-button>
          </sxd-radio-group>
        </div>
        <div style="margin-bottom:20px">
          <sxd-radio-group v-model="radio4" size="medium">
            <sxd-radio-button label="普陀区">普陀区</sxd-radio-button>
            <sxd-radio-button label="宝山区">宝山区</sxd-radio-button>
            <sxd-radio-button label="徐汇区">徐汇区</sxd-radio-button>
          </sxd-radio-group>
        </div>
        <div style="margin-bottom:20px">
          <sxd-radio-group v-model="radio5" size="small">
            <sxd-radio-button label="普陀区">普陀区</sxd-radio-button>
            <sxd-radio-button disabled label="宝山区">宝山区</sxd-radio-button>
            <sxd-radio-button label="徐汇区">徐汇区</sxd-radio-button>
          </sxd-radio-group>
        </div>
        <div>
          <sxd-radio-group v-model="radio6" size="mini" disabled>
            <sxd-radio-button label="普陀区">普陀区</sxd-radio-button>
            <sxd-radio-button label="宝山区">宝山区</sxd-radio-button>
            <sxd-radio-button label="徐汇区">徐汇区</sxd-radio-button>
          </sxd-radio-group>
        </div>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          只需要把sxd-radio元素换成sxd-radio-button元素即可，此外，还提供了size属性
        </p>
      </template>
    </Block-code>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Radio Attributes</p>
    <sxd-tablepro :columns="columns1" :data="data1">
    </sxd-tablepro>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Radio-group Attributes</p>
    <sxd-tablepro :columns="columns1" :data="data2">
    </sxd-tablepro>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Radio-button Attributes</p>
    <sxd-tablepro :columns="columns1" :data="data3">
    </sxd-tablepro>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Radio & Radio-group Events</p>
    <sxd-tablepro :columns="columns2" :data="data4">
    </sxd-tablepro>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio:"普陀区",
      radio2:"普陀区",
      radio3:"普陀区",
      radio4:"普陀区",
      radio5:"普陀区",
      radio6:"普陀区",
       data1:[
          {
            arguments: 'value / v-model',
            brief: "绑定值",
            type: '—',
            options: '—',
            default:"—"
          },
          {
            arguments: 'label',
            brief: "Radio 的 value",
            type: '—',
            options: '—',
            default:"—"
          },
          {
            arguments: 'disabled',
            brief: "是否禁用状态",
            type: 'boolean',
            options: '—',
            default:"false"
          },
       ],
       data2:[
          {
            arguments: 'value / v-model',
            brief: "绑定值",
            type: '—',
            options: '—',
            default:"—"
          },
          {
            arguments: 'size',
            brief: "尺寸",
            type: 'string',
            options: 'medium / small / mini',
            default:"false"
          },
          {
            arguments: 'disabled',
            brief: "是否禁用状态",
            type: 'boolean',
            options: '—',
            default:"false"
          },
       ],
       data3:[
          {
            arguments: 'label',
            brief: "Radio 的 value",
            type: '—',
            options: '—',
            default:"—"
          },
          {
            arguments: 'disabled',
            brief: "是否禁用状态",
            type: 'boolean',
            options: '—',
            default:"false"
          },
       ],
       columns1: [
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
      columns2: [
          {
              title: '事件名称',
              key: 'eventName'
          },
          {
              title: '说明',
              key: 'brief'
          },
          {
              title: '回调参数',
              key: 'params'
          },
      ],
      data4:[
        {
          eventName:"change",
          brief:"绑定值变化时触发的事件",
          params:"选中的 Radio label 值"
        }
      ],
       code1:{
           html:`
    <sxd-radio v-model="radio" label="普陀区">普陀区</sxd-radio>
    <sxd-radio v-model="radio" label="宝山区">宝山区</sxd-radio>
           `
       },
       code2:{
           html:`
    <sxd-radio-group v-model="radio2">
      <sxd-radio label="普陀区">普陀区</sxd-radio>
      <sxd-radio disabled label="宝山区">宝山区</sxd-radio>
      <sxd-radio label="徐汇区">徐汇区</sxd-radio>
    </sxd-radio-group>
           `
       },
       code3:{
           html:`
    <div style="margin-bottom:20px">
      <sxd-radio-group v-model="radio3">
        <sxd-radio-button label="普陀区">普陀区</sxd-radio-button>
        <sxd-radio-button label="宝山区">宝山区</sxd-radio-button>
        <sxd-radio-button label="徐汇区">徐汇区</sxd-radio-button>
      </sxd-radio-group>
    </div>
    <div style="margin-bottom:20px">
      <sxd-radio-group v-model="radio4" size="medium">
        <sxd-radio-button label="普陀区">普陀区</sxd-radio-button>
        <sxd-radio-button label="宝山区">宝山区</sxd-radio-button>
        <sxd-radio-button label="徐汇区">徐汇区</sxd-radio-button>
      </sxd-radio-group>
    </div>
    <div style="margin-bottom:20px">
      <sxd-radio-group v-model="radio5" size="small">
        <sxd-radio-button label="普陀区">普陀区</sxd-radio-button>
        <sxd-radio-button disabled label="宝山区">宝山区</sxd-radio-button>
        <sxd-radio-button label="徐汇区">徐汇区</sxd-radio-button>
      </sxd-radio-group>
    </div>
    <div style="margin-bottom:20px">
      <sxd-radio-group v-model="radio6" size="mini" disabled>
        <sxd-radio-button label="普陀区">普陀区</sxd-radio-button>
        <sxd-radio-button label="宝山区">宝山区</sxd-radio-button>
        <sxd-radio-button label="徐汇区">徐汇区</sxd-radio-button>
      </sxd-radio-group>
    </div>
           `
       }, 
    }
  },
}
</script>

<style scoped>
  .demo-button{
    margin-left:15px;
  }
</style>
