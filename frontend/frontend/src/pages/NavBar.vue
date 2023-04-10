<template>
  <navbarcom class="d-none d-lg-block bg-light bg-gradient"
             :programms="programms"
             @logout="logout"
  ></navbarcom>
  <navbarmob class="d-lg-none bg-light bg-gradient"
             :programms="programms"
             @logout="logout"
  ></navbarmob>
</template>

<script>

import navbarcom from "@/components/Com/NavBarCom";
import navbarmob from "@/components/Mob/NavBarMob";
import {mapGetters, mapActions, mapMutations} from 'vuex'
import axios from "axios";

export default {
  name: "NavBar",
  components:{
    navbarcom,
    navbarmob
  },
  computed: {
    ...mapGetters({
      programms: 'programms',
    })
  },
  methods: {
    ...mapActions({
      programms_data: 'programms_data',
    }),
    ...mapMutations({
      updateVerify: 'updateVerify',
    }),
    async logout(){
      await axios.post(`${process.env.VUE_APP_URL}/api/v1/blacklist/`, {'token': localStorage.getItem('access')}, {headers: {"Authorization" : `Bearer ${localStorage.getItem('access')}`}})
      await localStorage.removeItem("access");
      await localStorage.removeItem("refresh");
      await this.updateVerify(false)
    },
  },
  created(){
    this.programms_data()
  }
}
</script>

<style scoped>

</style>