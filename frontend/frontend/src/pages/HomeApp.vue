<template>
  <div class="main">
    <imagecom class="d-none d-sm-block"></imagecom>
    <imagemob class="d-sm-none"></imagemob>
    <ModalCourseEnrollment></ModalCourseEnrollment>
    <reviewscom class="reviews" :reviews="reviews"></reviewscom>
  </div>
</template>

<script>

import reviewscom from "@/components/ReviewsContent";
import imagecom from "@/components/Com/ImageAndOffCanvasCom";
import imagemob from "@/components/Mob/ImageAndOffCanvasMob";
import ModalCourseEnrollment from "@/components/UI/ModalCourseEnrollment";

export default {
  name: "HomeApp",
  components:{
    reviewscom,
    imagecom,
    imagemob,
    ModalCourseEnrollment,
  },
  setup() {
    const reviews = [
      {
        id: 1,
        name: 'Анна',
        image: 'user-review.png',
        date: '04 февраля 2023',
        title: 'Очень нравится платформа и приложение.',
        content: 'Проходила разговорный курс с Владимиром. Прошла первый этап, который длился 4 месяца. ' +
            'За это время я заговорила на английском! ' +
            'Начинала с самых основ. ' +
            'Очень нравится методика и подход на уроках. ' +
            'Буду продолжать учиться дальше!'
      },
      {
        id: 2,
        name: 'Людмила',
        image: 'user-review-2.png',
        date: '01 января 2023',
        title: 'Очень нравится платформа и приложение.',
        content: 'Была на открытом занятии с Владимиром.\n' +
            'Сначала я думала, что он носитель языка)))\n' +
            'Когда он заговорил по-русски, испытала шок...\n' +
            'Хорошо он так с детьми работает. ' +
            'Много интерактива, дети двигаются: то пересядут, то стулья передвинут, то встанут... Молодец!\n' +
            'Владимир тактичен, не агрессивен, доброжелателен. Очень понравились эти качества!',
      },
      {
        id: 3,
        name: 'Алина',
        image: 'user-review-3.png',
        date: '15 октября 2022',
        title: 'Очень нравится платформа и приложение.',
        content: 'Редко пишу отзывы, но тут не смогла не написать)) ' +
            'Я всегда была убеждена, что английский (и вообще иностранные языки) точно не моя история!) ' +
            'Случайно увидела рекламу курса, цена показалась адекватной и я решила попробовать. ' +
            'Была приятно удивлена, что не встретила никакого осуждения за мои, парой глупые вопросы в любое время суток. ' +
            'Владимир всегда объяснял мне до победного, причем спокойно и дружелюбно, это очень подкупает!)) ' +
            'Конечно, для уверенного пользователя мне еще далеко, ' +
            'но считаю, что за 4 месяца уже уверенно перешла с нулевого уровня, до стабильного А2!)) ' +
            'Главное, что я перестала чувствовать неуверенность и стала действительно пробовать говорить простые предложения, ' +
            'для меня это очень большой прогресс!)) ' +
            'Короче говоря, искренне рекомендую всем и пойду сама еще на последующие курсы!))',
      },
    ]

    return {reviews}
  }
}
</script>

<style scoped>
  .main{

  }
</style>