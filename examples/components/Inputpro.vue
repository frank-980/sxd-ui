<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Input 输入框</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">通过鼠标或键盘输入字符</p>

    <Block-code title="基础用法" :code="code1" height="400px">
      <template slot="source">
        <sxd-inputpro  v-model="inputVal"/>
        <span v-if="inputVal" style="margin-left:70px">绑定值:{{inputVal}}</span>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
            使用v-model绑定值即可
        </p>
      </template>
    </Block-code>

    <Block-code title="禁用状态" :code="code2" height="400px">
      <template slot="source">
        <sxd-inputpro disabled />
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          通过 disabled 属性指定是否禁用 input 组件
        </p>
      </template>
    </Block-code>

    <Block-code title="可清空" :code="code3" height="400px">
      <template slot="source">
        <sxd-inputpro clearable />
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          使用clearable属性即可得到一个可清空的输入框
        </p>
      </template>
    </Block-code>

    <Block-code title="带 icon 的输入框" :code="code4" height="400px">
      <template slot="source">
        <sxd-inputpro style="margin-right: 15px;" suffixIcon='icon-good'/>
        <sxd-inputpro prefixIcon='icon-edit'/>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标
        </p>
      </template>
    </Block-code>

    <Block-code title="复合型输入框" :code="code5" height="620px">
      <template slot="source">
        <sxd-inputpro>
            <template slot="prepend">Http://</template>
        </sxd-inputpro>
        <sxd-inputpro style="margin-top: 15px;">
            <template slot="append">.com</template>
        </sxd-inputpro>
        <sxd-inputpro style="margin-top: 15px;">
            <template slot="append">
                <i class="iconfont icon-good"></i>
            </template>
        </sxd-inputpro>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          可通过 slot 来指定在 input 中前置或者后置内容。
        </p>
      </template>
    </Block-code>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Input Attributes</p>
    <sxd-tablepro :columns="columns" :data="data">
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
            arguments: 'label',
            brief: "输入框占位文本",
            type: 'string',
            options: '—',
            default:"请输入"
          },
          {
            arguments: 'disabled',
            brief: "是否禁用",
            type: 'boolean',
            options: 'true/false',
            default:"false"
          },
          {
            arguments: 'clearable',
            brief: "是否可清空",
            type: 'boolean',
            options: 'true/false',
            default:"false"
          },
          {
            arguments: 'prefixicon',
            brief: "输入框头部图标",
            type: 'string',
            options: '—',
            default:"—"
          },
          {
            arguments: 'suffixIcon',
            brief: "输入框尾部图标",
            type: 'string',
            options: '—',
            default:"—"
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
    <sxd-input v-model="inputVal" label="请输入"/>
           `,
           javascript:`
    export default {
      data () {
        return {
          inputVal:''
        }
      }
    }
            `
       },
       code2:{
           html:`
    <sxd-inputpro disabled/>
           `,
           javascript:`
    export default {
      data () {
        return {
        }
      }
    }
            `
       },
       code3:{
           html:`
    <sxd-inputpro clearable/>
           `,
           javascript:`
    export default {
      data () {
        return {
        }
      }
    }
            `
       },
       code4:{
           html:`
    <sxd-inputpro suffixIcon='icon-good'/>
    <sxd-inputpro prefixIcon='icon-edit'/>
           `,
           javascript:`
    export default {
      data () {
        return {
        }
      }
    }
            `
       },
       code5:{
           html:`
    <sxd-inputpro>
        <template slot="prepend">Http://</template>
    </sxd-inputpro>
    <sxd-inputpro>
        <template slot="append">.com</template>
    </sxd-inputpro>
    <sxd-inputpro>
        <template slot="append">
            <i class="iconfont icon-good"></i>
        </template>
    </sxd-inputpro>
           `,
           javascript:`
    export default {
      data () {
        return {
        }
      }
    }
            `
       },
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
