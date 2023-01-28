<template>
  <navbarcom class="d-none d-lg-block bg-light bg-gradient">

  </navbarcom>
  <navbarmob class="d-lg-none">

  </navbarmob>
</template>

<script>
import navbarcom from "@/components/Com/NavBarCom";
import navbarmob from "@/components/Mob/NavBarMob";
export default {
  name: "NavBar",
  components:{
    navbarcom,
    navbarmob
  }
}
</script>

<style scoped>

</style>