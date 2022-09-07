<template>
  <div class="layout">
    <input type="text" placeholder="Click here to Search!" v-model="searchValue" class="search-bar">

    <div class="menu">
      <li class="button" v-bind:class="{selected: menu.index == 0}" @click="menuClick(0)">
        <img class="svg-icon" src="@/assets/fa-icons/video.svg">
        Replay
        </li>
      <li class="button" v-bind:class="{selected: menu.index == 1}" @click="menuClick(1)">
        <img class="svg-icon" src="@/assets/fa-icons/map.svg">
        Map
        </li>
    </div>
    <hr class="dir-divider">

    

    <div class="item-content">
      <div class="item-container">

        

         <div class="items" >



          <!-- bottom part -->
          <button class="sort-btn">
            <img src="@/assets/fa-icons/sort.svg" alt="">
          </button>
          
           <div class="tabs-container" ref="tabScroll">
              <div class="tabs">
                <TabItem
                v-for="item in selected_dir"
                v-bind="item"
                :key="item.id"
                v-model="currentId"
                />

                <div class="tab-null" v-if="selected_dir.length == 0">
                  <p>No directory selected</p>
                </div> <!-- tab-null -->
               </div> <!-- tabs -->
            </div> <!-- tabs-container -->
          </div> <!-- item-container -->


     
    

      </div>
      <div class="content-container">
        <div class="contents">
          <!-- replay -->
          <div class="replay-header-block">
              <p class="replay-name">
              TMN Race E8
              </p>
              <p class="replay-time">
                48.820
              </p>
              <p class="replay-driver">
                Driver
              </p>

              <div class="replay-dates">
                <div class="replay-downloaded">
                  <img src="@/assets/fa-icons/downloaded.svg" alt="">
                  <p>2020.12.31</p>
                </div>
                <div class="replay-modified">
                  <img src="@/assets/fa-icons/modified.svg" alt="">
                  <p>2020.12.31</p>
                </div>
              </div>
            
          </div>

        </div>
      </div>
    </div>

    

     <p>{{searchValue}}</p>


     
     

  </div>
</template>

<script>

// import TrackCard from '@/components/explorer/card/TrackCard.vue'
import TabItem from '@/components/explorer/tab/TabItem.vue'
// import VueTabsChrome from "vue-tabs-chrome"

export default {
    name:'MainExplorer',

    components:{
      // TrackCard
      TabItem,
      // VueTabsChrome
    },

    data(){
      return{
        searchValue: null,
        menu:{
          type:'',
          index: 0
        },
    ///////////////////////////////////////////////////////////////////////////////////
        currentId: 0,
        selected_dir:[
          // { id: 0, label:'Created Ghost', },
          // { id: 1, label:'test3-3', },
          // { id: 2, label:'test3-3-1', },
          // { id: 3, label:'test3-3-1', },
          // { id: 5, label:'test3-3-1', },
          // { id: 6, label:'test3-3-1', },
          // { id: 7, label:'test3-3-1', },
          // { id: 8, label:'test3-3-1', },
          // { id: 9, label:'test3-3-1', },     
        ],
    ///////////////////////////////////////////////////////////////////////////////////
        

        selected_file:{
          type: '', //replay or map
          replay:{
            name: '',
            time: '',
            driver: {
              nickname: '',
              login: ''
            },
            UID: '',

            date: {
              downloaded: '',
              modified: ''
            }
          },

          map:{
            name: '',
            nameF: '',
            time: {
              author: '',
              gold: '',
              silver: '',
              bronze: ''
            },
           author: '',
           isMultilap: Boolean,
           isSimple: Boolean,
           thumbnail: [],
           UID: '',

           date: {
              downloaded: '',
              modified: ''
            }
          }


        }
        
      
        
      }

       
    },

    mounted(){
      const scroll = this.$refs.tabScroll;
            scroll.addEventListener('wheel', (event) => {
            event.preventDefault();

        scroll.scrollBy({
          left: event.deltaY < 0 ? -50 : 50,
          
        });
      });


    },
     beforeDestroy () { 
       window.removeEventListener('wheel', this.handleScroll) 
       },

    methods: {
        menuClick(type){

          if(type == 0 ){
            this.menu.type = 'replay'
            this.menu.index = 0;
          }else{
            this.menu.type = 'map' 
            this.menu.index = 1
          }
            

          console.log(this.menu.type)
          console.log(this.menu.index)

          
        },

        // handleClick(e, tab, i){
        //   console.log(e, tab, i)
        // }
        
       
         
        
      },

      

}
</script>

<style lang="less">
  .flex{ display: flex; }

  .search-bar{
    width: 73vw;
    height: 35px;

    border: 1.7px solid rgb(163, 163, 163);
    border-radius: 5px;
    margin: 10px 1px 3px 15px;
    transition: 0.3s ease-in-out;
    
  }

  .search-bar:hover{
    border: 1.7px solid skyblue;
    
  }

   
  .search-bar:active{
    border-radius: 5px;
    border: 1.7px solid rgb(35, 151, 197);
    
  }

  .search-bar:focus{
    border-radius: 5px;
    border: 1.7px solid rgb(140, 67, 248);
    

    box-shadow: 5px 2px 24px -5px rgba(156, 156, 156, 0.42);
    
  }

  .menu{
    width: 100%;
    display: flex;
   
    margin-left: 15px;
  }

  .menu > .button{
   
    padding: 13px;
    padding-bottom: 7.5px;

    display: flex;

    cursor: pointer;
    transition: 0.1s ease-in-out;
  }

   .menu > .button:active{
     transform: scale(1.05);
   }

  .menu > .button:hover{
    background-color: rgb(231, 231, 231);
    border-radius: 5px;
  }

  .selected{
   border-bottom: 2px solid rgb(131, 131, 235);
    box-shadow: 0px 20px 20px -14px rgba(0,0,0,0.2);
  
    border-top-right-radius: 5px;
   border-top-left-radius: 5px;

   border-bottom-right-radius: 0;
   border-bottom-left-radius: 0;
   transition: 1s ease-in-out;

   color: rgb(108, 108, 255);
   /* background-color: rgb(230, 230, 230); */
  }

 .svg-icon{
    width: 15px;
    height: 15px;

    filter: invert(48%) sepia(9%) saturate(13%) hue-rotate(8deg) brightness(91%) contrast(93%);
    margin-right: 10px;
  }

  .selected img{
    filter: invert(61%) sepia(38%) saturate(5008%) hue-rotate(166deg) brightness(102%) contrast(97%);
  }

  .tabs-container{
    position: absolute;

    width: 38vw;
    height: 50px;

    bottom: -2px;
    
   overflow: scroll;
   overflow-x: hidden;
   overflow-y: hidden;

   border: none;
   border-top: 1px dashed #DADADA;
   
  }

  .sort-btn{
    width: 35px;
    height: 35px;
    
    border-radius: 35px;
    border: 1px solid rgb(163, 163, 163);

    position: absolute;
    z-index: 1000;

    top: 20px;
    right: -20px;

    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .sort-btn:hover{
    border: 1px solid rgb(35, 151, 197);
    background-color: rgb(223, 223, 223);
  }

  .tabs{
    width: 100vw;
    height:45px;



    display: flex;
  
  }

  .tab-null p{
    font-size: 15px;

    margin: 15px;
    color: #b8b8b8;
  }

  .item-content{
    display: flex;

    width: 100%;
    height: 100%;
  
    /* background-color: black; */
  }

  

  

  .item-container{
    width: 40vw;
    height: 85vh;

    margin-left: 15px;
    position: relative;

  }

  


  .items{
    width: 95%;
    height: 100%;
    

    border: 1.8px solid #B0B0B0;
    position: relative;

    border-radius: 5px;
    background-color: #F2F2F2;
    z-index: 999;

   box-shadow: 0px 10px 44px 10px rgba(0,0,0,0.1);
  }

  @media screen and (max-height: 875px) { .items {  height: 98%; } }
  @media screen and (max-height: 800px) { .items {  height: 95%; } }
  @media screen and (max-height: 775px) { .items {  height: 93%; } }

/* chrome tab */





  .content-container{
    width: 35vw;
    height: 85vh;
    
  }

  .contents{
     width: 95%;
    height: 100%;
    

    border: 1.8px solid #B0B0B0;
    position: relative;

    border-radius: 5px;
    background-color: #F2F2F2;
    z-index: 999;

   box-shadow: 0px 10px 44px 10px rgba(0,0,0,0.1);
  }

   @media screen and (max-height: 875px) { .contents {  height: 98%; } }
  @media screen and (max-height: 800px) { .contents {  height: 95%; } }
  @media screen and (max-height: 775px) { .contents {  height: 93%; } }

  .replay-header-block{
     width: 95%;
    height: 120px;
    
    margin: 10px;
    border: 1.8px solid #B0B0B0;
    position: relative;

    border-radius: 5px;
    background-color: #F9F9F9;
    z-index: 999;

   box-shadow: 0px 10px 30px 5px rgba(0,0,0,0.1);
   position: relative;
  }

  .replay-name{
    width: 250px;
    height: 100px;

    font-size: 19px;
    position: absolute;

    margin: 15px;
  }

  .replay-time{
    width: 100px;
    height: 100%;

    font-size: 18px;
    
    position: absolute;

    right: -20px;
    margin-top: 10px;
    

    line-height: 50px;
  }

  .replay-driver{
    font-size: 14px;
    color: #c5c1c1;

    top: 40px;
    left: 15px;

    position: absolute;
  }

  .replay-dates{
    width: 100%;
    height: 40px;

    top: 70px;
    font-size: 13px;
    position: absolute;
  }

  .replay-downloaded{
    display: flex;
    margin: 5px;
    margin-left: 15px;

  }

  .replay-downloaded img{
    width: 13px;
    height: 13px;

    margin-right: 10px;
  }

  .replay-downloaded p{
    color: #819CFF;
  }

  .replay-modified{
    display: flex;
    margin: 5px;
    margin-left: 15px;

  }

  .replay-modified img{
    width: 13px;
    height: 13px;

    margin-right: 10px;
  }

  .replay-modified p{
    color: #797979;
  }

  .dir-divider{
    margin-left: 15px;
    margin-top: -50.5px;

    border:none;
    height: 20px;
    width: 100%;
    height: 50px;
   
    border-bottom: 1px solid #E3C7C7;
    box-shadow: 0 20px 20px -20px rgba(51, 51, 51, 0.214);

  }
</style>