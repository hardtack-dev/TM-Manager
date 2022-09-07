<template>
 <transition name="expanding">
  <div class="wrapper">
    <div v-bind:class="{'line-icon': depth != 0 && depth != 1 }">
      
      <!-- line -->
      <div v-show="depth != 1" class="line" v-bind:class="{'line-active': expanded }" :style="{height: 105 - depth * 350 + '%'}">
        <div v-show="depth != 0" class="line horizental"></div>
        <div class="line-hider"></div>
      </div>
 
       
      <!-- caret -->
      <div class="caret" >
        <img v-show="depth == 0" src="@/assets/fa-icons/search.svg" alt="" :style="{position: 'absoulte'}">
        <img v-show=" depth != 0 && !expanded" src="@/assets/fa-icons/anker-upward.svg" alt="">
        <img v-show=" depth != 0 && expanded" src="@/assets/fa-icons/anker-downward.svg" alt="">
      </div>
        
      
      <div 
        class="block"
        :style="{width: 20 - (this.depth * 1.55)+'vw', filter: `hue-rotate(${this.depth * 25}deg)` }"
        @click="expandFunc(depth, node.name)"
         v-bind:class="{'block-expanded': expanded && depth != 0, 'block-selected': selected,'search': depth == 0}"
         
      >

      <!-- search input -->
      <!-- idk inline serach? -->

        <div class="block--text">
          <p>{{node.name}} </p>

          <!-- <div v-show="depth != 0 && expanded" class="properties">

            <div class="replay">
              <img src="@/assets/fa-icons/video.svg" alt="replay"> 
              <p> {{node.replay }}&nbsp;/</p>
            </div>
              
            <div class="map">
              <img src="@/assets/fa-icons/map.svg" alt="replay"> 
              <p>  {{node.map}}</p>
            </div>

          </div> -->

         
        </div>

    
      </div>
      <!-- selector-ball -->
        <div 
        v-show="depth != 0" class="ball" 
        :style="{marginLeft: 190 - (depth * 20) + 'px'}"
        @click="selectedFunc(node.name, depth)"
        >
            <div class="selector" :class="{'selector-active': selected}">
              <img src="@/assets/fa-icons/checked.svg" alt="">
            </div>
        </div>
  
        
          
      

       <!-- 열렸을때 -->
      <p class="no-folder" v-show="depth != 0 && !hasChildren && expanded">No Folder Exist</p>
      
     

      <!-- horizental-line -->
      <hr class="divider" v-if="expanded && depth != 0 && hasChildren" :style="{width: 20 - (this.depth * 1.5)+'vw'}">

      <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
      <transition-group name="expanding">
      <FileView
        v-if="expanded || depth == 0"
        v-for="child in node.children"
        :key="child.name"
        :node="child"
        :depth="depth + 1"
       />
      </transition-group>
    </div>
    
    

  </div>
 </transition>
</template>

<script>
export default {
  name: 'FileView',
  props:{
    node: Object,
    depth:{
      type: Number,
      default: 0
    }
  },

  data(){
    return{
      expanded: false,
      selected: false
    }

  },

  computed:{
    hasChildren(){
      return this.node.children;
    }
  },

  methods:{
    expandFunc(depth, name){
      this.expanded = !this.expanded
      console.log(depth)
      console.log(name)
    },

    selectedFunc(name, depth){
      this.selected = !this.selected
      console.log(name)
      console.log(depth)
    }

  }
}
</script>

<style scoped>
  .wrapper{
    width: 95%;
    height: 70%;

    position: relative;
    /* border-left: 3px solid rgb(220, 220, 220); */
    border-radius: 2px;
    
    cursor: pointer;
    z-index: 999;
  }

  

  .line-icon{
    width: 230px;

    cursor: pointer;
    position: relative;

    margin-left: 20px;
    z-index: 555 !important;
  }

  .search{
    cursor: text !important;
  }

  .line-icon > .line{
    width: 1px;
    height: 115% ; /* 부모인 icon 크기에 맟춰서 height 지정되어야 함 */
    
    /* 아래 코드는 원래 부모라인 가지고 썼던거 자기꺼로 옮겨서 더 이상 안 씀 */
    /* top: 25px;
    left: 7.5px; */

    margin-top: -2.5px; 
  

     background-color: #dadada;
     /* 원래는 boder-left 썼음 */
    /* border-left: 1.5px solid #dadada; */
    position: absolute;
    transition: 0.1s ease-in-out;
    
  }
  .horizental{
    width: 10px;
    height: 1px;

    margin-top: 15px;
    background-color: #dadada;
  }


  .line-active{
    width: 1px !important;
    height: 105% ;
   
    
    background-color: #cec8f4 !important;
    z-index: 555;
  }

  .divider{
    margin: 0;
    margin-left: 8.5px;

    border: 0;
    border-bottom: 1px dashed #dadada;
    background: #999;
  }

  img{
    width: 10px;
    height: 10px;

    margin-top: 8.5px;
    padding-left: 17.5px;

    position: absolute;
    z-index: 999;
  }



  .block{
    width: 15vw;
    height: 25px;


    text-align: left;
    margin: 2.5px;
    margin-left: 10px;

    border-radius: 5px;
    background-color: #EEEEEE;

    transition: 0.1s ease-in-out;
     border: 0.3px solid rgb(226, 226, 226);
     z-index: 999 !important;
  }

  .block > .block--text > p{
    font-size: 13px;

    margin-left: 20px;
    padding: 3px;

    color: #83898C;
    box-shadow: 0px 17px 32px -15px rgba(0,0,0,0.1);
  }

  

  .block--text > .properties{
    display: flex;
    font-size: 12px;

    width: 150px;
    height: 25px;

    

    border-radius: 5px;
  }

  .ball{
    width: 70px;
    height: 25px;

    
    border-radius: 10px;

    position: absolute;
    top: 1px;

    
  }

  .selector{
    width: 15px;
    height: 15px;

    margin-top: 5px;
    margin-left: 45px;

    background-color: rgb(222, 222, 222);
    border-radius: 10px;
  }


  
  .ball:hover .selector{

    width: 15px;
    height: 15px;

    background-color: rgb(212, 212, 212);
    
  }



  


  .no-folder{
    margin-left: 20px;
    font-size: 13px;

    color: rgb(190, 190, 190);
  }


  .properties .replay { position: relative; width: 30px;}
  .properties .map {position: relative; width: 30px;}
  .properties img{ filter: invert(80%) sepia(0%) saturate(354%) hue-rotate(143deg) brightness(85%) contrast(90%); }

  .replay img { position: absolute; left: -5px; }
  .replay p   { position: absolute; width: 30px; left: 22px;  top: 7.5px; }

  .map img { position: absolute; }
  .map p   { position: absolute; width:30px; left: 26px; top: 7.5px; }
  
  .block:hover{
    border: 0.3px solid rgb(217, 217, 217);
    background-color: rgb(231, 231, 231);
  }

 
  .block-expanded{
    border: 1px solid rgb(217, 217, 217);
    background-color: rgb(245, 245, 245);

    margin-top: 5px;
  }

  .block-expanded:hover{
    background-color: rgb(255, 255, 255);
  }

  .block-selected{
    height: 25px;

    background: rgb(255,206,215);
    background: linear-gradient(90deg, rgba(255,206,215,0.42) 0%, rgba(255,255,255,1) 100%);
    border: 2px solid rgb(156, 207, 255);
    border-radius: 5px;


    color: rgb(86, 132, 182);
  }

  .block-selected:hover{
    border: 2px solid rgb(156, 207, 255);
  }

  .selector-active{
    background-color: rgb(120, 194, 254) !important;
  }

  .selector > img{
    position: absolute;
    left: 30px;
    top: 0;

    filter: invert(98%) sepia(6%) saturate(2%) hue-rotate(111deg) brightness(116%) contrast(86%);
  }

  .selector-active > img{
   filter: invert(100%) sepia(93%) saturate(0%) hue-rotate(201deg) brightness(106%) contrast(106%);
  }

  




  /* animation */
   .expanding-enter-active {
  transition: all .1s ease;
 
  }
  .expanding-leave-active {
   transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    opacity: 0;
  }
  .expanding-enter, .expanding-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-10px);
    opacity: 0;
  }


</style>
  
