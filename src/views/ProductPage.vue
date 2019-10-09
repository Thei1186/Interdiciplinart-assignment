<Template>
<div>
    <main>
        <div id="page">
            <div class="productbox" v-for="product in products" v-bind:key="product.Id">
                <div id="imgbox">
                    <img src={{product.pathImage}} alt="">
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
                            <h3>Put in basket</h3>
                            <a href=""><img src="https://www.onlygfx.com/wp-content/uploads/2017/06/comic-boom-explosion-2-1.png" height="175px" width="200px" alt=""></a>
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
</Template>

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

</style>