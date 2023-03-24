<template>
<p v-if="isLoading">Loading</p>    
    <div class="bg-dark text-light p-5 ">
        <h1 class='text-center pb-5'>GIT REPOSITORY</h1>
    <div class="d-flex flex-wrap justify-content-center">    
<ul v-for="results in getUsers" :key="results" class="d-flex flex-column">
<li class=" d-flex align-items-center flex-column justify-content-center rounded-5 border border-primary-subtle p-3 ">
<img src='./asset/github-octocat.png' class="imgList img-thumbnail  rounded-circle "/>

<div class=" px-3 fw-bold ">
<p class="p-0 m-0 fs-4 text-center">
    <router-link :to="{params: {name: results.name}, name: 'Userdetail'}" > {{ results.name }}
    </router-link></p>

</div>
</li>
</ul>
</div>
</div>

</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
   name: 'User'
const store = useStore();
const route = useRoute();
const isLoading = ref(true);
const getUsers = computed(() => {
    return store.getters.getUsers
});

const users = computed(() => {
    return store.state.users
});


onMounted(() => {
    store.dispatch("fetchUsers")
    isLoading.value = false;
    

})
</script>

<style scoped>

li{
    list-style: none;
    width: 315px;
    height: 315px;
}

.bg{
    background-color: #2B3467;
}
.imgList{
    width: 200px;
    height: 200px;
    min-width: 25px;
}
</style>