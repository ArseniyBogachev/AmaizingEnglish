<template>
  <div class="main">
    <img src="../../assets/learnEnglish.jpg" class="img-fluid" alt="">
    <div class="off-canvas">
      <p class="big-text">Преодолей языковой барьер <br> вместе с нами.</p>
      <small class="small-text">БЕСПЛАТНЫЙ урок определения уровня знания АНГЛИЙСКОГО ЯЗЫКА. <br> Курс "Говори!" <br> Видимый результат уже через 4 месяца.</small>
      <div class="button-red">
        <button
            type="button"
            class="btn btn-danger b-more d-none d-md-block"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
        >ЗАПИСЬ
        </button>
        <button
            type="button"
            class="btn btn-danger b-less d-md-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
        >ЗАПИСЬ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageAndOffCanvas",
  components: {

  },
}
</script>

<style scoped>
  .main{
    position: relative;
  }
  .img-fluid{
    width: 100%;
    height: auto;
    filter: brightness(20%);
    border-bottom: 2px solid #1f1b1d;
    box-shadow: 0 0 5px 1px black;
  }
  .off-canvas{
    position: absolute;
    bottom: 30%;
    left: 15%;
  }
  .big-text{
    color: white;
    font-size: 50px;
  }
  .small-text{
    display: block;
    color: white;
    font-size: 20px;
    margin-top: 10%;
    font-weight: lighter;
  }
  .button-red{
    margin-top: 5%;
  }
  .b-more{
    width: 200px;
    background-color: #d00c0f;
    color: #eee8e7;
    font-weight: lighter;
  }
  .b-less{
    width: 100px;
    background-color: #d00c0f;
    color: #eee8e7;
    font-weight: lighter;
    font-size: 10px;
  }
  .btn:focus{
    box-shadow: none;
  }
  @media (max-width: 1532px) {
    .off-canvas{
      bottom: 20%;
    }
  }
  @media (max-width: 1050px) {
    .off-canvas{
      bottom: 17%;
    }
    .big-text{
      font-size: 35px;
    }
    .small-text{
      font-size: 15px;
    }
  }
  @media (max-width: 766px) {
    .off-canvas{
      bottom: 15%;
    }
    .big-text{
      font-size: 25px;
    }
    .small-text{
      font-size: 12px;
    }
  }
</style>