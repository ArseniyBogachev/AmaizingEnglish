<template>
  <MyAuthAndRegister
      :big_text="big_text"
      :small_text="small_text"
      :button_text="button_text"
      :input="input"
      @register="register"
  >
    <myinput v-model="i.value.value" :title="i.title" v-for="i in input" :typeInput="i.typeInput"></myinput>
  </MyAuthAndRegister>
</template>

<script>

import myinput from "@/components/UI/MyInput";
import MyAuthAndRegister from "@/components/UI/MyAuthAndRegister";
import {ref} from "vue";
import axios from "axios";

export default {
  name: "LoginApp",
  components: {
    myinput,
    MyAuthAndRegister,
  },
  setup(){
    const input = [
      {title: 'Login', value: ref(''), typeInput: 'text',},
      {title: 'Firstname', value: ref(''), typeInput: 'text',},
      {title: 'Lastname', value: ref(''), typeInput: 'text',},
      {title: 'E-mail', value: ref(''), typeInput: 'text',},
      {title: 'Age', value: ref(''), typeInput: 'text',},
      {title: 'Password', value: ref(''), typeInput: 'password',},
      {title: 'Confirm password', value: ref(''), typeInput: 'password',},
    ]

    const big_text = 'Регистрация'
    const small_text = 'Зарегестрируйтесь для покупки продукта доступного на сайте.'
    const button_text = 'Register'

    function register(){
      try{
        if (input[5].value.value === input[6].value.value){
          const response = axios.post('http://127.0.0.1:8000/auth/users/', {
            "username": input[0].value.value,
            "first_name": input[1].value.value,
            "last_name": input[2].value.value,
            "email": input[3].value.value,
            "age": input[4].value.value,
            "password": input[5].value.value,
          })
        }
        else{
          console.log('Error Password!!!')
        }
      }
      catch (e) {
        console.log(e)
      }
    }

    return {input, big_text, small_text, button_text, register}
  }
}
</script>

<style scoped>

</style>