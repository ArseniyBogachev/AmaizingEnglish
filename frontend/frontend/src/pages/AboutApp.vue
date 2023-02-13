<template>
  <MyBackground></MyBackground>
  <div class="container-md">
    <span class="text-title">О нас</span>
    <div class="line-block mt-4 mb-4"></div>
    <p class="text-block">
      После 10 лет преподавания, отсекая все лишнее и ненужное, я решил создать курс «Говори!». Это действительно «народный»курс для всех возрастов, который поможет  по-настоящему ПОНЯТЬ ЯЗЫК, и ЗАГОВОРИТЬ уже по окончанию первого
      курса! <br>

      Учите английский язык для себя, путешествий или работы, но когда доходит дело до разговора не можете выдавить из себя ни слова? Или же не знаете ни слова по-английски, но мечтаете освоить его и заговорить? Это все - курс «Говори!». <br>

      Если Вы думаете, что язык учить слишком поздно, или уверены , что у Вас нет никаких способностей к изучению иностранных языков, то этот курс как раз для Вас! По завершению Вы поймете, что с правильным подходом ГОВОРИТЬ - ПРОСТО, а ПОНИМАТЬ - ЛЕГКО! <br>

      Сигаев Владимир, преподаватель, создатель школы английского языка «Amazing English» и разговорного курса «Говори!»
    </p>
  </div>
</template>

<script>
import MyBackground from "@/components/UI/MyBackground";
export default {
  name: "AboutApp",
  components: {
    MyBackground,
  }
}
</script>

<style scoped>
  .container-md{
    padding-top: 140px;
  }
  .text-title{
    display: block;
    color: cornsilk;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
  }
  .line-block{
    height: 2px;
    width: 400px;
    background-color: cornsilk;
    margin-left: auto;
    margin-right: auto;
  }
  .text-block{
    font-size: 35px;
    color: cornsilk;
    font-weight: lighter;
  }
  @media (max-width: 1400px) {
    .text-block{
      font-size: 30px;
    }
    .text-title{
      font-size: 30px;
    }
  }
  @media (max-width: 1201px) {
    .text-block{
      font-size: 25px;
    }
    .text-title{
      font-size: 25px;
    }
  }
  @media (max-width: 771px) {
    .text-block{
      font-size: 20px;
    }
    .text-title{
      font-size: 20px;
    }
  }
  @media (max-width: 497px) {
    .text-block{
      font-size: 17px;
    }
    .line-block{
      width: 250px;
    }
    .text-title{
      font-size: 17px;
    }
  }
</style>