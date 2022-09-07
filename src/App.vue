<template>
  <div id="app">

    <div class="flex">
      <MainSideBar />
      <MainExplorer />
    </div>
    
    <div class="bottom">
      <MainBottomBar />
    </div>  

  </div>
</template>

<script>
import MainSideBar from '@/layout/MainSideBar.vue'
import MainExplorer from '@/layout/MainExplorer.vue'
import MainBottomBar from '@/layout/MainBottomBar.vue'

export default {
  components: {
    MainSideBar,
    MainExplorer,
    MainBottomBar
  },

  
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;

  font-family: 'Ubuntu-Regular',  Arial, sans-serif !important;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F2F2F2;
  color: #2c3e50;

  overflow: hidden;
}

@font-face {
  font-family:'Ubuntu-Regular';
  src: url('@/assets/fonts/Ubuntu-Regular.ttf') format('truetype');
  font-weight: 400;
}


.flex{
  display: flex;

  width: 100vw;
  height: 100vh;
  
  margin: 0;
}

.bottom{
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 25px;

  background-color: #EAEAEA;
  z-index: 999;
}

</style>
