<template>
  <div class="main">
    <h1>Lorem ipsum dolor</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div class="flex-list">
      <GameCard v-for="game in data" :key="game.key" :game="game" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main {
    text-align: start;
  }
  h1{
    font-family: 'Open Sans';
    font-weight: 800;
    text-align: start;
    font-size: 68px;
    margin-left: 20px;
  }
  p {
    text-align: start;
    margin-left: 25px;
    margin-bottom: 20px;
    font-family: 'Open Sans';
    font-weight: 400;
  }
  .flex-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>

<script>
import GameCard from '@/components/GameCard.vue'

export default {
  components:{
    GameCard
  },
  data() {
    return {
      data:'',
    }
  },
  async created(){
    await this.$axios.get(`${process.env.rawgUrl}games${process.env.rawgKey}`)
    .then(res => this.data = res.data.results)
    
    }
  }

</script>