<template>
    <div class="container-fluid dark py-4 d-flex align-items-center">
        <div class="box d-flex flex-column justify-content-between">
<h1 class="text-center text-light ">
    Github User Repo App
</h1>

   
    <div class="d-flex deco">
        <router-link to="/repo">

<button class="fs-4 btn btn-success align-items-start justify-content-end deco">Get Started <i class="fa-solid fa-arrow-right"></i>  </button>


</router-link></div>

</div>
    </div>
</template>

<script setup>
    name: 'Home'
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 90vh;
    background-image: url('./asset/git.jpg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    
}
.dark{
 width: 100%;
    height: 100vh;
    background-color: black;
}
.deco{
    text-decoration: none;
}
</style>