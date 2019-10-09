<template>
<div>
    <main>
        <div id="page">
            <div class="productbox" v-for="product in products" v-bind:key="product.Id">
                <div id="imgbox">
                    <img v-bind:src="product.pathImage" alt="">

                </div>
            </div>
            <div id="description">
                <h1>IRON MAN</h1>
                    <p>This is a description of the product. This is a description of the product.
                        This is a description of the product. This is a description of the product.
                        This is a description of the product. This is a description of the product. This is a description of the product. This is a description of the product.
                    </p>
                    <div id="size_price_basket">
                        <h2 id="size">Size</h2>
                        <select>
                            <option value="10 cm">10 cm</option>
                            <option value="25 cm">25 cm</option>
                            <option value="40 cm">40 cm</option>
                        </select>
                        <h2 id="price">Price</h2>
                        <div id="put_in_basket">
                            <router-link to"/Cart"><h3>Put in basket</h3></router-link>
                            <router-link to="/Cart"><img src="https://www.onlygfx.com/wp-content/uploads/2017/06/comic-boom-explosion-2-1.png" height="175px" width="200px" alt=""></router-link>
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
            this.fetchProducts()
        },
        name:"ProductPage",
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
        },
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
        height: 500px;
        background-color: white;
        display: flex;
        box-sizing: border-box;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
    }

    .productbox{
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

    #imgbox{
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

    #imgbox img{
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
        margin: 0 0 0 37.5%;
        font-family: 'Bangers';
        color: rgb(255, 196, 0);
    }

    #description p {
        font-size: 1em;
        margin: 40px 20px 0 20px;
    }

    select {
        margin: 75px 0 0 -150px;
    }

    #size {
    }

    #price {
    }

    #put_in_basket {
        height: 100px;
        width: 125px;
        justify-content: center;
        align-items: center;
        display: flex;
        border-radius: 25px;
        margin: 10px 0 0 0;
    }

    h3 {
        margin: -5px 0 0 -2.5px;
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

</style>