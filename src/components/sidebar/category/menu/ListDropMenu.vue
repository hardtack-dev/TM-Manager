<template>
  <div class="wrapper">
    <div class="item" @click="ContextFunction(0, 'create')">
      <img class="svg-icon" src="@/assets/fa-icons/create.svg" alt="_">
      <p class="label">Create New Category</p>
      <p class="shortcut">Ctrl + N</p>
    </div>

    <hr class="divider"/>

    <div class="item" @click="ContextFunction(2, 'search')">
      <img class="svg-icon" src="@/assets/fa-icons/search.svg" alt="_">
      <p class="label">Search Category</p>
      <p class="shortcut">Ctrl + F</p>
    </div>

    <div class="item" @click="ContextFunction(1, 'multiple')">
      <img class="svg-icon" src="@/assets/fa-icons/multiple.svg" alt="_">
      <p class="label">Select Multiple Categories</p>
      <p class="shortcut">Alt + P</p>
    </div>

    <hr class="divider"/>
    <hr class="divider"/>

    <div class="item-delete" @click="ContextFunction(4, 'delete-all')">
      <img class="svg-icon" src="@/assets/fa-icons/delete.svg" alt="_">
      <p class="label">Delete All Categories</p>
      <p class="shortcut">Ctrl + Del</p>
    </div>
      
  </div>


</template>

<script>
export default {
  name: 'ItemContextMenu',

  return(){

  },

  methods: {
    ContextFunction: (index, type)=>{
      console.log(index, type)
    }
  },
}
</script>

<style scoped>

  .wrapper{
    width: 20vw;
    height: 135px;

    background-color: #F1F1F1;
    border-radius: 8px;

    border: 1px solid rgba(0, 0, 0, 0.287);
    box-shadow: 0px -10px 51px -3px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: 0.1s ease-in-out;
    z-index: 0;
  }

  .divider{
    width: 90%;
    margin: 0 auto;

    border: none;
    height: 0.5px;
    background-color: #C4C4C4;
    opacity: 0.8;
  }

  .item{
    display: flex;

    margin: 1px;
    padding: 7px 8px;
    border-radius: 6px;
    transition: 0.1s ease-in-out;
    
    position: relative;
  }

  .item:hover{
    background-color: rgb(226, 226, 226);
    transform: scale(0.99);
  }

  .item:hover > .label{
    color: rgb(98, 63, 193);
  }

  .item:active{
    transform: scale(0.97);
  }


  .svg-icon{
    width: 13px;
    height: 13px;

   
    opacity: 0.6;
    display: block;
    
    
    margin-right: 8px;
  }

  .label{
    font-size: 12px;
  }

  .shortcut{
    font-size: 12px;
    position: absolute;
    right: 8px;

    opacity: 0.5;
  }

  .item-delete{
    display: flex;

    margin: 1px;
    padding: 7px 8px;
    border-radius: 6px;
    transition: 0.1s ease-in-out;
    
    position: relative;
    margin-top: 5px;

    color: rgb(240, 98, 98);
  }

  .item-delete:hover{
    background-color: rgb(240, 98, 98);
    transform: scale(0.99);

    color: white;
  }

  .item-delete:active{
    transform: scale(0.97);
  }

  .item-delete:hover img{
    filter: invert(100%) sepia(0%) saturate(7486%) hue-rotate(113deg) brightness(102%) contrast(97%);
  }
</style>