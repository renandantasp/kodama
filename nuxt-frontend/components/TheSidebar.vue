<template>
  <nav class='sidebar'>
    <ul>
      <li>Home</li>
      <li>Reviews</li>
      <li>User_1231</li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  @import '@/assets/global.scss';


  .sidebar{
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 23px;
    background: $main-color;
    color: $secondary-color;
    padding-top: 46px;
    padding-left: 40px;
    width: 16rem;

    ul {
      li {
        margin-bottom: 18px;
      }
    }
  }

</style>