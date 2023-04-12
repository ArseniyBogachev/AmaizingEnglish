<template>
  <button type="button" class="button-modal button-body mt-3 rounded-5" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"
          @click="this.selected_courses = course.id;
                  this.selected_prices = 'Default';
                  this.radioAgeActive = '«Говори!»';
                  this.radioActive = 'Индивидуальные';
                  priceTitle = programm.programm_name;
                  uploadData()"
  >Записаться на курс
  </button>
  <div class="modal fade h-100 w-100" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="true"
       tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <span>Оформите заказ</span>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <div class="radio-block">
            <div class="radio-class-block">
              <input type="radio" value="Индивидуальные" v-model="radioClassActive"
                     @change="uploadData(); this.selected_prices = 'Default';">
              <label>Индивидуальные занятия</label>
              <br>
              <input type="radio" value="Групповые" v-model="radioClassActive"
                     @change="uploadData(); this.selected_prices = 'Default';">
              <label>Групповые занятия</label>
              <br>
            </div>

            <div class="radio-age-block" v-if="slug === 'speak'">
              <input type="radio" value="«Говори!»" v-model="radioAgeActive"
                     @change="uploadData(); this.selected_prices = 'Default';">
              <label>Для взрослых</label>
              <br>
              <input type="radio" value="«Говори!» для детей" v-model="radioAgeActive"
                     @change="uploadData(); this.selected_prices = 'Default';">
              <label>Для детей</label>
              <br>
            </div>
          </div>

          <select class="form-select" aria-label=".form-select-lg example"
                  v-model="selected_courses"
                  @change="uploadData()"
                  :style="programm_error">
            <option class="options-style" v-for="c in options_courses" :value="c.value">{{ c.name }}</option>
          </select>

          <select class="form-select" aria-label=".form-select-lg example"
                  v-model="selected_prices"
                  v-if="radioClassActive === 'Индивидуальные' || (radioActive === 'Групповые' && selected_courses !== 'Default')"
                  :style="price_error">
            <option class="options-style" v-for="p in options_prices" :value="p.value">{{ p.name }}</option>
          </select>

          <button type="button" class="button-body mt-3 rounded-5"
                  @click="user_courses_update({programm: selected_courses, price: selected_prices})">Оплатить
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "modalChioceCourses",
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
}
</script>

<style scoped>
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
</style>