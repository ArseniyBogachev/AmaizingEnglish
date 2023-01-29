<template>
  <div class="main">
    <img src="../../assets/learnEnglish.jpg" class="img-fluid" alt="">
    <div class="off-canvas">
      <p class="big-text-more d-none d-md-block">Онлайн школа <br> Английского языка</p>
      <p class="big-text-less d-md-none">Онлайн школа <br> Английского языка</p>
      <small class="small-text-more d-none d-md-block">— Записаться на онлайн консультацию.</small>
      <small class="small-text-less d-md-none">— Записаться на онлайн консультацию.</small>
      <div class="button-red">
        <button
            type="button"
            class="btn btn-danger b-more d-none d-md-block"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
        >ЗАПИСЬ
        </button>
        <button
            type="button"
            class="btn btn-danger b-less d-md-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
        >ЗАПИСЬ
        </button>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" data-bs-scroll="true">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">
              <button type="button" class="btn btn-secondary" @click="useTest([firstname, lastname, email, phone, message])">SEND</button>
            </h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
          </div>
          <div class="offcanvas-body small">

              <form action="">
                <myinput v-model="firstname" v-bind:title="title.firstname"></myinput>
                <myinput v-model="lastname" v-bind:title="title.lastname"></myinput>
                <myinput v-model="email" v-bind:title="title.email"></myinput>
                <myinput v-model="phone" v-bind:title="title.phone"></myinput>
                <mytextarea v-model="message" v-bind:title="textarea.message"></mytextarea>
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
  name: "ImageAndOffCanvas",
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
  .main{

  }
  .img-fluid{
    width: 100%;
    height: auto;
    filter: brightness(20%);
    border-bottom: 2px solid #1f1b1d;
    box-shadow: 0 0 5px 1px black;
    position: relative;
  }
  .off-canvas{
    position: absolute;
    top: 20%;
    left: 20%;
  }
  .big-text-more{
    color: white;
    font-size: 50px;
  }
  .big-text-less{
    color: white;
    font-size: 30px;
  }
  .small-text-more{
    display: block;
    color: white;
    font-size: 20px;
    margin-top: 10%;
    font-weight: lighter;
  }
  .small-text-less{
    display: block;
    color: white;
    font-size: 15px;
    margin-top: 5%;
    font-weight: lighter;
  }
  .button-red{
    margin-top: 5%;
  }
  .b-more{
    width: 200px;
    background-color: #d00c0f;
    color: #eee8e7;
    font-weight: lighter;
  }
  .b-less{
    width: 100px;
    background-color: #d00c0f;
    color: #eee8e7;
    font-weight: lighter;
  }
  .btn:focus{
    box-shadow: none;
  }
  .offcanvas-header{
    box-shadow: 0 0 5px 1px black;
  }
  .offcanvas-body{
    border-top: 1px solid #bfb9b8;
    padding: 1%;
  }
  .offcanvas-body::-webkit-scrollbar {
    width: 7px;
    border: 1px solid rgb(100,100,100);
  }
  .offcanvas-body::-webkit-scrollbar-thumb {
    background-color: #474345;
  }
</style>