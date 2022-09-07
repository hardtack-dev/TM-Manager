<template>
  <div class="wrapper">

    <div class="item i-rename" @click="ContextFunction(0, 'rename')">
      <img class="svg-icon" src="@/assets/fa-icons/edit.svg" alt="_">

      <div class="tooltip l-rename">
        <p class="label ">Rename this Category</p>
      </div>

    </div>
    
      


    <div class="item i-comment" @click="ContextFunction(2, 'comment')">
      <img class="svg-icon" src="@/assets/fa-icons/comment.svg" alt="_">

      <div class="tooltip l-comment">
        <p class="label ">Add Comments</p>
      </div>

    </div>
    


    <div class="item i-pin" @click="ContextFunction(1, 'pin')">
      <img class="svg-icon" src="@/assets/fa-icons/pin.svg" alt="_">

       <div class="tooltip l-pin">
        <p class="label ">Pin this Category</p>
      </div>
    </div>
   
      

    <div class="item i-delete" @click="ContextFunction(3, 'delete')">
      <img class="svg-icon" src="@/assets/fa-icons/delete.svg" alt="_"> 

      <div class="tooltip l-delete">
        <p class="label ">Delete</p>
      </div>

    </div>
    
      

  </div>
</template>

<script>
export default {
  name: 'ItemContextMenu',

  props:{
    display: Boolean
  },

  data(){
    return{
      left: 0,
      top: 0
    }
  },
 

  methods: {
    ContextFunction: (index, type)=>{
      console.log(index, type)
    },
  },
}
</script>

<style scoped>
  .wrapper{
    width: 10px;
    height: 80px;
    position: absolute;
   z-index: 999;
  }

  .item{
    width: 33px;
    height: 33px;

    background-color: rgb(65, 62, 62);
    border-radius: 17.5px;

    position: absolute;
    display: flex;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  .item:hover{
    transform: scale(1.05);
    border: 1px solid rgb(216, 216, 216);

    background-color: rgb(54, 54, 54);
  }

  

  .item:active{
    transform: scale(0.9);
  }


  .svg-icon{
     width: 13px;
    height: 13px;

    opacity: 0.6;
    display: block;


    padding: 9.5px;

    margin-right: 8px;
    filter: invert(100%) sepia(1%) saturate(3%) hue-rotate(252deg) brightness(103%) contrast(100%);
  }

  .item:hover .svg-icon{
     filter: invert(84%) sepia(62%) saturate(1091%) hue-rotate(173deg) brightness(96%) contrast(96%);
  }

  .i-delete:hover .svg-icon{
    filter: invert(43%) sepia(92%) saturate(1699%) hue-rotate(328deg) brightness(92%) contrast(104%);
  }

  .i-rename{ margin-left: 15px; }
  .i-comment{ margin: 35px; margin-top: 28px; margin-left: 40px; }
  .i-pin{ margin-top: 64px; margin-left: 40px;}
  .i-delete{ margin-top: 97px; margin-left: 15px; }

  .tooltip{
    height: 30px;
    display: none;

    background-color: rgb(65, 62, 62);
    border-radius: 15px;
    
    position: absolute;
    display: 0.3s ease-in-out;
  }

  .item:hover .tooltip{
    display: block;
  }

  .l-rename{ margin-left: 35px;  width: 140px; }

  .l-comment{ margin-left: 35px;}
  .l-comment .label{ width: 110px; }

  .l-pin{margin-left: 35px; }
  .l-pin .label{ width: 110px; }

  .l-delete{ margin-left: 35px; width: 60px;}
  .l-delete .label{ width: 50px; color: rgb(235, 46, 46);}

   .label{
    width: 140px;

    font-size: 12px;
    text-align: center;

    padding: 3px;

    line-height: 25px;
    color: rgb(200, 200, 200);

  }

 

  .shortcut{
    display: none;
  }

</style>