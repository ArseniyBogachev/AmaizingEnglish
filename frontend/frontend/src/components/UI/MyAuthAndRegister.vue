<template>
  <div class="main">
    <div class="wrapper-form">
      <h5 class="big-text">{{ big_text }}</h5>
      <slot></slot>
      <small class="small-text">{{ small_text }}</small>
      <span class="complete-text" v-if="CompleteAuthAndRegister">{{CompleteAuthAndRegister}}</span>
      <button type="button" class="btn btn-success" @click="$emit(`${funcName}`)">{{ button_text }}</button>
    </div>
  </div>
</template>

<script>
import myinput from "@/components/UI/MyInput";
export default {
  name: "MyAuthAndRegister",
  components: {
    myinput,
  },
  props: {
    big_text:{
      type: String,
    },
    small_text:{
      type: String,
    },
    button_text:{
      type: String,
    },
    input:{
      type: String,
    },
    funcName: {
      type: String,
    },
    CompleteAuthAndRegister: {
      type: String,
      default: '',
    }
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
    font-size: 30px;
    color: #1f1b1d;
  }
  .small-text{
    display: block;
    font-size: 11px;
    color: #757173;
    padding-bottom: 70px;
  }
  .complete-text{
    position: absolute;
    bottom: 40px;
    color: #2ca016;
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