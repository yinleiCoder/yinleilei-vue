<template>
  <div id="app">
      <nav-bar></nav-bar>
      <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'app',
  components: {
    NavBar,
  }
}
</script>

<style lang="scss">
#app{
  overflow: hidden;
}

//自定义滚动条样式
// 改变滚动条
::-webkit-scrollbar{
  width: 5px;
}
//定义滚动条轨道
::-webkit-scrollbar-track{
  border-radius: 10px;
  background-color: transparent;
}
// 定义滑块
::-webkit-scrollbar-thumb{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #95a5a6; 
}
</style>
