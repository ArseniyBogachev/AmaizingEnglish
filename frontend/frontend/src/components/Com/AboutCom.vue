<template>
  <div class="main-com">
    <div class="block-image">
      <img src="../../assets/about_main.jpg" alt="" class="item-image">
    </div>
    <div class="text-block">
      <span class="text-title">О нас</span>
      <div class="line-block mt-4 mb-4"></div>
      <p class="item-text">
        После 10 лет преподавания, отсекая все лишнее и ненужное, я решил создать курс «Говори!». Это действительно «народный» курс для всех возрастов, который поможет  по-настоящему ПОНЯТЬ ЯЗЫК, и ЗАГОВОРИТЬ уже по окончанию первого
        курса! <br>

        Учите английский язык для себя, путешествий или работы, но когда доходит дело до разговора не можете выдавить из себя ни слова? <br> Или же не знаете ни слова по-английски, но мечтаете освоить его и заговорить? <br> Это все - курс «Говори!». <br>

        Если Вы думаете, что язык учить слишком поздно, или уверены , что у Вас нет никаких способностей к изучению иностранных языков, то этот курс как раз для Вас! По завершению Вы поймете, что с правильным подходом <br> ГОВОРИТЬ - ЛЕГКО, а ПОНИМАТЬ - ПРОСТО! <br>

        Сигаев Владимир, преподаватель, создатель школы английского языка «Amazing English» и разговорного курса «Говори!»
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCom"
}
</script>

<style scoped>
  .main-com{
    padding-top: 140px;
    padding-left: 2%;
    padding-right: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .block-image{
    margin-right: 100px;
  }
  .item-image{
    width: 550px;
    height: 800px;
  }

  .text-block{

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
  .item-text{
    font-size: 30px;
    color: cornsilk;
    font-weight: lighter;
  }
  @media (max-width: 1604px) {
    .item-text{
      font-size: 28px;
    }
    .text-title{
      font-size: 28px;
    }
  }
  @media (max-width: 1532px) {
    .item-text{
      font-size: 25px;
    }
    .text-title{
      font-size: 25px;
    }
  }
  @media (max-width: 1400px) {
    .item-text{
      font-size: 22px;
    }
    .text-title{
      font-size: 22px;
    }
    .item-image{
      width: 450px;
      height: 700px;
    }
  }
  @media (max-width: 1201px) {
    .item-text{
      font-size: 20px;
    }
    .text-title{
      font-size: 20px;
    }
    .item-image{
      width: 400px;
      height: 650px;
    }
    .line-block{
      width: 300px;
    }
  }
  @media (max-width: 966px) {
    .item-text{
      font-size: 17px;
    }
    .text-title{
      font-size: 17px;
    }
    .item-image{
      width: 350px;
      height: 550px;
    }
    .line-block{
      width: 300px;
    }
  }
</style>