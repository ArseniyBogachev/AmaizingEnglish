<template>
  <footer class="text-white main" style="background-color: #f1f1f1;">
    <div class="text-center header-block container p-4 pb-0">
      <section class="mb-4">
        <MyLinkIcons :icon="icon"></MyLinkIcons>
      </section>
    </div>
    <div class="text-dark content-block p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      <div class="logo-content">
        <img src="../assets/logo.png" alt="" class="image-logo">
        <span class="title-logo">AMAIZING ENGLISH</span>
      </div>
      <div class="text-content">
        <a href="" class="button-modal" data-bs-toggle="modal" data-bs-target="#Document">Политика конфиденциальности</a> <br>
        <a href="" class="button-modal" data-bs-toggle="modal" data-bs-target="#Document">Пользовательское соглашение</a>
        <p style="margin-top: 10px">
          ИП Сигаев Владимир Павлович <br>
          ИНН 780739681847 <br>
          ОГРНИП 323470400017551
        </p>

        <MyModal :filePath="filePath"></MyModal>
      </div>
      <div class="text-center link-content">
        © 2023 Copyright:
        <a class="text-dark" href="https://mdbootstrap.com/">AESCHOOL.RU</a>
      </div>
    </div>
  </footer>
</template>

<script>

import MyLinkIcons from "@/components/UI/MyLinkIcons";
import MyModal from "@/components/UI/MyModal";
import { lstDocument } from "@/hooks/staticFileName";

export default {
  name: "FooterCom",
  components: {
    MyLinkIcons,
    MyModal,
  },
  setup(){
    const icon = [
      // {name: 'fa-brands fa-facebook', color: '#3b5998'},
      {name: 'fa-brands fa-telegram', color: '#55acee'},
      // {name: 'fa-brands fa-google', color: '#dd4b39'},
      // {name: 'fa-brands fa-instagram', color: '#ac2bac'},
      // {name: 'fa-brands fa-twitter', color: '#0082ca'},
      {name: 'fa-brands fa-vk', color: '#333333'},
    ]
    const { filePath } = lstDocument()

    return {icon, filePath}
  }
}
</script>

<style scoped>
  .main{

  }


  .header-block{

  }


  .content-block{

  }

  .logo-content{
    display: flex;
    align-items: center;
  }
  .image-logo{
    width: 100px;
    height: 100px;
    display: block;
  }
  .title-logo{
    display: block;
    font-size: 70px;
    font-weight: bold;
  }

  .text-content{

  }
  .link-content{
    margin-top: 200px;
  }

  @media (max-width: 814px) {
    .title-logo{
      font-size: 50px;
    }
  }
  @media (max-width: 622px) {
    .title-logo{
      font-size: 30px;
    }
  }
</style>