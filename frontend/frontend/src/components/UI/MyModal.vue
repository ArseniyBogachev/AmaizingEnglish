<template>
  <div class="modal fade w-100 h-100" id="Document" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img class="w-100 h-100" v-for="file in filePath" :src="getImgUrl(file)" alt="...">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MyModal",
  props: {
    basePath: {
      type: String,
    },
    filePath: {
      type: Array,
    },
  },
  methods: {
    getImgUrl (file) {
       return require('@/assets/' + file);
    }
  },
}
</script>

<style scoped>
  .modal-body{
    overflow-y: scroll;
    height: 40em;
  }
  @media (max-width: 578px) {

  }
</style>