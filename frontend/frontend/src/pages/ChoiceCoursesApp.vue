<template>
  <MyBackground></MyBackground>
  <p class="title-list-course">
    Говори!» -это пошаговый курс разговорного английского языка, который позволяет преодолеть свой языковой барьер уже после первого уровня!
  </p>
  <div class="main">
    <div class="wrapper-block" v-for="course in courses" :key="course.id">
      <div class="header-course rounded-5 mt-3">
        <span class="text-header">{{ course.textHeader }}</span>
      </div>
      <div class="body-course">
        <p class="description-body">{{ course.descriptionBody }}</p>
        <span class="text-body">Ты научишься:</span>
        <ul class="list-body mt-3" v-for="item in course.textItem">
          <li class="item-list"><fa icon="fa-solid fa-circle-check" class="icon-item" /><p class="text-item" v-html="item"></p></li>
        </ul>
        <div class="footer-body">
          <button type="button" class="button-body mt-3 rounded-5">Записаться на курс</button>
        </div>
      </div>
    </div>
  </div>
  <div class="additional-list-course">
    <p class="text-additional">Так же не забывай, что нет предела совершенству и ЯЗЫК можно совершенствовать постоянно! Следуй рекомендациям своего преподавателя и не останавливайся на достигнутом!</p>
  </div>

</template>

<script>
import MyBackground from "@/components/UI/MyBackground";
export default {
  name: "CoursesChildrenApp",
  components: {
    MyBackground,
  },
  setup(){
    const courses = [
      {
        id: 1,
        textHeader: 'Level 1 - 4 месяца',
        descriptionBody: 'Преодолей свой языковой барьер по завершению курса!',
        textItem: [
          'составлять простые предложения, задавать и отвечать на вопросы  о месте жительства, знакомых, имуществе, виде деятельности, увлечениях, описывать местность вокруг себя;',
          'до 500 новых слов (элементарная лексика, в основном простые существительные, глаголы, прилагательные, местоимения); -базовая грамматика, которая применяется исключительно на практике;',
          'навыки произношения;',
          'восприятие языка на слух. <br> НО самое главное - способность говорить без страха и стеснения!;',
        ],
      },
      {
        id: 2,
        textHeader: 'Level 2 - 4 месяца',
        descriptionBody: 'Продолжение к первому уровню, который позволяет закрепить уже полученные знания и дополнить новыми.',
        textItem: [
            'использовать в речи фразы и выражения для рассказа о себе и семье, путешествиях, о своих предпочтениях в еде, музыке, делать описание местности;',
            'до 1000 новых слов;',
            'базовая грамматика, которая применяется исключительно на практике. -навыки правильного произношения;',
            'восприятие языка на слух;',
        ],
      },
      {
        id: 3,
        textHeader: 'Level 3 - 4 месяца',
        descriptionBody: 'Уровень, который позволяет УДВОИТЬ уже полученные знания.',
        textItem: [
            'рассказывать о себе, работе, покупках, досуге, в нескольких предложениях. Рассказывать, что было, описывать свои поездки, приключения из прошлого. Описывать основные аспекты повседневной жизни;',
            'до 1000 новых слов;',
            'базовая дополненная грамматика, которая используется и изучается ТОЛЬКО для практических заданий',
            'улучшенное произношение;',
            'восприятие более сложных конструкций языка на слух;',
        ],
      },
      {
        id: 4,
        textHeader: 'Level 4 - 4 месяца',
        descriptionBody: 'Ты добрался до среднего уровня владения языком! Уровень, который позволяет чувствовать себя уверенно в большинстве ситуаций, которые могут возникнуть во время пребывания в стране изучаемого языка.',
        textItem: [
            'составлять связное сообщение на известные или особо интересующие темы, описывать впечатления, события, надежды, стремления, изложить и обосновать своё мнение и планы;',
            'до 2000 новых слов;',
            'повторение базовой грамматики + сложные грамматические конструкции для практических целей;',
            'улучшенное произношение;',
            'восприятие сложных конструкций на слух, вплоть до мелких деталей;',
        ],
      },
      {
        id: 5,
        textHeader: 'Level 5 - 4 месяца',
        descriptionBody: 'Уровень, который позволяет ЗАКРЕПИТЬСЯ на среднем уровне, повторить, что выучил и умножить знания.',
        textItem: [
            'составлять связное сообщение на известные или особо интересующие темы, описывать впечатления, события, надежды, стремления, изложить и обосновать своё мнение и планы;',
            'до 1000 новых слов;',
            'повторение базовой грамматики + сложные грамматические конструкции для практических целей;',
            'улучшенное произношение;',
            'восприятие сложных конструкций на слух, вплоть до мелких деталей;',
        ],
      },
      {
        id: 6,
        textHeader: 'Level 6 - 4 месяца',
        descriptionBody: 'Уровень позволяет  говорить достаточно быстро и спонтанно, общаться с носителями языка без особых затруднений для любой из сторон.',
        textItem: [
            'делать четкие, подробные сообщения на различные темы и изложить свой взгляд на основную проблему, показать преимущество и недостатки разных мнений;',
            'до 1000 новых слов, выражений, фразовых глаголов;',
            'повторение  и закрепление сложных грамматический конструкций и изучение новых;',
            'произношение близкое к носителю языка;',
            'относительно свободное понимание разных акцентов и наречий на слух;',
        ],
      },
      // {
      //   id: 7,
      //   textHeader: 'Level 7 - 4 месяца',
      //   descriptionBody: 'Пришло время шлифовать все полученные навыки и умения и доводить их до совершенства!\n' +
      //       'Здесь ты займешься расширением своего словарного запаса, использованием различных синонимов и фразовых глаголов на практике. Так же повторишь предыдущий курс.',
      //   textItem: [
      //       'делать четкие, подробные сообщения на различные темы и изложить свой взгляд на основную проблему, показать преимущество и недостатки разных мнений;',
      //       'до 1000 новых слов, выражений, фразовых глаголов;',
      //       'повторение  и закрепление сложных грамматический конструкций и изучение новых;',
      //       'произношение близкое к носителю языка;',
      //       'относительно свободное понимание разных акцентов и наречий на слух;',
      //   ],
      // },
      // {
      //   id: 8,
      //   textHeader: 'Level 8 - 4 месяца',
      //   descriptionBody: 'Ты близко к вершине! Уровень подразумевает свободное владение языком, который позволяет говорить спонтанно в быстром темпе, не испытывая затруднений с подбором слов и выражений.',
      //   textItem: [
      //       'умение гибко и эффективно использовать язык для общения в научной и профессиональной деятельности;',
      //       'до 2000 новых слов, выражений, фразовых глаголов;',
      //       'глубокое понимание грамматики языка;',
      //       'произношение близкое к носителю языка;',
      //       'свободное понимание языка (наречия, акценты, игра слов);',
      //   ],
      // },
    ]

    return {courses}
  }
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
    font-size: 13px;
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