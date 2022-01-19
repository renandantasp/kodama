<template>
    <nav class="navbar">
      <button  class='item title'> KODAMA </button>

      
      <font-awesome-icon class='search_icon' :icon="['fa', 'search']"/>
      <input class='item' type='text' placeholder="Search for games">

      <div class="item">
        <img  class="item profile" src="/profile.jpg" alt="profile" />
        <p> My library</p>
        <font-awesome-icon class='item icon' :icon="['fa', 'bell']"  />
        <font-awesome-icon class='item icon' :icon="['fa', 'plus']"  />
        <font-awesome-icon class='item icon' :icon="['fa', 'ellipsis-h']"  />
      </div>
    </nav>
</template>

<style lang="scss" >
  @import '@/assets/global.scss';

  .navbar {
 
    // position:absolute;
    display: flex;
    width: 100%;
    flex-direction: row;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 22px;
    padding-right: 1.5vw;
    justify-content: space-between;
    align-items: center;
    background: $main-color;
    color: $secondary-color;

    
    .search_icon{
      transform: translateX(30px);
      z-index: 1;
      transition: 0.25s ease;
    }


    input {
      font-family: 'Open Sans';
      font-size: 14px;
      background: $main-color-var;
      color: $main-color-var;
      transform: translateY(-1px);
      padding-left:40px;
      height: 40px;
      flex:1;
      border-radius: 50px;
      margin-right: 5vw;
      transition: 0.25s ease;

      &::-webkit-input-placeholder {
          color: #aaaaaa;
          
      }

      &:hover, &:focus {
        outline: none;
        color: $main-color-var;
        background: $secondary-color-var;
        &::-webkit-input-placeholder {
          color: #505050;
        }

       
      }
    }

    .item{
      &.profile{
        border-radius: 50%;
      }
      p{
        font-family: 'Open Sans';
        font-weight: 400;
      }
      &.title{
        font-family: 'Poppins';
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 0.15em;
        margin-left: 18px;
        margin-right: 3vw;
      }
    }

    div.item{
      display:flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      .item {
        margin-left: 12px;
        margin-right: 12px;
        width: 35px;
        width: 35px;
      
        &.icon {
          width:  20px;
          height: 20px;
        }
      }
    }
}

</style>
