<template>
 <div>

  <main>

  <div id="shop_button_container">
   <div id="shop_button">
    <router-link to="/Products"><h1 id="shop">SHOP</h1></router-link> 
   </div>
  </div>

  <div class="slideshow-container">

 <v-carousel :show-arrows="false" cycle hide-delimiters height="1000px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  </div>
  <br>

  <div style="text-align:center">
   <span class="dot"></span>
   <span class="dot"></span>
   <span class="dot"></span>
  </div>
<!--
  <script>

  </script>
-->
  </main>


 </div>
</template>

<script>
export default {
    data () {
      return {
        items: [
          {
            src: 'https://images8.alphacoders.com/951/951939.jpg',
          },
          {
            src: 'https://www.tokkoro.com/picsup/5081081-marvel-comics-spider-man-spider-man-ps4.jpg',
          },
          {
            src: 'https://images8.alphacoders.com/514/514628.jpg',
          },
          
        ],
      }
    },
  }
</script>

<style>
body {
    background-color: rgb(255, 196, 0);;
    margin: 0;
}

#shop_button_container {
    display: flex;
    left:45%;
    top:70%;
    position: absolute;
    z-index: 9999;
}
#shop_button {
    height: 80px;
    width: 180px;
    background-color: rgb(180, 27, 27);
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 25px;
    border: 3px solid white;
    padding: 0 105px 0 0;
}

a {
    text-decoration: none;
    font-family: 'Bangers';
    font-size: 25px;
    color:rgb(255, 196, 0);
}

#shop {
  margin: 0 0 0 100px;
}

/* Slideshow container */
.slideshow-container {
    position: relative;
    margin: auto;
    max-width: 1920px;
  }
  
  
  /* Number text (1/3 etc) */
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }
  
  /* The dots/bullets/indicators 
  .dot {
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 3s ease;
  }
  */
  
  /* Fading animation */
  .fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 10s;
    animation-name: fade;
    animation-duration: 10s;
  }
  
  @-webkit-keyframes fade {
    from {opacity: .75} 
    to {opacity: 1}
  }
  
  @keyframes fade {
    from {opacity: .75} 
    to {opacity: 1}
  }
  
  /* On smaller screens, decrease text size */
  @media only screen and (max-width: 300px) {
    .text {font-size: 11px}
  }

  footer{
    height: 100px;
    width: 100%;
    background-color:rgb(255, 196, 0);
    position: absolute;
    z-index: 99999;
    text-align: center;
    padding: 15px 0 0 0;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: rgb(156, 17, 17);   
}

main{
  height: 800px;
  width: 100%;
  margin: 0;
  }

  .v-responsive__content {
    max-width: 100%;
    
  }
</style>


