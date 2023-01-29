<template>
  <div class="main">
    <imagecom class="d-none d-sm-block"></imagecom>
    <imagemob class="d-sm-none"></imagemob>
    <aboutcom class="d-none d-lg-block"></aboutcom>
    <aboutmob class="d-lg-none"></aboutmob>
  </div>
</template>

<script>
import aboutcom from "@/components/Com/AboutCom";
import aboutmob from "@/components/Mob/AboutMob";
import imagecom from "@/components/Com/ImageAndOffCanvasCom";
import imagemob from "@/components/Mob/ImageAndOffCanvasMob";
export default {
  name: "HomeApp",
  components:{
    aboutcom,
    aboutmob,
    imagecom,
    imagemob
  }
}
</script>

<style scoped>
  .main{

  }
</style>