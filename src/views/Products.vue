<template>
  <div class="about">


    <main>
      <div id="page">
        <router-link :to="{ path: '/ActionFigures/'+ product.id}" v-for="product in products"  v-bind:key="product.Id">
          <div class="productbox" >
          <div id="imgbox">
            <img v-bind:src="product.pathImage" alt="">

          </div>
          <div id="titel">
            {{product.name}}
          </div>

        </div></router-link>

      </div>

    </main>

    <footer>
      <p>2019 Interdisciplinary Project CS & MMD</p>

      <p>Tobias, Signe, Suong, Theis, Andreas</p>

    </footer>

  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    mounted() {
      this.fetchProducts()
    },
    data: ()  => ({
      products: []
    }),
    methods: {
      fetchProducts() {

        axios.get('https://actionfigureshop.azurewebsites.net/api/ActionFigure')
                .then((data) => {
                  this.products = data.data;
                });

      }
    }
  };
</script>


<style>

  body{
    background-color: antiquewhite;
    margin: 0 auto;

  }

  header{
    background-color: rgb(156, 17, 17);
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }


  i.fa.fa-facebook-square, i.fa.fa-instagram, i.fa.fa-shopping-cart{
    font-size: 30px;
  }

  #logo{
    width: 60%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;

  }

  #logo a{
    text-decoration: none;
    font-family: 'Bangers';
    font-size: 50px;
    color:rgb(255, 196, 0);
  }

  #social_link{
    width: 20%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0 245px 0 10px;
  }

  #social_link a{
    color: #faf9f5;
  }

  #cart{
    width: 20%;
    display: flex;
    box-sizing: border-box;
    justify-content: flex-end;
    padding: 0 10px 0 0;
  }

  #cart a{
    color:#faf9f5;
  }

  main{
    height: 1000px;
    width: 100%;
    background-image: url(https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1553296372975-3P4KR6HVXSOOUA8XE2JR/ke17ZwdGBToddI8pDm48kB1t1Isis0lgscdrovTwOM4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dom4-lnVJTnqGgXRGtZ7HSLM75ZQo53zn3vN1J68RrkNOpYghpI-Ha_TwZsqqmJXng/marvel_comics.jpg?format=2500w);
    background-repeat: repeat-y;
    background-size: 100%;
    background-color: #c6345b;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
  }

  #page{
    margin: 100px 0 0 0;
    width: 960px;
    height: 700px;
    background-color: white;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  #page a{
    text-decoration: none;
  }

  .productbox{
    height: 270px;
    width: 250px;
    background-color:  rgb(156, 17, 17);
    margin: 35px;
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    transition: transform .5s;
  }

  .productbox:hover{
    -ms-transform: scale(1.2); /* IE 9 */
    -webkit-transform: scale(1.2); /* Safari 3-8 */
    transform: scale(1.2);
  }




  #imgbox{
    width: 250px;
    height: 230px;
    background-color: rgb(110, 90, 90);
    margin: 5px;
  }

  #titel{
    font-family: 'Bangers';
    font-size: 26px;
    color: rgb(255, 196, 0);
  }

  footer{
    height: 100px;
    width: 100%;
    background-color:rgb(255, 196, 0);
    position: absolute;
    z-index: 99999;
    text-align: center;
    padding: 5 px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: rgb(156, 17, 17);

  }

  #imgbox img{
    height: 230px;
    width: 240px;
  }

</style>