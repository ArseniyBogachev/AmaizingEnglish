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
          <li class="item-list">
            <fa icon="fa-solid fa-circle-check" class="icon-item" />
            <p :class="textFontSize" v-html="item"></p>
          </li>
        </ul>
        <div class="footer-body">
          <button
              type="button"
              class="button-modal button-body mt-3 rounded-5"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              aria-controls="offcanvasBottom"
          >Записаться на курс</button>
        </div>
        <ModalCourseEnrollment></ModalCourseEnrollment>
      </div>
    </div>
  </div>

  <div class="additional-list-course">
    <p class="text-additional">Так же не забывай, что нет предела совершенству и ЯЗЫК можно совершенствовать постоянно! <br> Следуй рекомендациям своего преподавателя и не останавливайся на достигнутом!</p>
  </div>

</template>

<script>

import MyBackground from "@/components/UI/MyBackground";
import {mapGetters, mapActions} from 'vuex'
import ModalCourseEnrollment from "@/components/UI/ModalCourseEnrollment";

export default {
  name: "CoursesChildrenApp",
  components: {
    MyBackground,
    ModalCourseEnrollment,
  },
  props: {
    slug: String,
  },
  computed: {
    ...mapGetters({
      programms: 'programms',
      courses: 'courses',
    }),
    programm(){
      return this.programms.find((item) => item.link === this.slug)
    },
    textFontSize(){
      if (this.slug === 'speak') return 'text-item text-item-fs15'
      else if (this.slug === 'children') return 'text-item text-item-fs18'
    }
  },
  methods: {
    ...mapActions({
      courses_data: 'courses_data',
    }),
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
  .text-item-fs15{
    font-size: 15px;
  }
  .text-item-fs18{
    font-size: 18px;
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
      font-size: 13px;
    }
    .text-item-fs15{
      font-size: 12px;
    }
    .text-item-fs18{
      font-size: 12px;
    }
    .icon-item{
      margin-top: 0;
    }
  }
</style>