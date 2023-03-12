<template>
  <MyBackground></MyBackground>
  <AboutCom class="d-none d-md-flex"></AboutCom>
  <AboutMob class="d-md-none"></AboutMob>
</template>

<script>
import MyBackground from "@/components/UI/MyBackground";
import AboutCom from "@/components/Com/AboutCom";
import AboutMob from "@/components/Mob/AboutMob";
export default {
  name: "AboutApp",
  components: {
    MyBackground,
    AboutCom,
    AboutMob
  }
}
</script>

<style scoped>

</style>