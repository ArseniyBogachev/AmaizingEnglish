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
        <button type="button" class="button-modal button-footer mt-3 rounded-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                @click="this.selected_courses = 'Default'; this.selected_prices = 'Default'; this.radioActive = 'Индивидуальные'; this.programm = price.type_programm; priceTitle = price.title; uploadData()">Записаться на курс</button>
      </div>

      <div class="modal fade h-100 w-100" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <span>Оформите заказ</span>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">

                <div class="radio-block">
                  <div class="radio-class-block">
                    <input type="radio" value="Индивидуальные" v-model="radioActive" @change="uploadData(); this.selected_courses = 'Default'; this.selected_prices = 'Default';">
                    <label>Индивидуальные занятия</label>
                    <br>
                    <input type="radio" value="Групповые" v-model="radioActive" @change="uploadData(); this.selected_courses = 'Default'; this.selected_prices = 'Default';">
                    <label>Групповые занятия</label>
                    <br>
                  </div>
                </div>


                <select class="form-select" aria-label=".form-select-lg example"
                        v-model="selected_courses"
                        @change="uploadData()"
                        :style="programm_error">
                  <option class="options-style" v-for="c in options_courses" :value="c.value">{{c.name}}</option>
                </select>

                <select class="form-select" aria-label=".form-select-lg example"
                        v-model="selected_prices"
                        v-if="radioActive === 'Индивидуальные' || (radioActive === 'Групповые' && selected_courses !== 'Default')"
                        :style="price_error">
                  <option class="options-style" v-for="p in options_prices" :value="p.value">{{p.name}}</option>
                </select>

                <button type="button" class="button-footer mt-3 rounded-5" @click="user_courses_update({programm: selected_courses, price: selected_prices})">Оплатить</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import MyBackground from "@/components/UI/MyBackground";
import MyInput from "@/components/UI/MyInput";
import { ref } from 'vue'
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: "PricesApp",
  components: {
    MyBackground,
    MyInput,
  },
  data(){
    return {
      radioActive: 'Индивидуальные',
      programm: '',
      priceTitle: '',
      selected_courses: 'Default',
      selected_prices: 'Default',
    }
  },
  computed: {
    ...mapGetters({
      prices: 'prices',
      courses: 'courses',
      programms: 'programms',
      options_courses: 'options_courses',
      options_prices: 'options_prices',
      programm_error: 'programm_error',
      price_error: 'price_error',
    }),
  },
  methods: {
    ...mapMutations({
      updateOptionsCourses: 'updateOptionsCourses',
      updateOptionsPrices: 'updateOptionsPrices',
    }),
    ...mapActions({
      prices_data: 'prices_data',
      courses_data: 'courses_data',
      user_courses_update: 'user_courses_update',
    }),
    async uploadData(){
      let programm_link = this.programms.find((item) => item.programm_name === this.programm)
      await this.courses_data(programm_link.link)
      await this.updateOptionsCourses()
      await this.updateOptionsPrices({
        priceTitle: this.priceTitle,
        typeClass: this.radioActive,
        selectedCourses: this.selected_courses
      })
    }
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

  .radio-block{
    display: flex;
  }

  .form-select{
    max-height: 50px;
    width: 100%;
    margin-bottom: 50px;
  }
  .form-select:active{
    box-shadow: none;
  }
  .form-select:focus{
    box-shadow: none;
  }
  .options-style{
    background-color: #fff4f4;
    color: #2e313f;
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