<template>
 <div class="main">
   <GameList />
 </div>
</template>

<script>
  import GameList from '@/components/GameList.vue'
  export default {
    layout:'main',
    name: 'IndexPage',
    components:{
      GameList
    }
  }
</script>


<style lang="scss" scoped>
@import '@/assets/global.scss';

.main {
  // border: 1px solid green;
  background: $main-color;
  color:$secondary-color;
  text-align: center;
  width: 100%;
}

@layer components {
  .content {
    @apply my-4;
    @apply mx-4;
  }
}
</style>

