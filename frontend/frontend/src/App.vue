<template>
  <div class="app">
    <navbar></navbar>
    <router-view class="content"></router-view>
    <footercom class="foo-ter"></footercom>
  </div>
</template>


<script>
import navbar from "@/pages/NavBar";
import footercom from "@/components/FooterContent";
export default {
  name: "App",
  components: {
    navbar,
    footercom,
  }
}
</script>


<style>
  .app{
    min-height: 70em;
    position: relative;
  }
  .content{
    padding-bottom: 200px;
  }
  .foo-ter{
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
