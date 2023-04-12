<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel"
       data-bs-scroll="true">
    <div class="offcanvas-header">
      <div class="offcanvas-title d-flex justify-content-between" id="offcanvasBottomLabel">
      </div>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
    </div>

    <div class="offcanvas-body small">
      <div class="d-flex">
        <div style="width: 50px; height: 10px; background-color: #1024b0; border-radius: 10px 0 0 10px"></div>
        <div style="width: 50px; height: 10px; background-color: #d00c0f; border-radius: 0 10px 10px 0"></div>
      </div>

      <h2 class="text-body mt-4">Записаться <br> на онлайн <br> консультацию.</h2>

      <form action="" class="form-body" style="margin-top: 25%">
        <myinput
            v-model="firstname.value.value"
            :title="title.firstname"
            :maxLength="firstname.maxLenght"
            :styleError="firstname.styleError.value"
        ></myinput>
        <myinput
            v-model="lastname.value.value"
            :title="title.lastname"
            :maxLength="lastname.maxLenght"
            :styleError="lastname.styleError.value"
        ></myinput>
        <myinput
            v-model="email.value.value"
            :title="title.email"
            :maxLength="email.maxLenght"
            :styleError="email.styleError.value"
        ></myinput>
        <myinput
            v-model="phone.value.value"
            :title="title.phone"
            :maxLength="phone.maxLenght"
            :styleError="phone.styleError.value"
            :minLength="phone.minLength"
        ></myinput>
        <mytextarea
            v-model="message.value.value"
            :title="textarea.message"
            :maxLength="message.maxLenght"
        ></mytextarea>
      </form>

      <div class="form-check" style="margin-top: 25%">
        <h6 class="form-check-label">
          Нажимая на кнопку, вы даете согласие на
          <button type="button" class="button-modal" data-bs-toggle="modal" data-bs-target="#Document">
            обработку персональных данных
          </button>
          и соглашаетесь с
          <button type="button" class="button-modal" data-bs-toggle="modal" data-bs-target="#Document">
            политикой конфиденциальности
          </button>
        </h6>
      </div>

      <button type="button" class="form-send w-100 mt-3" @click="consultationPost();">ЗАПИСЬ</button>
    </div>
  </div>

  <MyModal :filePath="filePath"></MyModal>
</template>

<script>

import myinput from "@/components/UI/MyInput";
import mytextarea from "@/components/UI/MyTextArea";
import { lstDocument } from "@/hooks/staticFileName";
import { postData } from "@/hooks/useRecordConsultation";
import MyModal from "@/components/UI/MyModal";

export default {
  name: "ModalCourseEnrollment",
  components: {
    myinput,
    mytextarea,
    MyModal,
  },
  setup(){
    const title = {
      firstname: 'First name',
      lastname: 'Last name',
      email: 'E-mail',
      phone: 'Phone',
    }

    const textarea = {
      message: 'Addition'
    }

    const { filePath } = lstDocument()

    const {status, firstname, lastname, email, phone, message, consultationPost} = postData()

    return {title, textarea, firstname, lastname, email, phone, message, filePath, status, consultationPost }
  }
}
</script>

<style scoped>
  .big-text-md{
    color: white;
    font-size: 35px;
  }
  .big-text-less{
    color: white;
    font-size: 20px;
  }
  .small-text-less{
    display: block;
    color: white;
    font-size: 15px;
    margin-top: 10%;
    font-weight: lighter;
  }
  .offcanvas-title{
    width: 35%;
  }
  .offcanvas-body{
    padding: 8%;
    margin-top: 10%;
  }
  .offcanvas-body::-webkit-scrollbar {
    width: 7px;
    border: 1px solid rgb(100,100,100);
  }
  .offcanvas-body::-webkit-scrollbar-thumb {
    background-color: #474345;
  }
  .button-modal{
    border: none;
    background-color: white;
    padding: 0;
  }
  .button-modal:hover{
    text-decoration: underline;
  }
  .btn-close:focus{
    box-shadow: none;
  }
  .form-send{
    border: none;
    background-color: #d00c0f;
    color: white;
    border-radius: 10px;
    font-size: 13px;
    height: 40px;
    letter-spacing: 2px;
  }
  .form-send:active{
    box-shadow: 0 0 5px 1px #423e40 inset;
  }
</style>