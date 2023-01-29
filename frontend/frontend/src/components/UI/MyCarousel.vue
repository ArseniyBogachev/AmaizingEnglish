<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div class="carousel-inner">
      <div v-bind:class="[c.list_class.carousel_item, c.list_class.active]" v-for="c in carousel">
        <div class="elem-carusel">
          <h5 style="text-align: center">{{ c.title }}</h5>
          <p class="content-item">
            <span v-for="content in c.content">{{ content }}<br></span>
          </p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "MyCarousel",
  props: {
    carousel: {
      type: Array,
    }
  }
}
</script>

<style scoped>
  .elem-carusel{
    width: 100%;
    height: 300px;
    background-color: #ded8d7;
    padding: 5%;
  }
  .content-item{
    line-height: 2.5;
    color: #403a39;
  }
</style>