<template>
  <div class="content">
    <p style="margin:0;font-size:28px;font-weight:400;color:#1f2f3d">Form 表单</p>
    <p style="font-size:14px;font-weight:400;color:#5e6d82">由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</p>
<!--典型表单-->
    <Block-code title="典型表单" :code="code1" height="1330px">
      <template slot="source">
        <sxd-form label-width="80px" :model="form">
            <sxd-form-item label="活动名称">
                <sxd-inputpro v-model="form.name"></sxd-inputpro>
            </sxd-form-item>
            <sxd-form-item label="活动区域">
              <sxd-select v-model="form.region">
                <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
                <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
              </sxd-select> 
            </sxd-form-item>
            <sxd-form-item label="即时配送">
              <sxd-switch v-model="form.delivery"></sxd-switch>
            </sxd-form-item>
            <sxd-form-item label="活动性质">
              <sxd-checkbox-group v-model="form.type">
                <sxd-checkbox label="美食"></sxd-checkbox>
                <sxd-checkbox label="主题活动"></sxd-checkbox>
                <sxd-checkbox label="品牌曝光"></sxd-checkbox>
              </sxd-checkbox-group>
            </sxd-form-item>
            <sxd-form-item label="活动资源">
              <sxd-radio-group v-model="form.resource">
                <sxd-radio label="线上品牌商赞助">线上品牌商赞助</sxd-radio>
                <sxd-radio label="线下场地免费">线下场地免费</sxd-radio>
              </sxd-radio-group>
            </sxd-form-item>
            <sxd-form-item>
                <sxd-button type="primary">立即创建</sxd-button>
                <sxd-button style="margin-left:10px">取消</sxd-button>
            </sxd-form-item>
        </sxd-form>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker
        </p>
      </template>
    </Block-code>
<!--对齐方式-->
    <Block-code title="对齐方式" :code="code2" height="880px">
      <template slot="source">
        <sxd-radio-group v-model="labelPosition" size="small" style="margin-bottom:30px">
            <sxd-radio-button label="left">左对齐</sxd-radio-button>
            <sxd-radio-button label="right">右对齐</sxd-radio-button>
            <sxd-radio-button label="top">顶部对齐</sxd-radio-button>
        </sxd-radio-group>
        <sxd-form :label-position="labelPosition" label-width="auto" :model="form2">
            <sxd-form-item label="名称">
                <sxd-inputpro v-model="form2.name"></sxd-inputpro>
            </sxd-form-item>
            <sxd-form-item label="活动区域活动区域">
                <sxd-select v-model="form2.region">
                    <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
                    <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
                </sxd-select>
            </sxd-form-item>
        </sxd-form>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left，当设为 top 时标签会置于表单域的顶部
        </p>
      </template>
    </Block-code>

<!--表单验证-->
    <Block-code title="表单验证" :code="code3" height="1860px">
      <template slot="source">
        <sxd-form label-width="80px" ref="form3" :rules="rules" :model="form3">
            <sxd-form-item label="活动名称" prop="name">
                <sxd-inputpro v-model="form3.name"></sxd-inputpro>
            </sxd-form-item>
            <sxd-form-item label="活动区域" prop="region">
              <sxd-select v-model="form3.region">
                <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
                <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
              </sxd-select> 
            </sxd-form-item>
            <sxd-form-item label="即时配送">
              <sxd-switch v-model="form3.delivery"></sxd-switch>
            </sxd-form-item>
            <sxd-form-item label="活动性质" prop="type">
              <sxd-checkbox-group v-model="form3.type">
                <sxd-checkbox label="美食"></sxd-checkbox>
                <sxd-checkbox label="主题活动"></sxd-checkbox>
                <sxd-checkbox label="品牌曝光"></sxd-checkbox>
              </sxd-checkbox-group>
            </sxd-form-item>
            <sxd-form-item label="活动资源" prop="resource">
              <sxd-radio-group v-model="form3.resource">
                <sxd-radio label="线上品牌商赞助">线上品牌商赞助</sxd-radio>
                <sxd-radio label="线下场地免费">线下场地免费</sxd-radio>
              </sxd-radio-group>
            </sxd-form-item>
            <sxd-form-item>
                <sxd-button type="primary" @click="onSubmit">立即创建</sxd-button>
                <sxd-button style="margin-left:10px">取消</sxd-button>
            </sxd-form-item>
        </sxd-form>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可。校验规则参见 async-validator
        </p>
      </template>
    </Block-code>
<!--自定义校验规则-->
    <Block-code title="自定义校验规则" :code="code4" height="1800px">
      <template slot="source">
        <sxd-form label-width="80px" statusIcon ref="form4" :rules="rules2" :model="form4">
            <sxd-form-item label="用户名" prop="name">
                <sxd-inputpro v-model="form4.name"></sxd-inputpro>
            </sxd-form-item>
            <sxd-form-item label="密码" prop="pass">
                <sxd-inputpro v-model="form4.pass"></sxd-inputpro>
            </sxd-form-item>
            <sxd-form-item label="确认密码" prop="checkPass">
                <sxd-inputpro v-model="form4.checkPass"></sxd-inputpro>
            </sxd-form-item>
            <sxd-form-item>
                <sxd-button type="primary" @click="onSubmit2">立即创建</sxd-button>
                <sxd-button style="margin-left:10px">取消</sxd-button>
            </sxd-form-item>
        </sxd-form>
      </template>
      <template slot="description">
        <p style="font-size: 14px;color: #5e6d82">
          本例还使用status-icon属性为输入框添加了表示校验结果的反馈图标
        </p>
      </template>
    </Block-code>

    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Form Attributes</p>
    <sxd-tablepro :columns="columns1" :data="data1">
    </sxd-tablepro>
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Form Events</p>
    <sxd-tablepro :columns="columns2" :data="data1_1">
    </sxd-tablepro>
    <p style="margin: 55px 0 20px;font-weight: 400;color: #1f2f3d;font-size: 22px;">Form-Item Events</p>
    <sxd-tablepro :columns="columns1" :data="data2">
    </sxd-tablepro>
  </div>
</template>

<script>
export default {
  data () {
    var name = (rule,value,callback)=>{
      if(value===""){
        callback(new Error('请输入用户名'))
      }
    }
    var pass = (rule,value,callback)=>{
      if(value===""){
        callback(new Error('请输入密码'));
      }else{
        if(this.form4.checkPass!==""){
          this.$refs['form4'].validateFields("checkPass")
        }
      }
    }
    var checkPass = (rule,value,callback)=>{
      if(value===""){
        callback(new Error('请再次输入密码'));
      }else if(value !== this.form4.pass){
        callback(new Error('两次输入密码不一致!'))
      }
    }
    return {
       form:{
           name:"",
           region:"",
           delivery:"",
           type:"",
           resource:"",
       },
       form2:{
           name:"",
           region:"",
       },
       form3:{
          name:"",
          region:"",
          delivery:"",
          type:"",
          resource:"",
       },
       form4:{
           name:"",
           pass:"",
           checkPass:""
       },
       rules:{
         name:[
           { required: true, message: '请输入名称', trigger: 'blur' }
         ],
         region:[
          { required: true, message: '请输入地区名称', trigger: 'blur' },
         ],
         type:[
          { required: true, type:"array",message: '请选择类型', trigger: 'change' },
         ],
         resource:[
          { required: true, message: '请选择资源', trigger: 'change' },
         ],
       },
       rules2:{
         name:[
           { validator: name, trigger: 'blur' }
         ],
         pass:[
           { validator: pass, trigger: 'blur' }
         ],
         checkPass:[
           { validator: checkPass, trigger: 'blur' }
         ],
       },
       labelPosition:"left",
       data1:[
          {
            arguments: 'model',
            brief: "表单数据对象",
            type: 'object',
            options: '—',
            default:"—"
          },
          {
            arguments: 'rules',
            brief: "表单验证规则",
            type: 'object',
            options: '—',
            default:"—"
          },
          {
            arguments: 'label-position',
            brief: "表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width",
            type: 'string',
            options: 'right/left/top',
            default:"right"
          },
          {
            arguments: 'label-width',
            brief: "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。",
            type: 'string',
            options: '—',
            default:"—"
          },
          {
            arguments: 'hideAsterisk',
            brief: "是否隐藏必填字段的标签旁边的红色星号",
            type: 'boolean',
            options: '—',
            default:"false"
          },
          {
            arguments: 'show-message',
            brief: "是否显示校验错误信息",
            type: 'boolean',
            options: '—',
            default:"true"
          },
       ],
       data1_1:[
          {
            name: 'validate',
            brief: "对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise",
            params: 'Function(callback: Function(boolean, object))',
          },
          {
            name: 'validateField',
            brief: "对部分表单字段进行校验的方法",
            params: 'Function(props: array | string, callback: Function(errorMessage: string))',
          },
          {
            name: 'resetFields',
            brief: "对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",
            params: '—',
          },
       ],
       data2:[
          {
            arguments: 'model',
            brief: "表单数据对象",
            type: 'object',
            options: '—',
            default:"—"
          },
          {
            arguments: 'rules',
            brief: "表单验证规则",
            type: 'object',
            options: '—',
            default:"—"
          },
          {
            arguments: 'label-position',
            brief: "表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width",
            type: 'string',
            options: 'right/left/top',
            default:"right"
          },
          {
            arguments: 'label-width',
            brief: "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。",
            type: 'string',
            options: '—',
            default:"—"
          },
          {
            arguments: 'hideAsterisk',
            brief: "是否隐藏必填字段的标签旁边的红色星号",
            type: 'boolean',
            options: '—',
            default:"false"
          },
          {
            arguments: 'show-message',
            brief: "是否显示校验错误信息",
            type: 'boolean',
            options: '—',
            default:"true"
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
    <sxd-form label-width="80px" :model="form">
      <sxd-form-item label="活动名称">
          <sxd-inputpro v-model="form.name"></sxd-inputpro>
      </sxd-form-item>
      <sxd-form-item label="活动区域">
        <sxd-select v-model="form.region">
          <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
          <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
        </sxd-select> 
      </sxd-form-item>
      <sxd-form-item label="即时配送">
        <sxd-switch v-model="form.delivery"></sxd-switch>
      </sxd-form-item>
      <sxd-form-item label="活动性质">
        <sxd-checkbox-group v-model="form.type">
          <sxd-checkbox label="美食"></sxd-checkbox>
          <sxd-checkbox label="主题活动"></sxd-checkbox>
          <sxd-checkbox label="品牌曝光"></sxd-checkbox>
        </sxd-checkbox-group>
      </sxd-form-item>
      <sxd-form-item label="活动资源">
        <sxd-radio-group v-model="form.resource">
          <sxd-radio label="线上品牌商赞助">线上品牌商赞助</sxd-radio>
          <sxd-radio label="线下场地免费">线下场地免费</sxd-radio>
        </sxd-radio-group>
      </sxd-form-item>
      <sxd-form-item>
          <sxd-button type="primary">立即创建</sxd-button>
          <sxd-button style="margin-left:10px">取消</sxd-button>
      </sxd-form-item>
    </sxd-form>
           `,
           javascript:`
    export default {
      data () {
        return {
          form:{
            name:"",
            region:"",
            delivery:"",
            type:"",
            resource:"",
          },
        }
      }
    }
            `
       },
       code2:{
           html:`
    <sxd-radio-group v-model="labelPosition" size="small" style="margin-bottom:30px">
        <sxd-radio-button label="left">左对齐</sxd-radio-button>
        <sxd-radio-button label="right">右对齐</sxd-radio-button>
        <sxd-radio-button label="top">顶部对齐</sxd-radio-button>
    </sxd-radio-group>
    <sxd-form :label-position="labelPosition" label-width="auto" :model="form2">
        <sxd-form-item label="名称">
            <sxd-inputpro v-model="form2.name"></sxd-inputpro>
        </sxd-form-item>
        <sxd-form-item label="活动区域活动区域">
            <sxd-select v-model="form2.region">
                <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
                <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
            </sxd-select>
        </sxd-form-item>
    </sxd-form>
           `,
           javascript:`
    export default {
      data () {
        return {
          labelPosition:"left"
          form2:{
            name:"",
            region:"",
          },
        }
      }
    }
            `
       },
       code3:{
           html:`
    <sxd-form label-width="80px" ref="form3" :rules="rules" :model="form3">
      <sxd-form-item label="活动名称" prop="name">
          <sxd-inputpro v-model="form3.name"></sxd-inputpro>
      </sxd-form-item>
      <sxd-form-item label="活动区域" prop="region">
        <sxd-select v-model="form3.region">
          <sxd-select-options label="选项1的值为宝山区" value="宝山区"></sxd-select-options>
          <sxd-select-options label="选项2的值为普陀区" value="普陀区"></sxd-select-options>
        </sxd-select> 
      </sxd-form-item>
      <sxd-form-item label="即时配送">
        <sxd-switch v-model="form3.delivery"></sxd-switch>
      </sxd-form-item>
      <sxd-form-item label="活动性质" prop="type">
        <sxd-checkbox-group v-model="form3.type">
          <sxd-checkbox label="美食"></sxd-checkbox>
          <sxd-checkbox label="主题活动"></sxd-checkbox>
          <sxd-checkbox label="品牌曝光"></sxd-checkbox>
        </sxd-checkbox-group>
      </sxd-form-item>
      <sxd-form-item label="活动资源" prop="resource">
        <sxd-radio-group v-model="form3.resource">
          <sxd-radio label="线上品牌商赞助">线上品牌商赞助</sxd-radio>
          <sxd-radio label="线下场地免费">线下场地免费</sxd-radio>
        </sxd-radio-group>
      </sxd-form-item>
      <sxd-form-item>
          <sxd-button type="primary" @click="onSubmit">立即创建</sxd-button>
          <sxd-button style="margin-left:10px">取消</sxd-button>
      </sxd-form-item>
  </sxd-form>
           `,
           javascript:`
    export default {
      data () {
        return {
          form3:{
            name:"",
            region:"",
            delivery:"",
            type:"",
            resource:"",
          },
          rules:{
            name:[
              { required: true, message: '请输入名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            region:[
              { required: true, message: '请输入地区名称', trigger: 'blur' },
            ],
            type:[
              { required: true, type:"array",message: '请选择类型', trigger: 'change' },
            ],
            resource:[
              { required: true, message: '请选择资源', trigger: 'change' },
            ],
          },
        }
      },
      methods: {
        onSubmit(){
          this.$refs['form3'].validate((valid,fil)=>{
            console.log(valid,fil)
          })
      },
    }
            `
       },
       code4:{
           html:`
    <sxd-form label-width="80px" ref="form4" :rules="rules2" :model="form4">
        <sxd-form-item label="用户名" prop="name">
            <sxd-inputpro v-model="form4.name"></sxd-inputpro>
        </sxd-form-item>
        <sxd-form-item label="密码" prop="pass">
            <sxd-inputpro v-model="form4.pass"></sxd-inputpro>
        </sxd-form-item>
        <sxd-form-item label="确认密码" prop="checkPass">
            <sxd-inputpro v-model="form4.checkPass"></sxd-inputpro>
        </sxd-form-item>
        <sxd-form-item>
            <sxd-button type="primary" @click="onSubmit2">立即创建</sxd-button>
            <sxd-button style="margin-left:10px">取消</sxd-button>
        </sxd-form-item>
    </sxd-form>
           `,
           javascript:`
    export default {
      data () {
        var name = (rule,value,callback)=>{
          if(value===""){
            callback(new Error('请输入用户名'))
          }
        }
        var pass = (rule,value,callback)=>{
          if(value===""){
            callback(new Error('请输入密码'));
          }else{
            if(this.form4.checkPass!==""){
              this.$refs['form4'].validateFields("checkPass")
            }
          }
        }
        var checkPass = (rule,value,callback)=>{
          if(value===""){
            callback(new Error('请再次输入密码'));
          }else if(value !== this.form4.pass){
            callback(new Error('两次输入密码不一致!'))
          }
        }
        return {
          form4:{
            name:"",
            pass:"",
            checkPass:""
          },
          rules2:{
            name:[
              { validator: name, trigger: 'blur' }
            ],
            pass:[
              { validator: pass, trigger: 'blur' }
            ],
            checkPass:[
              { validator: checkPass, trigger: 'blur' }
            ],
          },
        }
      },
      methods: {
        onSubmit(){
          this.$refs['form4'].validate((valid,fil)=>{
            console.log(valid,fil)
          })
      },
    }
            `
       }
    }
  },
  methods: {
    onSubmit(){
      this.$refs['form3'].validate((valid,fil)=>{
        console.log(valid,fil)
      })
      //this.$refs['form3'].validateFields("region")
    },
    onSubmit2(){
      this.$refs['form4'].validate((valid,fil)=>{
        console.log(valid,fil)
      })
      //this.$refs['form4'].validateFields("region")
    },
  }
}
</script>

<style scoped>
</style>
