<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Card 卡片</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">将信息聚合在卡片容器中展示。</p>
<!--基础用法-->
    <Block-code title="基础用法" :code="code1" height="336px">
      <template slot="source">
        <sxd-button  @click="dialogVisible1 = true">打开dialog</sxd-button>
        <sxd-dialog :visible.sync="dialogVisible" width="30%" title="提示">
          <p>这是一段信息</p>
          <div slot="footer">
            <sxd-button style="margin-right:20px;" @click="dialogVisible = false">取消</sxd-button>
            <sxd-button type="primary" @click="dialogVisible = false">确定</sxd-button>
          </div>
        </sxd-dialog>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          需要设置visible属性，它接收Boolean，当为true时显示 Dialog。Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。title属性用于定义标题，它是可选的，默认值为空
        </p>
      </template>
    </Block-code>
<!--自定义内容-->
    <Block-code title="自定义内容" :code="code2" height="360px">
      <template slot="source">
        <sxd-button  @click="dialogVisible = true">打开dialog</sxd-button>
        <sxd-dialog :visible.sync="dialogVisible" title="title">
          <sxd-select>
            <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
            <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
          </sxd-select>
          <div slot="footer">
            <sxd-button style="margin-right:20px;" @click="dialogVisible = false">取消</sxd-button>
            <sxd-button type="primary" @click="dialogVisible = false">确定</sxd-button>
          </div>
        </sxd-dialog>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">

        </p>
      </template>
    </Block-code>
<!--Attributes-->
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Attributes</p>
    <sxd-tablepro :columns="columns" :data="data">
      <template v-slot:name="{row}">
        {{row.name}}
      </template>
    </sxd-tablepro>
<!--Events-->
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Events</p>
    <sxd-tablepro :columns="columns2" :data="data2">
      <template v-slot:name="{row}">
        {{row.name}}
      </template>
    </sxd-tablepro>
  </div>
</template>

<script>
export default {
  data () {
    return {
       dialogVisible:false,
       data:[
          {
            arguments: 'visible',
            brief: "是否显示 Dialog，支持 .sync 修饰符",
            type: 'boolean',
            options: '—',
            default:"false"
          },
          {
            arguments: 'title',
            brief: "Dialog 的标题，也可通过具名 slot 传入",
            type: 'string',
            options: '—',
            default:"—"
          },
          {
            arguments: 'width',
            brief: "Dialog 的宽度",
            type: 'string',
            options: '—',
            default:"50%"
          },
          {
            arguments: 'top',
            brief: "Dialog 至页面顶部的距离",
            type: 'string',
            options: '—',
            default:'15vh'
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
      data2:[
          {
            arguments: 'closed',
            brief: "Dialog 关闭的回调",
          },
          {
            arguments: 'opened',
            brief: "Dialog 打开的回调",
          }
       ],
       columns2: [
          {
              title: '事件名称',
              key: 'arguments'
          },
          {
              title: '说明',
              key: 'brief'
          },
      ],
       code1:{
           html:`
    <sxd-dialog :visible.sync="dialogVisible" width="30%" title="提示">
      <p>这是一段信息</p>
      <div slot="footer">
        <sxd-button style="margin-right:20px;" @click="dialogVisible = false">取消</sxd-button>
        <sxd-button type="primary" @click="dialogVisible = false">确定</sxd-button>
      </div>
    </sxd-dialog>
           `,
           javascript:``
       },
       code2:{
           html:`
    <sxd-dialog :visible.sync="dialogVisible" title="title">
      <sxd-select>
        <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
        <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
      </sxd-select>
      <div slot="footer">
        <sxd-button style="margin-right:20px;" @click="dialogVisible = false">取消</sxd-button>
        <sxd-button type="primary" @click="dialogVisible = false">确定</sxd-button>
      </div>
    </sxd-dialog>
           `,
           javascript:``
       }
    }
  },
  methods: {
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
