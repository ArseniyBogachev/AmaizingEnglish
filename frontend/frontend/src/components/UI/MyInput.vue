<template>
  <div class="input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default">{{ title }}</span>
    <input
        :type="typeInput"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        :value="modelValue"
        @input="onInput($event.target.value)"
    >
  </div>
</template>

<script>

export default{
  name: "MyInput",
  props: {
    title: {
      type: String,
    },
    modelValue: {
      type: String,
    },
    typeInput: {
      type: String,
      default: 'text'
    }
  },
  setup(props, { emit }){
    const onInput = (value) => {
      emit('update:modelValue', value)
    }

    return {onInput}
  }
}
</script>

<style scoped>
  .form-control:focus{
    box-shadow: none;
    border: 1px solid #605c5e;
  }
  .input-group-text{
    color: #757173;
  }
</style>