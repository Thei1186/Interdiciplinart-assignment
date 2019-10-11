<template>
    <div>
        <main>
            <div id="page">
                <div v-for="product in basket" v-bind:key="product.id">
                </div>
                <div id="product_item-whitebox">

                </div>
                <div id="product_item" v-for="product in basket" v-bind:key="product.id">
                    <div id="picturebox" >
                        <img v-bind:src="product.pathImage" :alt = "product.name">
                    </div>
                    <h4>
                        <router-link :to="{ path: '/ActionFigures/'+ product.id}"><a>{{product.name}}</a></router-link>
                        <p>Material: {{product.material}},
                            Color: {{product.color}},
                            Weight: {{product.weight}}</p>
                    </h4>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    
                    <h3>Price</h3>
                    <h3>{{product.price}}</h3>

                </div>


                <div id="product_item-whitebox"></div>
                <div id="product_item-whitebox_2">
                    <div id="empty_box"></div>
                    <div id="total">
                        <h5></h5>
                        <h5></h5>
                        <h5>Price</h5>
                        <h5> {{totalPrice}}</h5>
                        <h5> Delivery</h5>
                        <h5>Free delivery</h5>
                        <h5>Subtotal</h5>
                        <h5> {{totalPrice}}</h5>
                        
                    </div>

                </div>
                <div id="payment">
                    <a v-on:click="order"><h3 id="checkout">Checkout</h3></a>
                    <a v-on:click="order"><img src="data:image/png;base64,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" height="80px" width="170px" alt=""></a>
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
    export default {
        mounted() {
            this.fetchProducts()
        },
        data: ()  => ({
            basket: [],
            totalPrice:0
        }),
        methods: {
            fetchProducts() {
                if(!localStorage.getItem('basket') || localStorage.getItem('basket') === '') {
                    localStorage.setItem('basket', JSON.stringify([]))
                }
                this.basket = JSON.parse(localStorage.getItem('basket'));
                this.basket.forEach(product => {
                    this.totalPrice += product.price
                })

            },
            order() {
                localStorage.setItem('basket', JSON.stringify([]))
                this.basket = [];
                this.totalPrice = 0;
            },

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
        height: 1000px;
        background-color: white;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 110px 110px 110px 110px 50px 110px;


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

    #product_item {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
        grid-gap: 29px;
        border-style: outset;
        background-color: white;
    }


    #product_item-whitebox {
        height: 110px;
    }

    #product_item-whitebox_2 {
        height: 150px;
        width: 100%;
        background-color: white;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }

    #picturebox {
        background-color: rgb(110, 90, 90);
        height: 90px;
        width: 90px;
        margin-left: 30px;
        border-style: solid;
        border-color: rgb(156, 17, 17);
        margin-top: 2.5px;
        position: relative;
    }

    #total {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-template-rows: 40px 40px 40px 40px 40px;
        font-weight: bold;
        border-bottom: 5px solid rgb(156, 17, 17);
    }

    button {
        height: 10px;
        width: 10px;
        margin-top: 40px;
        margin-left: 10px;
    }

    .close {
        justify-content: center;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    select {
        height: 20px;
        width: 70px;
        margin: 30px 0 0 0;
        
        
    }

    h3 {
        text-align: center;
        text-align: justify;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        margin: 30px 30px 0 0;
    }

    h4 {
        font-family: 'Bangers';
        color: rgb(0, 0, 0);
        margin: 25px 0 0 0;

    }

    h4 a{
        text-decoration: none;
        color: rgb(255, 196, 0);
        font-size: 22px;
        margin: 25px 0 0 0;
    }

    p {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-size: 12px;
        
    }

    footer p{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 16px;

    }

    #empty_box {
        height: 150px;
    }

    #payment {

        text-align: center;
        margin: 100px 0 0 600px;

    }

    #checkout {
        position: absolute;
        margin: 60px 0 0 35px;
        font-family: 'Bangers';
        font-size: 30px;
        text-decoration: none;
        color: black;

    }
</style>