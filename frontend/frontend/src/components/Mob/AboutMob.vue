<template>
  <div class="main-mob">
    <div class="block-image">
      <img src="../../assets/about_main.jpg" alt="" class="item-image">
    </div>
    <div class="text-block">
      <p class="text-content">
        <button class="button-open-content" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          О нас
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <p class="item-text">
            После 10 лет преподавания, отсекая все лишнее и ненужное, я решил создать курс «Говори!». Это действительно «народный» курс для всех возрастов, который поможет  по-настоящему ПОНЯТЬ ЯЗЫК, и ЗАГОВОРИТЬ уже по окончанию первого
            курса! <br>

            Учите английский язык для себя, путешествий или работы, но когда доходит дело до разговора не можете выдавить из себя ни слова? <br> Или же не знаете ни слова по-английски, но мечтаете освоить его и заговорить? <br> Это все - курс «Говори!». <br>

            Если Вы думаете, что язык учить слишком поздно, или уверены , что у Вас нет никаких способностей к изучению иностранных языков, то этот курс как раз для Вас! По завершению Вы поймете, что с правильным подходом <br> ГОВОРИТЬ - ЛЕГКО, а ПОНИМАТЬ - ПРОСТО! <br>

            Сигаев Владимир, преподаватель, создатель школы английского языка «Amazing English» и разговорного курса «Говори!»
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMob"
}
</script>

<style scoped>
  .main-mob{
    padding-top: 140px;
    padding-left: 2%;
    padding-right: 2%;
  }

  .block-image{
    display: flex;
    justify-content: center;
  }
  .item-image{
    width: 300px;
    height: 450px;
  }

  .text-block{
    margin-top: 20px;
  }
  .text-content{
    font-weight: bold;
  }
  .button-open-content{
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-color: #d00c0f;
    color: cornsilk;
    width: 300px;
    border-radius: 5px;
    font-weight: lighter;
    border: none;
  }
  .card{
    background-color: rgba(0, 0, 0, 0);
  }
  .item-text{
    font-size: 30px;
    color: cornsilk;
    font-weight: lighter;
  }
  @media (max-width: 812px) {
    .item-text{
      font-size: 15px;
    }
    .item-image{
      width: 300px;
      height: 450px;
    }
  }
  @media (max-width: 667px) {
    .item-text{
      font-size: 13px;
    }
    .item-image{
      width: 250px;
      height: 350px;
    }
    .button-open-content{
      width: 250px;
    }
  }
  @media (max-width: 497px) {
    .main-mob{
      padding-top: 100px;
    }
  }
</style>