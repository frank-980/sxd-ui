<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
/*滚动条样式*/
div::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px !important;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 5px !important;
}

div::-webkit-scrollbar-thumb {
    /* 滚动条里面小方块 */
    background: #eee !important;
}

div::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    background: #fff !important;
}

/*滚动条样式*/
html::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 7px !important;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 7px !important;
}

html::-webkit-scrollbar-thumb {
    /* 滚动条里面小方块 */
    background: #b6b6b6 !important;
}

html::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    background: #fff !important;
}
</style>
