<template>
  <div class="main">
    <img src="../../assets/learnEnglishMob.jpg" class="img-fluid d-sm-none" alt="">
    <div class="off-canvas">
      <p class="big-text">Преодолей языковой барьер <br> вместе с нами.</p>
      <small class="small-text">БЕСПЛАТНЫЙ урок определения уровня знания АНГЛИЙСКОГО ЯЗЫКА. <br> Курс "Говори!" <br> Видимый результат уже через 4 месяца.</small>
      <div class="button-red">
        <button type="button" class="btn btn-danger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">ЗАПИСЬ</button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
          </div>
          <div class="offcanvas-body small">
            <div class="d-flex">
              <div style="width: 50px; height: 10px; background-color: #1024b0; border-radius: 10px 0 0 10px"></div>
              <div style="width: 50px; height: 10px; background-color: #d00c0f; border-radius: 0 10px 10px 0"></div>
            </div>

            <h2 class="text-body mt-4">Записаться <br> на онлайн <br> консультацию.</h2>

            <form action="" style="margin-top: 25%">
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
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
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
      </div>
    </div>
  </div>
</template>

<script>

import myinput from "@/components/UI/MyInput";
import mytextarea from "@/components/UI/MyTextArea";
import MyModal from "@/components/UI/MyModal";
import { lstDocument } from "@/hooks/staticFileName";
import { postData } from "@/hooks/useRecordConsultation";
import {ref} from "vue";

export default {
  name: "ImageAndOffCanvasCom",
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

    return {title, textarea, firstname, lastname, email, phone, message, filePath, consultationPost, status}
  }
}
</script>

<style scoped>
  .main{
    position: relative;

  }
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
    margin-top: 17%;
    font-size: 18px;
    color: #eee8e7;
    font-weight: lighter;
  }
  .button-red{
    margin-top: 10%;
  }
  .btn-danger{
    background-color: #d00c0f;
    font-size: 13px;
    font-weight: lighter;
    width: 100px;
  }
  .btn:active{
    box-shadow: 0 0 5px 1px black inset;
  }
  .off-canvas{
    position: absolute;
    bottom: 25%;
    left: 10%;
  }
  .button-modal{
    border: none;
    background-color: white;
    padding: 0;
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
  .btn-close:focus{
    box-shadow: none;
  }
  .form-check-input:checked{
    background-color: #298c34;
  }
  .form-check-input:focus{
    box-shadow: none;
  }
  @media (max-width: 425px) {
    .off-canvas{
      bottom: 20%;
    }
    .small-text{
      font-size: 15px;
    }
  }
</style>