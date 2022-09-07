<template>
  <div class="layout">
    <GameSelect class="priority-1" />
    <CategorySelect class="priority-2" />
    <DirectorySelect class="priority-3" />
  </div>
</template>

<script>
import GameSelect from '@/components/sidebar/GameSelect.vue'
import CategorySelect from '@/components/sidebar/CategorySelect.vue'
import DirectorySelect from '@/components/sidebar/DirectorySelect.vue'



export default {
    name:'MainSideBar',
    components:{
      GameSelect,
      CategorySelect,
      DirectorySelect,
      
    }
}
</script>

<style scoped>
  .layout{
    width: 22vw;
    height: 100%;
    
    border-right: 1px solid #D6D6D6;
  }

  .priority-1{ z-index: 999; }
  .priority-2{ z-index: 888; }
  .priority-3{ z-index: 777; }
</style>