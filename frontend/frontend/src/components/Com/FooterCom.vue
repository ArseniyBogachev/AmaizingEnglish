<template>
  <footer class="text-center text-white" style="background-color: #f1f1f1;">
    <div class="container p-4 pb-0">
      <section class="mb-4">
        <a class="btn text-white btn-floating m-1"
          v-for="i in icon"
          v-bind:style="{backgroundColor: i.color}"
          href="#!"
          role="button"
        >
          <fa v-bind:icon="i.name" />
        </a>
      </section>
    </div>
    <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 Copyright:
      <a class="text-dark" href="https://mdbootstrap.com/">AESCHOOL.RU</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterCom",
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
  footer{

  }
  .btn{
    width: 30px;
    height: 30px;
  }
</style>