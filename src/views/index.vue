<script setup>
import {onMounted} from "vue";
import {getUsers} from "@/api";

onMounted(() => {
  // axios.get(`/api/tree`).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })
  getUsers().then(res => {
    console.log(res)
  })
})
</script>

<template>
  <div class="app-container">
    <el-button type="primary">button</el-button>
    <router-link to="/home">sssss</router-link>
  </div>
</template>

<style lang="scss" scoped>

</style>
