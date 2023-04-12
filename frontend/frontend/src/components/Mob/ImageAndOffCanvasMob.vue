<template>
  <div class="main">
    <img src="../../assets/learnEnglishMob.jpg" class="img-fluid d-sm-none" alt="">
    <div class="off-canvas">
      <p class="big-text">Преодолей языковой барьер <br> вместе с нами.</p>
      <small class="small-text">БЕСПЛАТНЫЙ урок определения уровня знания АНГЛИЙСКОГО ЯЗЫКА. <br> Курс "Говори!" <br> Видимый результат уже через 4 месяца.</small>
      <div class="button-red">
        <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
        >ЗАПИСЬ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageAndOffCanvasCom",
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
    position: relative;
  }
  .big-text{
    font-size: 25px;
    color: #eee8e7;
  }
  .small-text{
    display: block;
    margin-top: 17%;
    font-size: 18px;
    color: #eee8e7;
    font-weight: lighter;
  }
  .button-red{
    margin-top: 10%;
  }
  .btn-danger{
    background-color: #d00c0f;
    font-size: 13px;
    font-weight: lighter;
    width: 100px;
  }
  .btn:active{
    box-shadow: 0 0 5px 1px black inset;
  }
  .off-canvas{
    position: absolute;
    bottom: 25%;
    left: 10%;
  }
  .button-modal{
    border: none;
    background-color: white;
    padding: 0;
  }
  .form-send{
    border: none;
    background-color: #d00c0f;
    color: white;
    border-radius: 10px;
    font-size: 13px;
    height: 40px;
    letter-spacing: 2px;
  }
  .form-send:active{
    box-shadow: 0 0 5px 1px #423e40 inset;
  }
  .btn-close:focus{
    box-shadow: none;
  }
  .form-check-input:checked{
    background-color: #298c34;
  }
  .form-check-input:focus{
    box-shadow: none;
  }
  @media (max-width: 425px) {
    .off-canvas{
      bottom: 20%;
    }
    .small-text{
      font-size: 15px;
    }
  }
</style>