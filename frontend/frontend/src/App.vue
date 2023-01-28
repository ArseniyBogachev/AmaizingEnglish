<template>
  <div class="app">
    <navbar></navbar>
    <router-view class="content"></router-view>
  </div>
</template>


<script>
import navbar from "@/pages/NavBar";
export default {
  name: "App",
  components: {
    navbar,
  }
}
</script>


<style>
</style>
