<template>
  <img src="../../assets/learnEnglish.jpg" class="img-fluid" alt="">
</template>

<script>
export default {
  name: "MyBackground"
}
</script>

<style scoped>
  .img-fluid{
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: brightness(20%);
    object-fit: cover;
  }
</style>