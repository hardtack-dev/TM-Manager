<template>
  <div class="wrapper">
   <p class="title">Do something</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .wrapper{
    width: 20vw;
    height: 30px;

    border: 1px solid #E1E1E1;
    border-radius: 5px;
    background-color: #E1E1E1;

    margin: 8.5px;
    transition: 0.1s ease-in-out;
    
  }

  .wrapper:hover{
    border: 1px solid skyblue;

    transform: scale(1.005);
    cursor: pointer;
  }

  .title{
    margin-left: 10px;
    line-height: 30px;

    font-size: 13px;
  }
</style>