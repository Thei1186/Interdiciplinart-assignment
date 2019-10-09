<template>
    <div>
        <h1>Product Details</h1>
        {{product}}

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
            id: this.$route.params.id
        }
    },
    methods: {
        fetchProduct() {

          axios.get('https://actionfigureshop.azurewebsites.net/api/ActionFigure/' +  this.id)
            .then((data) => {
              this.product = data.data;

            });
        }
    }
  };
</script>
