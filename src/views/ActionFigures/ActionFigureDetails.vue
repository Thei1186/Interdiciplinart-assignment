<template>
    <div>
    <main>
        <div id="page">
            <div class="largeproductbox" >
                <div id="largeimgbox">
                    <img v-bind:src="product.pathImage" alt="">
                </div>

            </div>

            <div id="description">
                <h1>{{product.name}}</h1>
                <p>Material: {{product.material}}</p>
                <p>Color: {{product.color}}</p>
                <p>Weight: {{product.weight}}</p>
                <div id="size_price_basket">
                    <div id="size">
                            <h2>Size</h2>
                        <select id="størrelse">
                                <option value="10 cm">10 cm</option>
                                <option value="25 cm">25 cm</option>
                                <option value="40 cm">40 cm</option>
                        </select>
                    </div>

                    <div id="price">
                        <h2>Price</h2>
                        <p> {{product.price}}</p>
                    </div>

                    <div id="put_in_basket">
                            <a v-on:click="addToBasket"><h3>Put in basket</h3></a>
                            <a><img src="https://www.onlygfx.com/wp-content/uploads/2017/06/comic-boom-explosion-2-1.png" height="175px" width="200px" alt=""></a>
                    </div>     

                </div>
        
            </div>
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
        this.fetchProduct();
    },
    data () {
       return {
           product: {},
           basket: [],
            id: this.$route.params.id
        }
    },
    methods: {
        fetchProduct() {

          axios.get('https://actionfigureshop.azurewebsites.net/api/ActionFigure/' +  this.id)
            .then((data) => {
              this.product = data.data;

            });
        },
        addToBasket () {
            if(!localStorage.getItem('basket') || localStorage.getItem('basket') === '') {
                localStorage.setItem('basket', JSON.stringify([]))
            }
            let basket = JSON.parse(localStorage.getItem('basket'));
            basket.push(this.product);
            localStorage.setItem('basket', JSON.stringify(basket))
            this.$router.push({name:'cart'})
        }
    }
  };
</script>

<style>

body{
background-color: antiquewhite;
margin: 0 auto;

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
    height: 500px;
    background-color: white;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
}

.largeproductbox{
    height: 400px;
    width: 350px;
    background-color:  rgb(156, 17, 17);
    margin: 35px;
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    
    
}

#largeimgbox{
    height: 390px;
    width: 340px;
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
    padding: 20px 0 0 0;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: rgb(156, 17, 17);
    
}

#largeimgbox img{
    height: 390px;
    width: 340px;
}

#description {
    height: 600px;
    width: 550px;
    margin: 35px 0 0 400px;
    position: absolute;
    justify-content: center;
    padding: 0;
}

h1 {
    font-size: 3em;
    margin: 0;
    font-family: 'Bangers';
    color: rgb(255, 196, 0);
}

#description p {
    font-size: 1em;
    margin: 10px 20px 0 20px;
    font: inherit;
}


#put_in_basket {
    height: 150px;
    width: 200px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 25px;
    margin: 0 0 0 0;
}

#put_in_basket img{
height: 150px;
width: 200px;
margin-top: 30px;
}

#put_in_basket h3{
    margin: 0 0 0 50px;
    font-family: 'Bangers';
    color: rgb(156, 17, 17);
    font-size: 20px;
    position: absolute;
}

#size_price_basket {
    height: 115px;
    width: 100%;
    display: flex;
    margin: 120px 0 0 0;
    justify-content: space-around;
}

#størrelse {
    margin: 10px 0 0 25px;
    border: 1px solid black;
    
}


</style>