<script setup>
import {onMounted} from "vue";
import axios from "axios";

onMounted(() => {
  axios.get(`/api/tree`).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
})
</script>

<template>
  <div class="app-container">
      ssssssssss
    <router-link to="/home">sssss</router-link>
  </div>
</template>

<style lang="scss" scoped>

</style>
