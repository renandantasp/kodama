<template>
  <div class="card">
    <img :src="game.background_image">
    <div class="info">
      <div class='upper-row'>
        <div class='platforms'>
          <div v-for="plat in getPlatform()" :key="plat">
            <font-awesome-icon v-if="plat=='playstation'" class='item icon' :icon="['fab', 'playstation']"  />
            <font-awesome-icon v-if="plat=='xbox'" class='item icon' :icon="['fab', 'xbox']"  />
            <font-awesome-icon v-if="plat=='pc'" class='item icon' :icon="['fab', 'windows']"  />        
          </div>
        </div>
        <p>{{game.metacritic}}</p>
      </div>
      <h1>{{game.name}}</h1>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @import '@/assets/global.scss';
  .card{
    background: $main-color-alt;
    border-radius:10px;
    margin-left: 5px;
    margin-bottom: 20px;
    min-width: 380px;
    min-height: 200px;

    img {
      border-radius:10px 10px 0px 0px;
      width: 100%;
      max-height: max(10rem, 15vh);
      object-fit: cover;
      // mix-blend-mode: overlay;
      aspect-ratio: 16/9;
    }
    .info {
      text-align: start;
      padding: 20px;
      padding-top: 15px;
      padding-bottom: 50px;
    
      h1 {
        font-family: 'Roboto Slab';
        font-weight: 600;
        font-size:24px;
      }

      .upper-row {
        // border: 1px solid red;
        display: flex;
        justify-content: space-between;

        p{
          border: 1px solid white;
          border-radius: 5px;
          padding:0px 6px 0px 6px;
          color: white;
          font-family: 'Open Sans';
          font-weight: 600;
        }

        .platforms{
          // border: 1px solid yellow;
          div {
            margin-right: 7px;
          }
          display: flex;
          
        }
      }

    }
  }

</style>

<script>
export default {
  props:{
    game:{type:Object,required:true}
  },
  methods: {
    getPlatform(){
      return this.game.parent_platforms?.map((plats) => plats.platform.slug) || ''
    }
  }
}
</script>