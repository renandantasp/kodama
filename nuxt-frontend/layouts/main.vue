<template>
  <div>
    <TheNavbar />
    <div class="main">
      <TheSidebar />
      <nuxt class="content" />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width:99vw;
  .content { margin:0px; }
}
</style>


<script>
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'
export default {
  components:{
    TheNavbar,
    TheSidebar
  }
}
</script>