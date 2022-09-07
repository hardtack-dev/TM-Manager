<template>
  <div class="wrapper">
    <div class="item" @click="ContextFunction(0, 'rename')">
      <img class="svg-icon" src="@/assets/fa-icons/edit.svg" alt="_">
      <p class="label">Rename this Category</p>
      <p class="shortcut">Ctrl + R</p>
    </div>

    <hr class="divider"/>

    <div class="item" @click="ContextFunction(1, 'pin')">
      <img class="svg-icon" src="@/assets/fa-icons/pin.svg" alt="_">
      <p class="label">Pin this Category</p>
      <p class="shortcut">Alt + P</p>
    </div>

    <hr class="divider"/>

    <div class="item" @click="ContextFunction(2, 'comment')">
      <img class="svg-icon" src="@/assets/fa-icons/comment.svg" alt="_">
      <p class="label">Add Comments</p>
      <p class="shortcut">Alt + C</p>
    </div>

    <div class="item" @click="ContextFunction(3, 'style')">
      <img class="svg-icon" src="@/assets/fa-icons/style-edit.svg" alt="_">
      <p class="label">Edit style</p>
      <p class="shortcut">Alt + E</p>
    </div>

    <hr class="divider"/>

    <div class="item-delete" @click="ContextFunction(4, 'delete')">
      <img class="svg-icon" src="@/assets/fa-icons/delete.svg" alt="_">
      <p class="label">Delete this Category</p>
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
    width: 250px;
    height: 160px;

    background-color: #F1F1F1;
    border: 0.5px solid #acacac;
    border-radius: 8px;

    box-shadow: 0px 10px 11px 2px rgba(0,0,0,0.1);
    cursor: pointer;
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
    font-size: 13px;
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