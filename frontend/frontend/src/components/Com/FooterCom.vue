<template>
  <footer class="text-center text-white" style="background-color: #f1f1f1;">
    <div class="container p-4 pb-0">
      <section class="mb-4">
        <MyLinkIcons :icon="icon"></MyLinkIcons>
      </section>
    </div>
    <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">AESCHOOL.RU</a>
    </div>
  </footer>
</template>

<script>
import MyLinkIcons from "@/components/UI/MyLinkIcons";
export default {
  name: "FooterCom",
  components: {
    MyLinkIcons,
  },
  setup(){
    const icon = [
      {name: 'fa-brands fa-facebook', color: '#3b5998'},
      {name: 'fa-brands fa-telegram', color: '#55acee'},
      {name: 'fa-brands fa-google', color: '#dd4b39'},
      {name: 'fa-brands fa-instagram', color: '#ac2bac'},
      {name: 'fa-brands fa-twitter', color: '#0082ca'},
      {name: 'fa-brands fa-vk', color: '#333333'},
    ]

    return {icon}
  }
}
</script>

<style scoped>

</style>