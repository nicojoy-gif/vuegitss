<template>
    <ul>
<li>
    <button 
    type="button"
    @click="onClickFirstPage"
    :disabled="isInFirstPage">
First
    </button>
</li>
<li>
    <button type="button"
    @click="onClickLastPage"
    :disabled="isInFirstPage">
Previous
    </button>
</li>
<li v-for="page in pages"
      :key="page.name" >
      <button
        type="button"
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled">
        { page.name }
      </button>
    </li>

<li>
    <button type="button"
    @click="onClickNextPage"
        :disabled="isInLastPage">
Next
    </button>
</li>
<li>
    <button type="button"
     @click="onClickLastPage"
        :disabled="isInLastPage">
Last
    </button>
</li>
    </ul>
</template>

<script setup>
import { computed } from "vue";
    name: 'Pagination'
const props = defineProps({
    maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3
    },
    totalPages: {
        type: Number,
        required: true
    },
    perPage: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    }
});
const onClickFirstPage = () =>{
      emit('pagechanged', 1);
    }
   const onClickPreviousPage = ()=> {
      emit('pagechanged', currentPage - 1);
    }
   const onClickPage = (page)=>{
      emit('pagechanged', page);
    }
const onClickNextPage=() =>{
      emit('pagechanged', currentPage + 1);
    }
    const onClickLastPage=()=>{
      emit('pagechanged', totalPages);
    }
  

computed({
    startPage() {
        if (currentPage === 1) {
            return 1;
        }

        if (currentPage === totalPages) {
            return totalPages - maxVisibleButtons
        }
        return currentPage - 1;
    },
    pages() {
        const range = [];

        for (
            let i = startPage;
            i <= Math.min(startPage + maxVisibleButtons - 1, totalPages);
            i++
        ) {
            range.push({
                name: i,
                isDisabled: i === currentPage
            });
        }
        return range
    },
    isInFirstPage() {
        return currentPage === 1;
    },
    isInLastPage() {
        return currentPage === totalPages
    },
});


</script>

<style lang="scss" scoped>

</style>