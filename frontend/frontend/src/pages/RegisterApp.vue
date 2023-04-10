<template>
  <MyAuthAndRegister
      :big_text="big_text"
      :small_text="small_text"
      :button_text="button_text"
      :input="input"
      :funcName="funcName"
      :CompleteAuthAndRegister="CompleteAuthAndRegister"
      @register="register"
  >
    <myinput v-model="i.value.value" :title="i.title" v-for="i in input" :typeInput="i.typeInput"></myinput>
  </MyAuthAndRegister>
</template>

<script>

import myinput from "@/components/UI/MyInput";
import MyAuthAndRegister from "@/components/UI/MyAuthAndRegister";
import {ref, onMounted} from "vue";
import axios from "axios";

export default {
  name: "LoginApp",
  components: {
    myinput,
    MyAuthAndRegister,
  },
  setup(){
    const input = [
      {title: 'Логин', value: ref(''), typeInput: 'text',},
      {title: 'Имя', value: ref(''), typeInput: 'text',},
      {title: 'Фамилия', value: ref(''), typeInput: 'text',},
      {title: 'Почта', value: ref(''), typeInput: 'text',},
      {title: 'Дата рождения', value: ref(''), typeInput: 'date',},
      {title: 'Паспорт', value: ref(''), typeInput: 'password',},
      {title: 'Повторите пароль', value: ref(''), typeInput: 'password',},
    ]

    const big_text = 'Регистрация'
    const small_text = 'Зарегестрируйтесь для покупки продукта доступного на сайте.'
    const button_text = 'Зарегестрироваться'
    const funcName = 'register'
    const CompleteAuthAndRegister = ref('')

    async function register(){
      try{
        if (input[5].value.value === input[6].value.value){
          const response = await axios.post(`${process.env.VUE_APP_URL}/auth/users/`, {
            "username": input[0].value.value,
            "first_name": input[1].value.value,
            "last_name": input[2].value.value,
            "email": input[3].value.value,
            "dob": input[4].value.value,
            "password": input[5].value.value,
          })

          input[0].value.value = input[1].value.value = input[2].value.value = input[3].value.value = input[4].value.value = input[5].value.value = input[6].value.value = ''

          CompleteAuthAndRegister.value = 'Регистрация прошла успешно'
        }
        else{
          CompleteAuthAndRegister.value = ''
        }
      }
      catch (e) {
        console.log(e)
        CompleteAuthAndRegister.value = ''
      }
    }

    return {input, big_text, small_text, button_text, funcName, CompleteAuthAndRegister, register}
  }
}
</script>

<style scoped>

</style>