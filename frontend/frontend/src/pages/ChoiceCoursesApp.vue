<template>
  <MyBackground></MyBackground>
  <p class="title-list-course">
    {{programm.title}}
  </p>
  <div class="main">
    <div class="wrapper-block" v-for="course in courses" :key="course.id">
      <div class="header-course rounded-5 mt-3">
        <span class="text-header">{{ course.title_level }}</span>
      </div>
      <div class="body-course">
        <p class="description-body">{{ course.description }}</p>
        <span class="text-body">Ты научишься:</span>
        <ul class="list-body mt-3" v-for="item in course.list_courses">
          <li class="item-list"><fa icon="fa-solid fa-circle-check" class="icon-item" /><p class="text-item" :style="{fontSize: textFontSize}" v-html="item"></p></li>
        </ul>
        <div class="footer-body">
          <button type="button" class="button-modal button-body mt-3 rounded-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                  @click="this.selected_courses = course.id; this.selected_prices = 'Default'; this.radioAgeActive = '«Говори!»'; this.radioActive = 'Индивидуальные'; priceTitle = programm.programm_name; uploadData()">Записаться на курс</button>
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
                    <input type="radio" value="Индивидуальные" v-model="radioClassActive" @change="uploadData(); this.selected_prices = 'Default';">
                    <label>Индивидуальные занятия</label>
                    <br>
                    <input type="radio" value="Групповые" v-model="radioClassActive" @change="uploadData(); this.selected_prices = 'Default';">
                    <label>Групповые занятия</label>
                    <br>
                  </div>

                  <div class="radio-age-block" v-if="slug === 'speak'">
                    <input type="radio" value="«Говори!»" v-model="radioAgeActive" @change="uploadData(); this.selected_prices = 'Default';">
                    <label>Для взрослых</label>
                    <br>
                    <input type="radio" value="«Говори!» для детей" v-model="radioAgeActive" @change="uploadData(); this.selected_prices = 'Default';">
                    <label>Для детей</label>
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
                        v-if="radioClassActive === 'Индивидуальные' || (radioActive === 'Групповые' && selected_courses !== 'Default')"
                        :style="price_error">
                  <option class="options-style" v-for="p in options_prices" :value="p.value">{{p.name}}</option>
                </select>

                <button type="button" class="button-body mt-3 rounded-5" @click="user_courses_update({programm: selected_courses, price: selected_prices})">Оплатить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="additional-list-course">
    <p class="text-additional">Так же не забывай, что нет предела совершенству и ЯЗЫК можно совершенствовать постоянно! <br> Следуй рекомендациям своего преподавателя и не останавливайся на достигнутом!</p>
  </div>

</template>

<script>

import MyBackground from "@/components/UI/MyBackground";
import {mapGetters, mapActions, mapMutations} from 'vuex'
import MyModal from "@/components/UI/MyModal";

export default {
  name: "CoursesChildrenApp",
  components: {
    MyBackground,
    MyModal
  },
  data(){
    return {
      radioClassActive: 'Индивидуальные',
      radioAgeActive: '«Говори!»',
      priceTitle: '',
      selected_courses: 'Default',
      selected_prices: 'Default',
    }
  },
  props: {
    slug: String,
  },
  computed: {
    ...mapGetters({
      programms: 'programms',
      courses: 'courses',
      prices: 'prices',
      options_courses: 'options_courses',
      options_prices: 'options_prices',
      programm_error: 'programm_error',
      price_error: 'price_error',
    }),
    programm(){
      return this.programms.find((item) => item.link === this.slug)
    },
    textFontSize(){
      if (this.slug === 'speak') return '15px'
      else if (this.slug === 'children') return '18px'
    }
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
      await this.prices_data()
      await this.updateOptionsCourses()
      await this.updateOptionsPrices({
        priceTitle: this.priceTitle,
        typeClass: this.radioClassActive,
        selectedCourses: this.selected_courses,
        radioAgeActive: this.radioAgeActive,
      })
    }
  },
  watch: {
    slug(){
      this.courses_data(this.slug)
    }
  },
  created(){
    this.courses_data(this.slug)
  },
}
</script>

<style scoped>
  .title-list-course{
    padding-top: 150px;
    color: cornsilk;
    text-align: center;
    font-size: 25px;
    padding-left: 3%;
    padding-right: 3%;
    font-weight: bold;
  }
  .main{
    padding-bottom: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
  }
  .wrapper-block{
    border-radius: 10px;
    margin-top: 15%;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    background-color: rgba(175, 206, 232, 0.8);
    box-shadow: 0 0 5px 1px #868686;
    position: relative;
  }

  .header-course{
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
  .text-header{

  }

  .body-course{
    padding: 10% 3% 100px 3%;
  }
  .description-body{
    font-size: 20px;
    font-weight: bold;
    color: #232323;
  }
  .text-body{
    font-size: 16px;
    color: #232323;
  }
  .list-body{

  }
  .item-list{
    list-style-type: none;
    display: flex;
  }
  .icon-item{
    color: #213454;
    display: inline-block;
    margin-top: 5px;
  }
  .text-item{
    display: inline-block;
    margin-left: 7px;
    color: #232323;
  }
  .footer-body{
    position: absolute;
    width: 94%;
    bottom: 3%;
  }
  .button-body{
    border: none;
    background-color: #9c2632;
    color: cornsilk;
    height: 50px;
    box-shadow: 0 0 5px 1px #868686;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .button-body:active{
    box-shadow: 0 0 5px 1px #930c0f inset;
  }
  .additional-list-course{
    padding-bottom: 200px;
    display: block;
    color: cornsilk;
    text-align: center;
    font-size: 25px;
    padding-left: 3%;
    padding-right: 3%;
    font-weight: bold;
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

  @media (max-width: 1524px) {
    .wrapper-block{
      width: 400px;
    }
  }
  @media (max-width: 1236px) {
    .wrapper-block{
      width: 300px;
    }
  }
  @media (max-width: 990px) {
    .main{
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto auto;
    }
    .title-list-course{
      padding-top: 75px;
      font-size: 17px;
    }
    .additional-list-course{
      font-size: 17px;
    }
  }
  @media (max-width: 622px) {
    .wrapper-block{
      width: 500px;
    }
    .main{
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }
  @media (max-width: 520px) {
    .wrapper-block{
      width: 400px;
    }
  }
  @media (max-width: 425px) {
    .wrapper-block{
      margin-top: 10%;
      width: 300px;
    }
    .description-body{
      font-size: 15px;
    }
    .text-body{
      font-size: 12px;
    }
    .text-item{
      font-size: 11px;
    }
    .icon-item{
      margin-top: 0;
    }
  }
</style>