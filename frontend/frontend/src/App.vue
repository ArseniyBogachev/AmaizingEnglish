<template>
  <div class="app">
    <navbar></navbar>
    <router-view class="content"></router-view>
    <footercom></footercom>
  </div>
</template>


<script>
import navbar from "@/pages/NavBar";
import footercom from "@/components/Com/FooterCom";
export default {
  name: "App",
  components: {
    navbar,
    footercom,
  }
}
</script>


<style>
</style>
