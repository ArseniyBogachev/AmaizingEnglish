<template>
  <div class="main">
    <imagecom class="d-none d-sm-block"></imagecom>
    <imagemob class="d-sm-none"></imagemob>
    <reviewscom class="reviews" :reviews="reviews"></reviewscom>
  </div>
</template>

<script>
import reviewscom from "@/components/ReviewsContent";
import imagecom from "@/components/Com/ImageAndOffCanvasCom";
import imagemob from "@/components/Mob/ImageAndOffCanvasMob";
export default {
  name: "HomeApp",
  components:{
    reviewscom,
    imagecom,
    imagemob,
  },
  setup() {
    const reviews = [
      {
        id: 1,
        name: 'Арсений',
        image: 'user-review.jpg',
        date: '04 февраля 2023',
        title: 'Очень нравится платформа и приложение.',
        content: 'На платформе легко и интересно проходить уроки английского языка, делать домашку, учить слова. Можно помимо уроков разбирать какие-то темы самостоятельно, есть подборки видео, слов и т. д.'
      },
      {
        id: 2,
        name: 'Даша',
        image: 'user-review-2.jpg',
        date: '01 января 2023',
        title: 'Очень нравится платформа и приложение.',
        content: 'Cловарный запас стал заметно больше, грамматика улучшилась. Мне очень нравится мой учитель, она носитель языка. Я сама её выбрала по описанию, приветствию и прослушав аудио.'
      },
      {
        id: 3,
        name: 'Кирилл',
        image: 'user-review-3.jpg',
        date: '15 октября 2022',
        title: 'Очень нравится платформа и приложение.',
        content: 'Это очень полезно для проверки своего уровня говорения и практики. Очень нравятся занятия, преподы супер! Обязательно продолжу заниматься дальше.'
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