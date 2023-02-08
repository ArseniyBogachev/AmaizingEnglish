<template>
  <MyBackground></MyBackground>
  <div class="main">
    <div class="wrapper-block">
      <div class="wrapper-text">
        <div class="wrapper-left">
          <a href="" @click.prevent="$router.push('/courses/adults')"><span>Курс "Говори!"</span> <span class="line-left"></span></a>
        </div>
        <div class="wrapper-right">
          <a href="" @click.prevent="$router.push('/courses/children')"><span>Для детей</span> <span class="line-right"></span></a>
        </div>
      </div>
      <div class="block-circle-left"></div>
      <div class="block-circle-right"></div>
    </div>
  </div>
</template>

<script>

import MyBackground from "@/components/UI/MyBackground";
export default {
  name: "Courses",
  components: {
    MyBackground,
  }
}
</script>

<style scoped>
  .main{
    padding-top: 13%;
  }
  .wrapper-block{
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 50%;
    position: relative;
  }


  .wrapper-text{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
  }
  .wrapper-text a{
    text-decoration: none;
    color: cornsilk;
    font-size: 35px;
    font-weight: bold;
  }
  .line-left{
    background-color: #6290ff;
    width: 0;
    height: 4px;
    display: block;
    transition: 0.5s;
  }
  .line-right{
    background-color: #6290ff;
    width: 0;
    height: 4px;
    display: block;
    transition: 0.5s;
  }
  .wrapper-text a:first-child:hover > span{
    width: 100%;
    transition: 0.5s;
  }
  .wrapper-text a:last-child:hover > span{
    width: 100%;
    transition: 0.5s;
  }



  .block-circle-left{
    width: 500px;
    height: 500px;
    border-radius: 47% 47% 47% 47%;
    justify-content: center;
    align-items: center;
    background-color: rgba(175, 206, 232, 0.8);
    text-decoration: none;
    animation: circle 6s linear infinite;
    position: relative;
    box-shadow: 0 0 20px #a4a4a4;
  }


  .block-circle-right{
    width: 500px;
    height: 500px;
    border-radius: 47% 47% 47% 47%;
    justify-content: center;
    align-items: center;
    background-color: rgba(175, 206, 232, 0.8);
    animation: circle 6s linear infinite;
    position: relative;
    box-shadow: 0 0 20px #a4a4a4;
  }


  @keyframes circle {
    /*100% {*/
    /*  width: 650px;*/
    /*  height: 550px;*/
    /*  border-radius: 40% 40% 70% 60%;*/
    /*}*/
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1331px) {
    .main{
      padding-top: 20%;
    }
    .block-circle-left {
      width: 400px;
      height: 400px;
    }
    .block-circle-right{
      width: 400px;
      height: 400px;
    }
  }
  @media (max-width: 987px) {
    .block-circle-left {
      width: 300px;
      height: 300px;
    }
    .block-circle-right{
      width: 300px;
      height: 300px;
    }
  }
  @media (max-width: 765px) {
    .block-circle-left {
      width: 500px;
      height: 500px;
      margin-left: auto;
      margin-right: auto;
    }
    .block-circle-right{
      width: 500px;
      height: 500px;
      margin-top: 150px;
      margin-left: auto;
      margin-right: auto;
    }
    .wrapper-block{
      display: block;
    }
    .wrapper-text{
      display: block;
    }
    .wrapper-text a{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 500px;
    }
    .wrapper-right{
      margin-top: 150px;
    }
  }
  @media (max-width: 659px) {
    .block-circle-left {
      width: 400px;
      height: 400px;
    }
    .block-circle-right{
      width: 400px;
      height: 400px;
    }
    .wrapper-text a{
      height: 400px;
    }
  }

  @media (max-width: 547px) {
    .block-circle-left {
      width: 300px;
      height: 300px;
    }
    .block-circle-right{
      width: 300px;
      height: 300px;
      margin-top: 100px;
    }
    .wrapper-text a{
      height: 300px;
    }
    .wrapper-right{
      margin-top: 100px;
    }
  }

  @media (max-width: 405px) {
    .main{
      padding-top: 25%;
    }
    .block-circle-left {
      width: 200px;
      height: 200px;
    }
    .block-circle-right{
      width: 200px;
      height: 200px;
    }
    .wrapper-text a{
      height: 200px;
      font-size: 20px;
    }
  }
</style>