<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Progress 进度条</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">用于展示操作进度，告知用户当前状态和预期。</p>
<!--线形进度条-->
    <Block-code title="线形进度条" :code="code1" height="475px">
      <template slot="source">
        <sxd-progress :percentage="50"></sxd-progress>
        <sxd-progress color="#67c23a" :percentage="100" :format="format"></sxd-progress>
        <sxd-progress color="#f56c6c" textColor="#f56c6c" :percentage="60"></sxd-progress>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。通过 format 属性来指定进度条文字内容。
        </p>
      </template>
    </Block-code>
<!--百分比内显-->
<Block-code title="百分比内显" :code="code2" height="200px">
    <template slot="source">
        <sxd-progress :strokeWidth="16" :textInside="true" color="#67c23a" :percentage="40"></sxd-progress>
        <sxd-progress :strokeWidth="22" :textInside="true" color="#f56c6c" :percentage="60"></sxd-progress>
    </template>
    <template slot="description">
    <p style="font-size: 14px;color: #5e6d82">
        Progress 组件可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来将进度条描述置于进度条内部。
    </p>
    </template>
</Block-code>
<!--自定义颜色-->
<Block-code title="自定义颜色" :code="code3" height="980px">
    <template slot="source">
        <sxd-progress :color="colorString" :percentage="percentage"></sxd-progress>
        <sxd-progress :color="colorArray"  :percentage="percentage"></sxd-progress>
        <sxd-progress :color="colorMethod" :percentage="percentage"></sxd-progress>
        
        <sxd-button icon="icon-minus-bold" @click="decrease"></sxd-button>
        <sxd-button icon="icon-add" @click="increase"></sxd-button>
    </template>
    <template slot="description">
    <p style="font-size: 14px;color: #5e6d82">
        可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。
    </p>
    </template>
</Block-code>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Progress Attributes</p>
    <sxd-tablepro :columns="columns" :data="data">
    </sxd-tablepro>
  </div>
</template>

<script>
export default {
  data () {
    return {
       percentage:20,
       colorString:"#409eff",
       colorArray:[
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ],
        color2:["#444","#7763e9","#ef2"],
        color3:"#7763e9",
       data:[
          {
            arguments: 'percentage',
            brief: "百分比（必填）",
            type: 'number',
            options: '0-100',
            default:"0"
          },
          {
            arguments: 'stroke-width',
            brief: "进度条的宽度，单位 px",
            type: 'number',
            options: '—',
            default:"6"
          },
          {
            arguments: 'text-inside',
            brief: "进度条显示文字内置在进度条内",
            type: 'boolean',
            options: '—',
            default:"false"
          },
           {
            arguments: 'textColor',
            brief: "进度条显示文字颜色",
            type: 'string',
            options: '—',
            default:"文字在进度条内时#fff，文字在进度条内时#606266"
          },
          {
            arguments: 'color',
            brief: "进度条背景色",
            type: 'string/function/array',
            options: '—',
            default:"' '"
          },
          {
            arguments: 'format',
            brief: "进度条显示文字",
            type: 'function',
            options: '—',
            default:"百分比"
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
    <sxd-progress :percentage="50"></sxd-progress>
    <sxd-progress color="#67c23a" :percentage="100" :format="format"></sxd-progress>
    <sxd-progress color="#f56c6c" textColor="#f56c6c" :percentage="60"></sxd-progress>
           `,
           javascript:`
    export default {
        methods () {
            format(percentage){
                return percentage==100?"满":percentage+"%"
            }
        }
    }
        `
       },
       code2:{
           html:`
    <sxd-progress :strokeWidth="16" :textInside="true" color="#67c23a" :percentage="40"></sxd-progress>
    <sxd-progress :strokeWidth="22" :textInside="true" color="#f56c6c" :percentage="60"></sxd-progress>
           `,
           javascript:``
       },
       code3:{
           html:`
    <sxd-progress :color="colorString" :percentage="percentage"></sxd-progress>
    <sxd-progress :color="colorArray"  :percentage="percentage"></sxd-progress>
    <sxd-progress :color="colorMethod" :percentage="percentage"></sxd-progress>
    
    <sxd-button icon="icon-minus-bold" @click="decrease"></sxd-button>
    <sxd-button icon="icon-add" @click="increase"></sxd-button>
           `,
           javascript:`
    export default {
        methods () {
            colorMethod(percentage){
                if (percentage < 30) {
                return '#909399';
                } else if (percentage < 70) {
                return '#e6a23c';
                } else {
                return '#67c23a';
                }
            },
            increase() {
                this.percentage += 10;
                if (this.percentage > 100) {
                this.percentage = 100;
                }
            },
            decrease() {
                this.percentage -= 10;
                if (this.percentage < 0) {
                this.percentage = 0;
                }
            },
        }
    }
        `
       },
       
    }
  },
  methods:{
      colorMethod(percentage){
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      },
      format(percentage){
          return percentage==100?"满":percentage+"%"
      }
  }
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
