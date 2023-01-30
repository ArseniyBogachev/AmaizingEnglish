<template>
  <MyAuthAndRegister
      :big_text="big_text"
      :small_text="small_text"
      :button_text="button_text"
      :input="input"
      @useTest="useTest([input[0].value.value, input[1].value.value])"
  >
    <myinput v-model="i.value.value" :title="i.title" v-for="i in input"></myinput>
  </MyAuthAndRegister>
</template>

<script>
import myinput from "@/components/UI/MyInput";
import MyAuthAndRegister from "@/components/UI/MyAuthAndRegister";
import {useTest} from "@/hooks/useTest"
import {ref} from "vue";
export default {
  name: "LoginApp",
  components: {
    myinput,
    MyAuthAndRegister,
  },
  setup(){
    const input = [
      {title: 'E-mail', value: ref('')},
      {title: 'Password', value: ref('')}
    ]

    const big_text = 'Авторизация'
    const small_text = 'Авторизируйтесь для покупки продукта доступного на сайте.'
    const button_text = 'Login'

    return {input, big_text, small_text, button_text, useTest}
  }
}
</script>

<style scoped>

</style>