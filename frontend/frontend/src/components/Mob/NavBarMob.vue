<template>
  <div class="main">
    <div class="wrapper-logo">
      <img src="../../assets/logo.png" class="logo" alt="">
    </div>
    <div class="wrapper-btn-menu">
      <button class="button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <span class="line" style="margin-bottom: 2px"></span>
        <span class="line" style="margin-bottom: 2px"></span>
        <span class="line"></span>
      </button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">

          <div class="offcanvas-title d-flex flex-row">
            <img src="../../assets/logo.png" class="logo" alt="">
            <h6 class="offcanvas-title pt-2" id="offcanvasRightLabel">AMAZING ENGLISH</h6>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-3">
          <ul class="list-button">
            <li class="wrapper-button"><button type="button" class="choice-button" @click.prevent="$router.push('/')">ГЛАВНАЯ</button></li>
            <hr>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">КУРСЫ</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item first" href="#" @click.prevent="$router.push('/courses/speak')">Курс «Говори!»</a></li>
                <li><a class="dropdown-item last" href="#" @click.prevent="$router.push('/courses/children')"><span>Для детей</span></a></li>
              </ul>
            </li>
            <hr>
            <li class="wrapper-button"><button type="button" class="choice-button" @click.prevent="$router.push('/prices')">СТОИМОСТЬ</button></li>
            <hr>
            <li class="wrapper-button"><button type="button" class="choice-button" @click.prevent="$router.push('/about')">О НАС</button></li>
            <hr>
          </ul>
          <div class="phone mt-5 d-flex justify-content-center align-items-center">
            <h5 class="text-white">8(800)555-35-35</h5>
          </div>
          <ul class="list-button mt-5">
            <li class="wrapper-button"><button type="button" class="choice-button" @click.prevent="$router.push('/login')">ВОЙТИ</button></li>
            <hr>
            <li class="wrapper-button"><button type="button" class="choice-button" @click.prevent="$router.push('/register')">РЕГИСТРАЦИЯ</button></li>
          </ul>
          <section class="list-icon">
            <MyLinkIcons :icon="icon"></MyLinkIcons>
          </section>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import MyLinkIcons from "@/components/UI/MyLinkIcons";
export default {
  name: "NavBarMob",
  components: {
    MyLinkIcons,
  },
  setup(){
    const icon = [
      {name: 'fa-brands fa-facebook', color: '#3b5998'},
      {name: 'fa-brands fa-telegram', color: '#55acee'},
      {name: 'fa-brands fa-google', color: '#dd4b39'},
      {name: 'fa-brands fa-instagram', color: '#ac2bac'},
      {name: 'fa-brands fa-twitter', color: '#0082ca'},
      {name: 'fa-brands fa-vk', color: '#333333'},
    ]

    return {icon}
  }
}
</script>

<style scoped>
  .main{
    position: fixed;
    width: 100%;
    box-shadow: 0 0 5px 1px black;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .wrapper-logo{

  }
  .logo{
    width: 50px;
    height: 50px;
  }
  .wrapper-btn-menu{
    margin-right: 10px;
  }
  .button{
    padding: 2%;
    border: none;
    background-color: white;
  }
  .line{
    display: block;
    width: 20px;
    height: 4px;
    border-radius: 10px;
    background-color: #757173;
  }
  .offcanvas-body{
    position: relative;
  }
  .list-button{
    padding: 0;
    width: 100%;
  }
  .dropdown{
    list-style-type: none;
    width: 100%;
    padding-left: 6px;
  }
  .dropdown-menu{
    height: 100px;
    padding: 0;
    width: 200px;
  }
  .dropdown-menu li{
    height: 50%;
  }
  .dropdown-menu li:last-child{
    border-top: 1px solid #e2e7f5;
  }
  .dropdown-item{
    height: 100%;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  .first:hover{
    border-radius: 5px 5px 0 0;
  }
  .last:hover{
    border-radius: 0 0 5px 5px;
  }
  .first:active{
    background-color: rgba(156, 38, 50, 0.8);
  }
  .last:active{
    background-color: rgba(156, 38, 50, 0.8);
  }
  .nav-link{
    color: #1f1b1d;
    font-weight: bold;
  }
  .wrapper-button{
    list-style-type: none;
    width: 100%;
  }
  .btn-close:focus{
    outline: none;
    box-shadow: none;
  }
  .choice-button{
    border: none;
    background-color: white;
    color: #1f1b1d;
    font-weight: bold;
  }
  .phone{
    background: #a7cfdf;
    background: -moz-linear-gradient(top,  #a7cfdf 0%, #23538a 100%);
    background: -webkit-linear-gradient(top,  #a7cfdf 0%,#23538a 100%);
    background: linear-gradient(to bottom,  #a7cfdf 0%,#23538a 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a7cfdf', endColorstr='#23538a',GradientType=0 );
    width: 100%;
    height: 60px;
  }
  .list-icon{
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
</style>