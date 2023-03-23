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
import {mapActions} from 'vuex';

export default {
  name: "App",
  components: {
    navbar,
    footercom,
  },
  methods: {
    ...mapActions({
      verify_fn: 'verify_fn',
    })
  },
  created() {
    this.verify_fn()
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
    bottom: -500px;
    width: 100%;
  }
</style>
