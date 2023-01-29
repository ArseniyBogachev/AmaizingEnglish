<template>
  <div class="main">
    <div class="wrapper-form">
      <h5 class="big-text">Регстрация</h5>
      <myinput v-model="firstname" :title="input.firstname"></myinput>
      <myinput v-model="lastname" :title="input.lastname"></myinput>
      <myinput v-model="email" :title="input.email"></myinput>
      <myinput v-model="password_one" :title="input.password_one"></myinput>
      <myinput v-model="password_two" :title="input.password_two"></myinput>
      <small class="small-text">Зарегестрируйтесь для покупки продукта доступного на сайте.</small>
      <button type="button" class="btn btn-success">Register</button>
    </div>
  </div>
</template>

<script>
import myinput from "@/components/UI/MyInput";
import {ref} from "vue";
export default {
  name: "LoginApp",
  components: {
    myinput,
  },
  setup(){
    const firstname = ref('')
    const lastname = ref('')
    const email = ref('')
    const password_one = ref('')
    const password_two = ref('')

    const input = {
      firstname: 'First name',
      lastname: 'Last name',
      email: 'E-mail',
      password_one: 'Password',
      password_two: 'Confirm password'
    }

    return {input, firstname, lastname, email, password_one, password_two}
  }
}
</script>

<style scoped>
  .main{
    padding-top: 150px;
    height: 760px;
    padding-left: 2%;
    padding-right: 2%;
  }
  .wrapper-form{
    max-width: 500px;
    background-color: #eee8e7;
    padding-top: 70px;
    padding-left: 2%;
    padding-right: 2%;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0 0 5px 1px #bfb9b8;
    border-radius: 0 0 10px 10px;
    position: relative;
  }
  .big-text{
    margin-bottom: 30px;
    text-align: center;
    color: #757173;
    font-weight: lighter;
  }
  .small-text{
    display: block;
    font-size: 11px;
    color: #757173;
    padding-bottom: 70px;
  }
  .btn{
    border: 1px solid #979395;
    width: 100%;
    border-radius: 0 0 10px 10px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
</style>