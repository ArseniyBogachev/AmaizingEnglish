<template>
  <div class="main">
    <div class="carousel">
      <mycarousel :carousel="carousel"></mycarousel>
    </div>

    <div class="wrapper-text">
      <div class="text-red">
        <h3>An element with position</h3>
        <p class="text">
          An element with position: sticky; is positioned based on the user's scroll position.

          A sticky element toggles between relative and fixed, depending on the scroll position.
          It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
          An element with position: sticky; is positioned based on the user's scroll position.
          A sticky element toggles between relative and fixed, depending on the scroll position.
          A sticky element toggles between relative and fixed, depending on the scroll position.
          An element with position: sticky; is positioned based on the user's scroll position.
          A sticky element toggles between relative and fixed, depending on the scroll position.
          A sticky element toggles between relative and fixed, depending on the scroll position.

          An element with position: sticky; is positioned based on the user's scroll position.
          A sticky element toggles between relative and fixed, depending on the scroll position.

          It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
        </p>
      </div>

      <div class="text-blue">
        <h3>An element with position</h3>
        <p class="text">
          An element with position: sticky; is positioned based on the user's scroll position.

          A sticky element toggles between relative and fixed, depending on the scroll position.
          It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
          An element with position: sticky; is positioned based on the user's scroll position.
          A sticky element toggles between relative and fixed, depending on the scroll position.
          A sticky element toggles between relative and fixed, depending on the scroll position.
          An element with position: sticky; is positioned based on the user's scroll position.
          A sticky element toggles between relative and fixed, depending on the scroll position.
          A sticky element toggles between relative and fixed, depending on the scroll position.

          An element with position: sticky; is positioned based on the user's scroll position.
          A sticky element toggles between relative and fixed, depending on the scroll position.

          It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
        </p>
      </div>

    </div>

    <div class="form-email">
      <p class="title-form">Feedback</p>
      <form action="">
        <myinput v-model="firstname" :title="input.firstname"></myinput>
        <myinput v-model="lastname" :title="input.lastname"></myinput>
        <myinput v-model="email" :title="input.email"></myinput>
        <mytextarea v-model="message" :title="textarea.message"></mytextarea>
        <small class="small-text">По любым вопросам свяжитесь с нами через данную форму.</small>
      </form>
      <button type="button" class="btn btn-dark" @click="useTest([firstname, lastname, email, message])">SEND</button>
    </div>
  </div>
</template>

<script>
import mycarousel from "@/components/UI/MyCarousel";
import myinput from "@/components/UI/MyInput";
import mytextarea from "@/components/UI/MyTextArea";
import {useTest} from "@/hooks/useTest";
import {ref} from "vue";
export default {
  name: "AboutMob",
  components: {
    mytextarea,
    myinput,
    mycarousel,
  },
  setup(){
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const message = ref('')

    const input = {
      firstname: 'First name',
      lastname: 'Last name',
      email: 'E-mail',
    }

    const textarea = {
      message: 'Message'
    }

    const carousel = [
      {list_class: {carousel_item: 'carousel-item', active: 'active'},
        title: 'Курсы для взрослых',
        content: ['- 6 курсов для 6 разных уровнеий знания английского языка',]
      },
      {list_class: {carousel_item: 'carousel-item', active: ''},
        title: 'Курсы для детей',
        content: ['- 3 курсов для 3 разных возрастов', '- Курсы для детей с 7 до 17 лет', '- Готовим к ЕГЭ и ОГЭ', '- Группы до 8 человек']
      },
    ]

    return {input, textarea, carousel, firstname, lastname, email, message, useTest}
  }
}
</script>

<style scoped>
  .main{
    margin-top: 50px;
    padding: 1%;
  }
  .carousel{
    width: 100%;
    height: 300px;
  }


  .wrapper-text{
    margin-top: 20px;
  }
  .text-red{
    border-radius: 10px;
    padding: 2%;
    background-color: #933334;
  }
  .text-blue{
    margin-top: 20px;
    border-radius: 10px;
    padding: 2%;
    background-color: #393593;
  }
  .text{
    font-size: 15px;
    color: #e5dfde;
  }


  .form-email{
    width: 100%;
    height: 400px;
    margin-top: 30px;
    padding: 1%;
    background-color: #eae4e3;
  }
  .title-form{
    text-align: center;
    color: #423e40;
    font-size: 18px;
    font-family: "adobe-clean", "Helvetica", "Arial", "sans-serif";
  }
  .small-text{
    font-size: 10px;
  }
  .btn{
    margin-top: 20px;
  }
</style>