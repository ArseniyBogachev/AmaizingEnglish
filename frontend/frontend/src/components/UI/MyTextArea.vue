<template>
  <div class="input-group">
    <span class="input-group-text">{{ title }}</span>
    <textarea
        class="form-control"
        aria-label="message"
        :value="modelValue"
        @input="onTextArea($event.target.value)">
    </textarea>
    <button class="btn btn-secondary" type="button" id="button-addon2" @click="onRemove">
      <fa icon="fa-solid fa-delete-left" />
    </button>
  </div>
</template>

<script>
export default {
  name: "MyTextArea",
  props: {
    title: {
      type: String
    },
    modelValue: {
      type: String,
    },
  },
  setup(props, { emit }){
    const onTextArea = (value) => {
      emit('update:modelValue', value)
    }

    const onRemove = () => {
      emit('update:modelValue', '')
    }

    return {onTextArea, onRemove}
  }
}
</script>

<style scoped>
  .form-control{
    height: 80px;
    resize: none;
  }
  .form-control:focus{
    box-shadow: none;
    border: 1px solid #605c5e;
  }
  .input-group-text{
    color: #757173;
  }
  .btn:active{
    box-shadow: 0 0 10px 1px #423e40 inset;
  }
</style>