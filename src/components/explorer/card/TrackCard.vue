<template>
  <div class="wrapper">
    <img class="thumbnail" src="@/assets/test/EndOfTime.jpg" alt="">
    <div class="properties">
      <p class="title">End of Time</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .wrapper{
    width: 230px;
    height: 230px;

    background-color: #E7E7E7;
    border-radius: 13px;

    margin: 15px;
    border: 2px solid #BABABA;
    cursor: pointer;

    position: relative;
    transition: 0.2s ease-in-out;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  }

  .wrapper:hover{
    transform: scale(0.99);
    border: 2px solid #9A92F6;
    color: #9C4EFF;
  }

  .wrapper:hover .thumbnail{
     filter: blur(2px);
    transform: scale(0.995);
  }

  .wrapper:active{
    transform: scale(0.97);
  }

  .thumbnail{
    width: 229.01px;
    height: 230px;
  
    
    border-radius: 12px;

    position: absolute;
    transition: 0.1s ease-in-out;
  }

  .properties{
    display: block;
    position: absolute;

    width: 99.5%;
    height: 60px;

    bottom: 0;
    border-radius: 10px;
    margin-top: 1px;

    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    background-color: #E7E7E7;

    border-top: 1px solid rgb(90, 90, 90);

    
  }

  .title{
    font-size: 18px;
    
    margin: 5px;
    margin-top: 8px;

    
  }


  
</style>