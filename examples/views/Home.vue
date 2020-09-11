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
          <li class="firstLi" v-for="item1 in sidebar" :key="item1.id">
            <a class="firstTit">{{item1.text}}</a>
            <div v-for="item2 in item1.children" :key="item2.id">
              <h4 class="secondTit" v-if="item2.group">{{item2.group}}</h4>
              <a 
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
        text:"一级标题",
        children:[
          {
            id:1,
            group:"二级小标题",
            text:"input 输入框",
            path:"#/component/input",
          },
          {
            id:2,
            text:"table 表格",
            path:"#/component/table",
          },
          {
            id:3,
            text:"install",
            path:"#/component/input",
          },
          {
            id:4,
            group:"二级小标题2",
            text:"input",
            path:"#/component/input",
          },
          
        ]
      },
      {
        text:"一级标题",
        children:[
          {
            id:5,
            group:"二级小标题",
            text:"input",
            path:"#/component/input",
          },
          {
            id:6,
            text:"install",
            path:"#/component/input",
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
.sidebar ul{
  padding:0;
  list-style-type:none;
  margin:0
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
  padding-left:270px;
}
</style>
