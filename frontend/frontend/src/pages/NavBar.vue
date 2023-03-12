<template>
  <navbarcom class="d-none d-lg-block bg-light bg-gradient" :programms="programms"></navbarcom>
  <navbarmob class="d-lg-none bg-light bg-gradient" :programms="programms"></navbarmob>
</template>

<script>

import navbarcom from "@/components/Com/NavBarCom";
import navbarmob from "@/components/Mob/NavBarMob";
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "NavBar",
  components:{
    navbarcom,
    navbarmob
  },
  computed: {
    ...mapGetters({
      programms: 'programms'
    })
  },
  methods: {
    ...mapActions({
      programms_data: 'programms_data'
    })
  },
  created(){
    this.programms_data()
  }
}
</script>

<style scoped>

</style>