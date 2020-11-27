<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Switch 开关</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
<!--基础用法-->
    <Block-code title="基础用法" :code="code1" height="400px">
      <template slot="source">
        <sxd-switch v-model="swtich1" inactive-color="#85ce61"></sxd-switch>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色
        </p>
      </template>
    </Block-code>
<!--文字描述-->
    <Block-code title="文字描述" :code="code2" height="400px">
      <template slot="source">
        <sxd-switch v-model="swtich2" active-text="true" inactive-text="false"></sxd-switch>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          使用active-text属性与inactive-text属性来设置开关的文字描述。
        </p>
      </template>
    </Block-code>
<!--禁用状态-->
    <Block-code title="禁用状态" :code="code3" height="400px">
      <template slot="source">
        <sxd-switch v-model="swtich3" disabled></sxd-switch>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          设置disabled属性，接受一个Boolean，设置true即可禁用。
        </p>
      </template>
    </Block-code>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">switch Attributes</p>
    <sxd-tablepro :columns="columns1" :data="data1">
    </sxd-tablepro>
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">switch Events</p>
    <sxd-tablepro :columns="columns2" :data="data2">
    </sxd-tablepro>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swtich1:true,
      swtich2:true,
      swtich3:true,
       data1:[
          {
            arguments: 'value / v-model',
            brief: "绑定值，选中选项卡的 name",
            type: '	boolean',
            options: '—',
            default:"—"
          },
          {
            arguments: 'disabled',
            brief: "是否禁用",
            type: 'boolean',
            options: '—',
            default:"false"
          },
          {
            arguments: 'width',
            brief: "switch 的宽度（像素）",
            type: 'number',
            options: '—',
            default:"40"
          },
           {
            arguments: 'active-text',
            brief: "switch 打开时的文字描述",
            type: 'string',
            options: '—',
            default:"—"
          },
          {
            arguments: 'inactive-text',
            brief: "switch 关闭时的文字描述",
            type: 'string',
            options: '—',
            default:"—"
          },
          {
            arguments: 'active-color',
            brief: "switch 打开时的背景色",
            type: 'string',
            options: '—',
            default:"#7763e9"
          },
          {
            arguments: 'inactive-color',
            brief: "switch 关闭时的背景色",
            type: 'string',
            options: '—',
            default:"#dcdfe6"
          },
       ],
       data2:[
          {
            name: 'change',
            brief: "switch 状态发生变化时的回调函数",
            params: '新状态的值',
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
                title: '事件名',
                key: 'name'
            },
            {
                title: '说明',
                key: 'brief'
            },
            {
                title: '参数',
                key: 'params'
            }
        ],
       code1:{
           html:`
    <sxd-switch v-model="swtich1" inactive-color="#85ce61"></sxd-switch>
           `,
           javascript:`
    export default {
      data () {
        return {
          swtich1:true,
        }
      },
    }
        `
       },
       code2:{
           html:`
    <sxd-switch v-model="swtich2" active-text="true" inactive-text="false"></sxd-switch>
           `,
           javascript:`
    export default {
      data () {
        return {
          swtich2:true,
        }
      },
    }
        `
       },
       code3:{
           html:`
    <sxd-switch v-model="swtich1" disabled></sxd-switch>
           `,
           javascript:`
    export default {
      data () {
        return {
          swtich3:true,
        }
      },
    }
        `
       },
    }
  },
  methods:{
      handleChange(v){
          console.log(v)
      }
  }
}
</script>

<style scoped>

</style>
