<template>
    <div class="container-fluid box">
<div class="text-light fs-4  p-3">
<router-link to="/">
    <i class="fa-solid fa-arrow-left"></i>
    </router-link>
</div>
<div class="m-3 d-flex align-items-center justify-content-center">
<img src="../asset/gitlogo.jpg" class="rounded  img d-block" alt="git-logo" />
<h1 class="text-light px-3"> Github User Repo App</h1>
</div>
<form @submit.prevent class="d-grid justify-content-center flex-sm-column">
<input type="text" v-model="Username" placeholder="Username" class=" form-control-lg text-secondary my-5 px-4" />
<button class="btn btn-light btn-sm rounded-pill fw-bold fs-4 px-5" @click="sendreq">Login</button>
</form>
<p v-if="isLoading" class="text-light fs-3">Loading... </p>

    </div>
</template>

<script setup>
import axios from 'axios';
import { computed, ref } from 'vue';
import Home from '../home.vue';
import User from '../user.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
name: 'gitData'
component: {
    Home
    User
}
const store = useStore();
const username = ref('');
const isLoading = ref(false);
const router = useRouter();


const sendreq = () => {
    store.dispatch("fetchUsers")
    router.push({
    path: '/users'
})

}
const Username = computed({
  get() {
    return store.getters.getUsername;
  },
  set(username) {
    return store.dispatch("setUsername", username);
  },
})
</script>

<style lang="scss" scoped>
.box{
    height: 100vh;
    background-color: black;
}
.img{
    width: 6%;
}
li{
    list-style: none;
}
</style>