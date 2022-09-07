<template>
  <div id="posistion">
    <div class="title">
      <img class="svg-icon" src="@/assets/fa-icons/folder-open.svg">
      <p class="label">Directories</p>
    </div>
    
    <div class="scrollable">
      <FolderView :node="root" />
    </div>

    
  </div>
</template>

<script>
import FolderView from '@/components/sidebar/directory/filetree/FolderView.vue'

export default {
  name: 'DirectorySelect',

  components:{
    FolderView
  },

  data(){
    return{

      root:{
       name:'Search',
        children:[
          {
           name: 'Downloaded',
           replay: 0,
           map:0,
           properties: false,
           children:[
             {
             name: 'hardtack',
              replay: 0,
              map:0,
              properties: false,
           },
           {
             name: 'twince',
              replay: 0,
              map:0,
              properties: false,
           }
           
           ]
         },
         {
           name: 'Autosavse',
           replay: 0,
           map:0,
           properties: false,
         },
         {
           name: 'CreatedGhost',
           replay: 0,
           map:0,
           properties: false,
           children:[
             {
              name: 'Temp',
              replay: 0,
              map:0,
              properties: false,
            },
            {
              name: 'AutosavedGhost',
              replay: 0,
              map:0,
              properties: false,
            },
            {
              name: 'test3-3',
              replay: 0,
              map:0,
              properties: false,
              children:[{
                name: 'test3-3-1',
                replay: 0,
                map:0,
                properties: false,
                children:[{
                name: 'test3-3-1',
                replay: 0,
                map:0,
                properties: false,
                
                 }]
              }]
            },
            {
              name: 'Temp',
              replay: 0,
              map:0,
              properties: false,
            },
           ]
           
         },
          {
           name: 'Test',
           replay: 0,
           map:0,
           properties: false,}

        ]
      }

    }
  }
}
</script>

<style scoped>
  #posistion{
    width: 100%;
    height: 60vh;

  }

  #posistion:hover{
   
    border-radius: 10px;
  }

  .title{
    width: 100%;
    display: flex;
   
    opacity: 0.6;

    padding: 10px;
     border: 0px solid rgb(211, 211, 211);
   transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
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

  .scrollable{
    width: 100%;
    height: 80%;

    overflow: auto;
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