<template>
    <div>
        <h1>Product list</h1>
        <ul>
            <li v-for="product in products"
                v-bind:key="product.Id">{{"Product name:" + product.name + " Price:" + product.price + "  Weight:" + product.weight + " Material:" + product.material}}</li>
            <li> product</li>
        </ul>

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
