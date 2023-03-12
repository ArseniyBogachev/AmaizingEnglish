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
          <div class="content-text" v-for="lesson in text.list_type_courses">
            <p>{{lesson.title}} ({{lesson.count_lessons}} академических часов)</p>
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
        <button type="button" class="button-footer mt-3 rounded-5">Записаться на курс</button>
      </div>
    </div>
  </div>
</template>

<script>

import MyBackground from "@/components/UI/MyBackground";
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "PricesApp",
  components: {
    MyBackground
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
  }
  // setup(){
  //   const prices = [
  //     {
  //       headerText: '«Говори!»',
  //       descriptionBody: 'Продолжительность курса - 4 месяца',
  //       additionalText: 'Запишись на курс до 31.03.2023 и получи ДОПОЛНИТЕЛЬНУЮ СКИДКУ -10%',
  //       textBody: [
  //         {
  //           title: 'Индивидуальные занятия',
  //           text: [
  //             {countHours: '1 занятие', priceLessons: '1 100 руб. за академический час'},
  //             {countHours: '1 месяц (12 академических часов)', priceLessons: '-10% = 7 920 руб'},
  //             {countHours: '1 курс (48 академических часов)', priceLessons: '-15% = 30 192 руб'},
  //           ]
  //         },
  //         {
  //           title: 'Групповые занятия (от 3 до 4 чел.)',
  //           text: [
  //             {countHours: '1 занятие', priceLessons: '800 руб. за академический час'},
  //             {countHours: '1 месяц (12 академических часов)', priceLessons: '-10% = 5 120 руб'},
  //             {countHours: '1 курс (48 академических часов)', priceLessons: '-15% = 21 760 руб'},
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       headerText: '«Говори!» для детей',
  //       descriptionBody: 'Продолжительность курса - 4 месяца',
  //       additionalText: 'Запишись на курс до 31.03.2023 и получи ДОПОЛНИТЕЛЬНУЮ СКИДКУ -10%',
  //       textBody: [
  //         {
  //           title: 'Индивидуальные занятия',
  //           text: [
  //             {countHours: '1 занятие', priceLessons: '1 100 руб. за академический час'},
  //             {countHours: '1 месяц (12 академических часов)', priceLessons: '-15% = 7 548 руб'},
  //             {countHours: '1 курс (48 академических часов)', priceLessons: '-20% = 28 416 руб'},
  //           ]
  //         },
  //         {
  //           title: 'Групповые занятия (от 3 до 4 чел.)',
  //           text: [
  //             {countHours: '1 занятие', priceLessons: '600 руб. за академический час'},
  //             {countHours: '1 месяц (12 академических часов)', priceLessons: '-15% = 5 440  руб'},
  //             {countHours: '1 курс (48 академических часов)', priceLessons: '-20% = 20 480 руб'},
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       headerText: '«Для детей»',
  //       descriptionBody: 'Общий курс для детей разного возраста и уровня, который включает все аспекты языка и учитывает школьную программу',
  //       additionalText: '',
  //       textBody: [
  //         {
  //           title: 'Индивидуальные занятия',
  //           text: [
  //             {countHours: '1 занятие', priceLessons: '1 200 руб. за академический час'},
  //             {countHours: '1 месяц (12 академических часов)', priceLessons: '-30% = 8 640 руб'},
  //             {countHours: '4 месяца (32 академических часа)', priceLessons: '-20% = 30 720 руб'},
  //             {countHours: '8 месяцев (64 академических часа)', priceLessons: '-30% = 53 760 руб'},
  //           ]
  //         },
  //         {
  //           title: '7-9 лет (от 3 до 6 человек)',
  //           text: [
  //             {countHours: '1 занятие', priceLessons: '500 руб. за академический час'},
  //             {countHours: '1 месяц - (8 занятий по 50 мин)', priceLessons: '-10% = 3 600 руб'},
  //             {countHours: '4 месяца (32 академических часа)', priceLessons: '-20% = 12 800 руб'},
  //             {countHours: '8 месяцев (64 академических часа)', priceLessons: '-30% = 22 400 руб'},
  //           ]
  //         },
  //         {
  //           title: '10-12 лет (от 3 до 6 человек)',
  //           text: [
  //             {countHours: '1 занятие', priceLessons: '600 руб. за 60 мин'},
  //             {countHours: '1 месяц (8 занятий по 60 мин)', priceLessons: '-10% = 4 320 руб'},
  //             {countHours: '4 месяца (32 академических часа)', priceLessons: '-20% = 15 360 руб'},
  //             {countHours: '8 месяцев (64 академических часа)', priceLessons: '-30% = 26 880 руб'},
  //           ]
  //         },
  //         {
  //           title: '13-18 лет (от 3 до 6 человек)',
  //           text: [
  //             {countHours: '1 занятие', priceLessons: '700 руб. за 80 мин'},
  //             {countHours: '1 месяц (8 занятий по 80 мин)', priceLessons: '-10% = 5 040 руб'},
  //             {countHours: '4 месяца (32 академических часа)', priceLessons: '-20% = 17 920 руб'},
  //             {countHours: '8 месяцев (64 академических часа)', priceLessons: '-30% = 31 160'},
  //           ]
  //         },
  //       ]
  //     },
  //   ]
  //   return {prices}
  // },
}
</script>

<style scoped>
  .img-fluid{
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: brightness(20%);
    object-fit: cover;
  }
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