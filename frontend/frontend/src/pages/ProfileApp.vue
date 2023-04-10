<template>
  <div class="main">
    <div class="wrapper">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="u in user">
          <span class="text-item-active" v-if="u">{{ u }}</span>
          <small class="text-item-inactive" v-else>(пусто)</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "ProfileApp",
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods:{
    ...mapActions({
      user_data: 'user_data',
    }),
  },
  mounted(){
    this.user_data()
  }
}
</script>

<style scoped>
  .main{
    height: 100%;
  }
  .wrapper{
    padding-top: 250px;
    height: 100%;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .list-group{
    border: 1px solid #d0d0d0;
    border-radius: 5px;
  }
  .text-item-active{

  }
  .text-item-inactive{
    color: #d0d0d0;
    font-style: italic;
  }
</style>