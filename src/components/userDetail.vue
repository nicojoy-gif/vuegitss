<template>  
    <div class="bg-dark box text-light p-5 d-flex flex-column justify-content-center align-items-center">
        <h1 class='text-center pb-5'>GIT REPOSITORY USER'S DETAIL</h1>
        <div class="card" style="width: 20rem;">
        
  <img src='./asset/github-logo (1).png' class="card-img-top" alt="...">
  <div class="card-body bg-dark">
    <p class="card-text fs-3 text-uppercase fw-bold m-0">
 {{ Userdetail.name }}
    </p>
    
    <p>This Profile has no bio</p>
    <div class="container ">
  <div class="row">
    <div class="col">
      Size
    </div>
    <div class="col">
      Forks
    </div>
    <div class="col">
    Issues
    </div>
  </div>
  <div class="row">
    <div class="col">
      {{ Userdetail.size }}
    </div>
    <div class="col">
      {{ Userdetail.forks }}    </div>
    <div class="col">
      {{ Userdetail.has_issues }}    </div>
  </div>
</div>
   
  </div>
</div>
         
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
const store = useStore();
const route = useRoute();
const Userdetail = ref('');
const id = route.params.name;
const username = computed(() => {
    return store.getters.getUsers
})


const url = 'https://api.github.com'


const Username = computed({
  get() {
    return store.getters.getUsername;
  },
  set(username) {
    return store.dispatch("setUsername", username);
  },
})
onMounted(() => {
axios.get(url + '/repos/' + Username.value + '/' + id)
    .then(res => {
        Userdetail.value = res.data
        
    })
        .catch((err) => {
            console.log(err)
        })
}
)

</script>

<style lang="scss" scoped>


.bg{
    background-color: #2B3467;
}
.imgList{
    width: 200px;
    height: 200px;
    min-width: 25px;
}
.box{
    height: 100vh;
}
</style>