<template>
  <div id="app">
<my-header></my-header>
    <div id="nav">
      <!--
          <div id="social_link">
        <a href="https://www.facebook.com/groups/DCActionFigures/"><i class="fa fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/explore/tags/actionfigures/"><i class="fa fa-instagram"></i></a>
     </div>

     <div id="logo">
         <a href="index1.html"></i>Action Figure Shop</a>
      </div>

      <div id="cart">
          <a href="cart.html"><i class="fa fa-shopping-cart"></i></a>
     </div>


      -->



    </div>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  name: 'App',
  components: {'my-header':Header},
  data: () => ({
    //
  }),


};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  * {box-sizing: border-box;}
  body {font-family: Verdana, sans-serif;}
  .mySlides {display: none;}
  img {vertical-align: middle;}
</style>
