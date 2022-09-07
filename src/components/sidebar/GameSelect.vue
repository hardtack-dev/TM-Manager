<template>
  <div 
   id="position"
   @click="toggleBox"
   >
    <img class="icon-image" src="@/assets/icon-tm2020.jpg" alt="TM_LOGO">
    <p class="name"> Trackmania Nations</p>
    <!-- icon -->
    <img class="svg-icon" src="@/assets/fa-icons/angle-down.svg">

    <transition name="dropdown">
      <div v-if="boxDropped == true" class="select-box">
        
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'GameSelect',

  data(){
    return{
      boxDropped: false,

      game_selected:{
        name: '',
        imgPath: ''
      },

      game_type:{
        'NOT_SELECTED':{
          name:'Select Game',
          imgPath: '@/assets/icon-game_select.jpg'
        },
        'TRACKMANIA_2020':{
          name: 'Trackmania',
          imgPath: '@/assets/icon-tm2020.jpg'
        },
        'TRACKMANIA_UNITED':{
          name: 'Trackmania United',
          imgPath: '@/assets/icon-tmuf.jpg'
        },
        'TRACKMANIA_NATIONS':{
          name: 'Trackmania Nations',
          imgPath: '@/assets/icon-tmnf.jpg'
        },
        'TRACKMANIA_ESWC':{
          name: 'Trackmania ESWC',
          imgPath: '@/assets/icon-eswc.jpg'
        }

      }


    }
  },
  methods:{
    toggleBox(){
      this.boxDropped = !this.boxDropped
    }

  }
}
</script>

<style scoped>
  #position{
    width: 100%;
    height:60px;

    display: flex;
    cursor: pointer;
    position: relative;

    transition: 0.2s ease-in-out;
    z-index: 999;
  }

  #position:hover{
    background-color: rgb(235, 235, 235);
  }

  .icon-image{
    width: 40px;
    height: 40px;

    display: block;
    border-radius: 10px;
    
    /* icon posistion */
    margin: 10px;
  }

  .name{
    display: inline;
    font-size: 16px;

    line-height: 60px;
    color: #000;
  }

  .svg-icon{
    width: 15px;
    height: 15px;

   
    opacity: 0.6;
    display: block;
    position: absolute;

    top: 22.5px;
    right: 20px;
  }

  .select-box{
    z-index: 999;
    width: 100%;
    height: 150px;

    align-content: center;

    top: 60px;
    margin-top: 0;
    position: absolute;
    background-color: #E7E7E7;

    box-shadow: -2px 7px 24px -4px rgba(0,0,0,0.29);
  }

  /* toggle animation */
  .dropdown-enter-active {
  transition: all .2s ease;
  }
  .dropdown-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .dropdown-enter, .dropdown-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-20px);
    opacity: 0;
  }
</style>