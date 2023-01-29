<template>
  <div class="main">
    <img src="../../assets/learnEnglishMob.jpg" class="img-fluid d-sm-none" alt="">
    <div class="off-canvas">
      <p class="big-text">Онлайн школа <br> Английского языка</p>
      <small class="small-text">— Записаться на онлайн консультацию.</small>
      <div class="button-red">
        <button type="button" class="btn btn-danger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">ЗАПИСЬ</button>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              <button type="button" class="btn btn-secondary" @click="useTest([firstname, lastname, email, phone, message])">SEND</button>
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
          </div>
          <div class="offcanvas-body">

            <form action="">
              <myinput v-model="firstname" :title="title.firstname"></myinput>
              <myinput v-model="lastname" :title="title.lastname"></myinput>
              <myinput v-model="email" :title="title.email"></myinput>
              <myinput v-model="phone" :title="title.phone"></myinput>
              <mytextarea v-model="message" :title="textarea.message"></mytextarea>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myinput from "@/components/UI/MyInput";
import mytextarea from "@/components/UI/MyTextArea";
import {ref} from "vue";
import {useTest} from "@/hooks/useTest";
export default {
  name: "ImageAndOffCanvasCom",
  components: {
    myinput,
    mytextarea,
  },
  setup(){
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const phone = ref('')
    const message = ref('')

    const title = {
      firstname: 'First name',
      lastname: 'Last name',
      email: 'E-mail',
      phone: 'Phone',
    }

    const textarea = {
      message: 'Addition'
    }

    return {title, textarea, firstname, lastname, email, phone, message, useTest}
  }
}
</script>

<style scoped>
  .img-fluid{
    width: 100%;
    height: auto;
    filter: brightness(20%);
    border-bottom: 2px solid #1f1b1d;
    box-shadow: 0 0 5px 1px black;
    position: relative;
  }
  .big-text{
    font-size: 25px;
    color: #eee8e7;
  }
  .small-text{
    display: block;
    margin-top: 25%;
    font-size: 18px;
    color: #eee8e7;
    font-weight: lighter;
  }
  .button-red{
    margin-top: 10%;
  }
  .btn-danger{
    background-color: #d00c0f;
    font-weight: lighter;
  }
  .btn:active{
    box-shadow: 0 0 5px 1px black inset;
  }
  .off-canvas{
    position: absolute;
    top: 20%;
    left: 12%;
  }
</style>