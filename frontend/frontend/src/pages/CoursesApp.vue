<template>
  <div class="d-none d-lg-block" style="padding-top: 7%;">
    <div style="display: flex; justify-content: space-around; align-items: center">
      <div class="card mb-3" style="width: 35%;">
        <a href="" @click.prevent="$router.push('/courses/adults')"><img src="../assets/old.jpg" class="card-img-top" alt="..."></a>
        <div class="card-body">
          <h5 class="card-title"><a href="" class="link">Разговорный</a></h5>
          <p class="card-text">Курсы для возрослых состоят из 6 курсов для 6 разных уровнеий знания английского языка.</p>
        </div>
      </div>
      <div class="card mb-3" style="width: 35%;">
        <a href="" @click.prevent="$router.push('/courses/children')"><img src="../assets/young.jpg" class="card-img-top" alt="..."></a>
        <div class="card-body">
          <h5 class="card-title"><a href="" class="link">Для детей</a></h5>
          <p class="card-text">Курсы для тедей состоят из 3 разных курсов в зависимеости от возраста.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="d-lg-none">
    <div style="display: block">
      <div class="card mb-3" style="width: 100%;">
        <a href="" @click.prevent="$router.push('/courses/adults')"><img src="../assets/old.jpg" class="card-img-top" alt="..."></a>
        <div class="card-body">
          <h5 class="card-title"><a href="" class="link">Разговорный</a></h5>
          <p class="card-text">Курсы для возрослых состоят из 6 курсов для 6 разных уровнеий знания английского языка.</p>
        </div>
      </div>
      <div class="card mb-3" style="width: 100%;">
        <a href="" @click.prevent="$router.push('/courses/children')"><img src="../assets/young.jpg" class="card-img-top" alt="..."></a>
        <div class="card-body">
          <h5 class="card-title"><a href="" class="link">Для детей</a></h5>
          <p class="card-text">Курсы для тедей состоят из 3 разных курсов в зависимеости от возраста.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Courses",

}
</script>

<style scoped>
  .card{
    height: auto;
    border-radius: 0;
  }
  .card-img-top{
    height: auto;
    border-radius: 0;
    filter: brightness(50%);
    transition: 0.5s;
  }
  .card-img-top:hover{
    transition: 0.5s;
    filter: brightness(100%);
  }
  a{
    text-decoration: none;
  }
  .card-title{
    font-size: 25px;
  }
  .card-text{
    font-size: 20px;
    color: #423e40;
    font-weight: lighter;
  }
  .link{
    color: #423e40;
  }
  .link:hover{
    text-decoration: underline;
  }
</style>