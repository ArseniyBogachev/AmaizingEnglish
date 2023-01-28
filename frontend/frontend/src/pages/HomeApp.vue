<template>
  <div class="main">
    <img src="../assets/learn.jpg" class="img-fluid" alt="">
    <aboutcom></aboutcom>
  </div>
</template>

<script>
import aboutcom from "@/components/Com/AboutCom";
export default {
  name: "HomeApp",
  components:{
    aboutcom,
  }
}
</script>

<style scoped>
  .main{

  }
  .img-fluid{
    width: 100%;
    height: auto;
    filter: brightness(30%)
  }
</style>