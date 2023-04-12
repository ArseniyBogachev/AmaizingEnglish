<template>
  <MyBackground></MyBackground>
  <div class="main">
    <div class="wrapper-block" v-for="price in prices">
      <div class="header-block rounded-5 mt-3">
        <span class="text-header">{{ price.title }}</span>
      </div>
      <div class="body-block">
        <p class="description-body">{{ price.description }}</p>
        <hr>
        <div class="text-body" v-for="text in price.list_type_class">
          <p class="title-text">{{ text.title }}</p>
          <div class="content-text" v-if="text.time_lesson === 45" v-for="lesson in text.list_type_courses">
            <p>{{lesson.title}} ({{lesson.count_lessons}} академических часов)</p>
            <p>-{{lesson.discount}}% = {{lesson.full_price}} руб.</p>
          </div>
          <div class="content-text" v-else v-for="lesson in text.list_type_courses">
            <p>{{lesson.title}} ({{lesson.count_lessons}} уроков {{ text.annotate_time_lesson }})</p>
            <p>-{{lesson.discount}}% = {{lesson.full_price}} руб.</p>
          </div>
        </div>
        <div class="additional-block">
          <p class="info-additional">*1 академический час = 45 минут</p>
          <p class="text-additional" v-if="price.additional">{{ price.additional }}</p>
        </div>

      </div>
      <div class="footer-block">
        <hr>
        <button
            type="button"
            class="button-modal button-footer mt-3 rounded-5"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
        >Записаться на курс</button>
      </div>
      <ModalCourseEnrollment></ModalCourseEnrollment>
    </div>
  </div>
</template>

<script>

import MyBackground from "@/components/UI/MyBackground";
import ModalCourseEnrollment from "@/components/UI/ModalCourseEnrollment";
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "PricesApp",
  components: {
    MyBackground,
    ModalCourseEnrollment,
  },
  computed: {
    ...mapGetters({
      prices: 'prices',
    }),
  },
  methods: {
    ...mapActions({
      prices_data: 'prices_data',
    }),
  },
  created(){
    this.prices_data()
  },
}
</script>

<style scoped>
  .main{
    padding-bottom: 200px;
    display: flex;
  }
  .wrapper-block{
    border-radius: 10px;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    background-color: rgba(175, 206, 232, 0.8);
    box-shadow: 0 0 5px 1px #383838;
    position: relative;
  }


  .header-block{
    width: 50%;
    height: 50px;
    background-color: #9c2632;
    color: cornsilk;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0 0 5px 1px #868686;
  }
  .body-block{
    padding: 10% 3% 100px 3%;
  }
  .description-body{
    font-size: 20px;
    font-weight: bold;
    color: #232323;
  }
  .text-body{

  }
  .title-text{
    font-weight: bold;
  }
  .content-text{
    display: flex;
    justify-content: space-between;
  }
  .content-text p:last-child{
    font-size: 20px;
  }
  .additional-block{

  }
  .info-additional{
    font-size: 13px;
  }
  .text-additional{
    font-weight: bold;
    font-size: 25px;
    padding-top: 40%;
  }


  .footer-block{
    position: absolute;
    width: 100%;
    bottom: 3%;
  }
  .button-footer{
    border: none;
    background-color: #9c2632;
    color: cornsilk;
    height: 50px;
    box-shadow: 0 0 5px 1px #868686;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .button-footer:active{
    box-shadow: 0 0 5px 1px #930c0f inset;
  }


  @media (max-width: 1540px) {
    .wrapper-block{
      width: 400px;
    }
    .content-text p:first-child{
      font-size: 14px;
    }
    .content-text p:last-child{
      font-size: 17px;
    }
    .info-additional{
      font-size: 11px;
    }
    .description-body{
      font-size: 18px;
    }
    .title-text{
      font-size: 14px;
    }
  }
  @media (max-width: 1236px) {
    .wrapper-block{
      width: 300px;
      margin-top: 15%;
    }
    .header-block{
      font-size: 14px;
    }
    .content-text p:first-child{
      font-size: 11px;
    }
    .content-text p:last-child{
      font-size: 13px;
    }
    .info-additional{
      font-size: 9px;
    }
    .description-body{
      font-size: 17px;
    }
    .title-text{
      font-size: 13px;
    }
    .text-additional{
      font-size: 22px;
    }
  }
  @media (max-width: 926px) {
    .main{
      display: block;
      padding-top: 15%;
    }
    .wrapper-block{
      width: 500px;
      margin-top: 5%;
      padding-top: 10px;
    }
    .header-block{
      font-size: 16px;
    }
    .content-text p:first-child{
      font-size: 15px;
    }
    .content-text p:last-child{
      font-size: 20px;
    }
    .info-additional{
      font-size: 11px;
    }
    .description-body{
      font-size: 18px;
    }
    .title-text{
      font-size: 15px;
    }
  }
  @media (max-width: 528px) {
    .main{
      padding-top: 20%;
    }
    .wrapper-block{
      width: 400px;
    }
    .content-text p:first-child{
      font-size: 14px;
    }
    .content-text p:last-child{
      font-size: 17px;
    }
    .info-additional{
      font-size: 11px;
    }
    .description-body{
      font-size: 18px;
    }
    .title-text{
      font-size: 14px;
    }
  }
  @media (max-width: 416px) {
    .main{
      padding-top: 20%;
    }
    .wrapper-block{
      width: 300px;
    }
    .header-block{
      font-size: 14px;
    }
    .content-text p:first-child{
      font-size: 11px;
    }
    .content-text p:last-child{
      font-size: 13px;
    }
    .info-additional{
      font-size: 9px;
    }
    .description-body{
      font-size: 17px;
    }
    .title-text{
      font-size: 13px;
    }
    .text-additional{
      font-size: 22px;
    }
  }
</style>