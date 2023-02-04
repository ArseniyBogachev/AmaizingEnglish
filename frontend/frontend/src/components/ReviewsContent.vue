<template>
  <h2 class="title">Отзывы наших учеников</h2>
  <div class="main">
    <div class="wrapper-reviews rounded" v-for="r in reviews" :key="r.id">
      <div class="item-review">
        <div class="header-review d-flex">
          <img :src="require(`../assets/${r.image}`)" class="image-header" alt="">
          <div class="info-header">
            <h6 class="name-header">{{ r.name }}</h6>
            <span class="date-header">{{ r.date }}</span>
          </div>
        </div>
        <div class="body-review mt-4">
          <span class="body-title">{{ r.title }}</span>
          <p class="body-content">{{ r.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewsCom",
  props: {
    reviews: Array,
  }
}
</script>

<style scoped>
  .title{
    padding: 5% 0 0 10%;
  }
  .main{
    padding: 2% 5% 5% 5%;
    display: flex;
    justify-content: space-around;
  }
  .wrapper-reviews{
    width: 400px;
    height: auto;
    padding: 1%;
    background-color: #f2f5ec;
    box-shadow: 0 0 5px 1px #eee8e7;
  }
  .item-review{

  }

  .header-review{

  }
  .image-header{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .info-header{
    padding-left: 5%;
  }
  .name-header{
    color: #757173;
  }
  .date-header{
    color: #bfb9b8;
  }

  .body-review{
    color: #1f1b1d;
  }
  .body-title{
    font-size: 20px;
    font-weight: bolder;
  }
  .body-content{
    font-size: 14px;
  }
  @media (max-width: 1438px) {
    .wrapper-reviews {
      width: 350px;
    }
  }
  @media (max-width: 1240px) {
    .wrapper-reviews {
      width: 290px;
    }
  }
  @media (max-width: 1024px) {
    .main {
      padding: 2% 1% 5% 1%;
    }
  }
  @media (max-width: 950px) {
    .wrapper-reviews {
      width: 240px;
    }
  }
  @media (max-width: 768px) {
    .title{
      padding: 15% 0 0 3%;
    }
    .main {
      display: block;
      padding: 2% 3% 5% 3%;
    }
    .wrapper-reviews {
      width: 100%;
      margin-bottom: 20px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>