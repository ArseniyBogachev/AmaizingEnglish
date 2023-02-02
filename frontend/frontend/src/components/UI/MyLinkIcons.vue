<template>
  <a class="btn text-white btn-floating m-1"
     v-for="i in icon"
     v-bind:style="{backgroundColor: i.color}"
     href="#!"
     role="button"
  >
    <fa v-bind:icon="i.name" />
  </a>
</template>

<script>
export default {
  name: "MyLinkIcons",
  props: {
    icon: {
      type: Array,
    }
  }
}
</script>

<style scoped>
  .btn{
    width: 30px;
    height: 30px;
  }
</style>