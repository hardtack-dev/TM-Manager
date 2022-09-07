<template>
  <div id="posistion">
    <div class="title" v-bind:class="{'m-active': ListMenuToggled}" @click="toggleListMenu()">
      <img class="svg-icon" src="@/assets/fa-icons/bookmark.svg">
      <p class="label">Categories</p>
      <img class="svg-icon dots" src="@/assets/fa-icons/three-dots.svg">
    </div>

    <!-- <ItemContextMenu /> -->
   <div @click="toggleListMenu()">
    <transition name="list--menu">
      <ListDropMenu
      v-if="ListMenuToggled" 
      class="list--menu-style"
      />
   </transition>
  </div>

    <div class="buttons-container">
      <!-- <ItemContextMenu />
      <CategoryButton />
     -->

    </div>

  </div>
</template>

<script>
// import ItemContextMenu from '@/components/sidebar/category/menu/ItemContextMenu.vue'
// import CategoryButton from '@/components/sidebar/category/button/CategoryButton.vue'
import ListDropMenu from '@/components/sidebar/category/menu/ListDropMenu.vue'

export default {
  name: 'CategorySelect',

  components:{
    // ItemContextMenu,
    // CategoryButton,
    ListDropMenu,
    
  },

  data() {
    return {
      ListMenuToggled: false
    }
  },

  methods: {
    toggleListMenu(){
      this.ListMenuToggled = !this.ListMenuToggled 
      console.log("Toggled")
    }

  },
}
</script>

<style scoped>
  #posistion{
    width: 100%;
    height: 200px;

   border: 0px solid rgb(211, 211, 211);
   transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    z-index: 0;
  }

  #posistion:hover{
    border-radius: 10px;
  }

  .title{
    width: 90%; /* Make 92% and remove border for growing effect*/
    display: flex;

    padding: 10px;
    opacity: 0.6;

    border: 2px solid rgba(255, 255, 255, 0);
    position: relative;
    transition: 0.1s ease-in-out;
    border-radius: 10px;
  }

  .title > .dots{
    position: absolute;
    right: 10;
  }

  .title:hover{
    cursor: pointer;
    background-color: rgb(224, 224, 224);
  }

  .label{
    display: inline-block;
    font-size: 15px;
    line-height: 15px;

    margin-left: 5px;
  }

  .svg-icon{
    width: 15px;
    height: 15px;

   
    opacity: 0.6;
    display: block;
    
    
    right: 10px;
  }

  .menu-button{
    width: 25px;
    height: 25px;

    border-radius: 7px;
    position: absolute;
    right: 10px;
  }

  .menu-button > img{
    margin: 0 auto;
    margin-top: 5px;
  }

  .menu-button:hover{
    background-color: rgb(168, 168, 168);
  }

  .m-active{
    background-color: rgb(238, 238, 238);
    border: 2px solid rgb(98, 121, 251);
    transition: 0.1s ease-in-out;
  }

  .m-active img{
    transform: rotate(270deg);
  }

  .list--menu-style{
    margin: 5px 10px;
    position: absolute;

    z-index: 777;
  }


  /* toggle animation */
  .list--menu-enter-active {
  transition: all .1s ease;
 
  }
  .list--menu-leave-active {
   transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    opacity: 0;
  }
  .list--menu-enter, .list--menu-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }

  .buttons-container{
    width: 100%;
    height: 85%;

    overflow-y: scroll;
    overflow-x: hidden;
  }

  *::-webkit-scrollbar {
    width: 7px;
    
  }

  *::-webkit-scrollbar-track {
    background: #f3f3f3c7;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
    border-radius: 10px;
    border: 1px solid #dbc4fa;
  }
</style>