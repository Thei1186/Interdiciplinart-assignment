<template>
    <div>
    <header>
    <div id="social_link">
        <a href="https://www.facebook.com/groups/DCActionFigures/"><i class="fa fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/explore/tags/actionfigures/"><i class="fa fa-instagram"></i></a>
    </div>

    <div id="logo">
        <a href="index1.html">Action Figure Shop</a>
    </div>

    <div id="cart">
        <a href="cart.html"><i class="fa fa-shopping-cart"></i></a>
    </div>
    </header>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
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

    body {
        background-color: rgb(255, 196, 0);;
        margin: 0;
    }
</style>