<template>
  <MyAuthAndRegister
      :big_text="big_text"
      :small_text="small_text"
      :button_text="button_text"
      :input="input"
      :funcName="funcName"
      @login="login"
  >
    <myinput v-model="i.value.value" :title="i.title" v-for="i in input" :typeInput="i.typeInput"></myinput>
  </MyAuthAndRegister>
</template>

<script>

import myinput from "@/components/UI/MyInput";
import MyAuthAndRegister from "@/components/UI/MyAuthAndRegister";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
import axios from "axios";

export default {
  name: "LoginApp",
  components: {
    myinput,
    MyAuthAndRegister,
  },
  setup(){
    const router = useRouter()
    const store = useStore()

    const input = [
      {title: 'Логин', value: ref(''), typeInput: 'text',},
      {title: 'Пароль', value: ref(''), typeInput: 'password',}
    ]

    const big_text = 'Авторизация'
    const small_text = 'Авторизируйтесь для покупки продукта доступного на сайте.'
    const button_text = 'Login'
    const funcName = 'login'

    async function login(){
      try{
        if (input[0].value.value && input[1].value.value){
          const response = await axios.post('http://127.0.0.1:8000/api/token/', {
            "username": input[0].value.value,
            "password": input[1].value.value,
          })
          await localStorage.setItem("access", response.data.access);
          await localStorage.setItem("refresh", response.data.refresh);
          await store.dispatch('verify_fn')
          await router.push('/')
        }
        else{
          console.log('Error Password!!!')
        }
      }
      catch (e) {
        console.log(e)
      }
    }

    return {input, big_text, small_text, button_text, funcName, login}
  }
}
</script>

<style scoped>

</style>