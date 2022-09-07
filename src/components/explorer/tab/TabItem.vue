<template>
  <div 
  @click="$emit('input', id), console(id)" 
  :class="[selected, 'item']"
  >
    
  
  <!-- <div v-show="selected" class="wrap-line" ></div> -->
  

    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    label: String,
    value: Number
  },

  data(){
    return{
      active: false
    }
  },
  computed: {
    selected() {
      return this.value === this.id ? 'css-selected' : false
    //this option return 'css-selected'(true state,  so style will be activeted) when value and id is equaled
    }
  },

  methods:{
    console(id){
      console.log(id)

    }

  }
}
</script>

<style scoped>
.item{
  position: relative;
 
  height: 35px;
  padding: 0 15px;

  margin: 5px;

  border-radius: 7.5px;
  border: 1px solid #B2AAAA;
  background-color: #D8D8D8;
  

  line-height: 33.5px;
  
  font-size: 13px;
  cursor: pointer;

  transition: 0.1s ease-in-out;
  color: #767171;
}

.item:hover{
  background-color: rgb(211, 211, 211);
}

.css-selected {
  background-color: #7CCA84;
  border: 1px solid #599E48;

  color: white;
}


.css-selected:hover{
  background-color: rgb(134, 177, 91);
 
}

.css-selected:hover .wrap-line{
  background-color: #F2F2F2;
}

.wrap-line{
  position: absolute;

  width: 99%;
  height: 15px;

  margin-top: -10px;
  margin-left: -15px;

  background-color: #F2F2F2;
  z-index: 999;
  transition: 0.3s ease-in-out;
}


</style>