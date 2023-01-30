<template>
  <div class="main">
    <div class="wrapper-block">
      <div class="wrapper-image">
        <a href="" class="wrapper-blackout">B1</a>
      </div>
      <div class="wrapper-content">
        <p class="text-content">
          Количество строк столбцов определяется с помощью свойств grid-template-rows и grid-template-columns. Свойства не наследуются.
        </p>
      </div>
      <div class="wrapper-button">
        <button type="button" class="button-enroll">ЗАПИСАТЬСЯ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoursesChildrenApp"
}
</script>

<style scoped>
  .main{
    padding-top: 150px;
  }
  .wrapper-block{
    max-width: 400px;
    height: auto;
  }
  .wrapper-image{
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-image: url('../assets/learn.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .wrapper-blackout{
    position: absolute;
    background-color: #d00c0f;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    z-index: 1;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: white;
    text-decoration: none;
    font-weight: lighter;
    letter-spacing: 1px;
    transition: 0.5s;
  }
  .wrapper-blackout:hover{
    background-color: #423e40;
    transition: 0.5s;
  }
  .wrapper-content{
    margin-top: 30px;
    width: 100%;
  }
  .text-content{
    font-size: 15px;
    font-weight: lighter;
    text-align: center;
  }
  .wrapper-button{

  }
  .button-enroll{
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background-color: #1f1b1d;
    color: white;
    font-weight: lighter;
    border: none;
    padding: 1% 3%;
  }
  .button-enroll:active{
    box-shadow: 0 0 5px 2px black inset;
  }
</style>