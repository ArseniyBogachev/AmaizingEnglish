<template>
  <div class="main">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img src="../../assets/logo.png" class="logo" alt="">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" @click.prevent="$router.push('/')">ГЛАВНАЯ</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">КУРСЫ</a>
              <ul class="dropdown-menu">
                <li v-for="p in programms"><a class="dropdown-item" href="#" @click.prevent="$router.push(`/courses/${p.link}`)">{{p.programm_name}}</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" @click.prevent="$router.push('/prices')">СТОИМОСТЬ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" @click.prevent="$router.push('/about')">О НАС</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="user-block" v-if="this.$store.getters.verify">
        <div class="wrapper-user">
          <div class="btn-group dropstart">
            <a class="user-link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <fa icon="fa-solid fa-user" class="user-icon"/>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click.prevent="$router.push('/profile')">Мой профиль</a></li>
              <li><a class="dropdown-item" href="#" @click="$emit('logout')">Выйти</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d-flex" v-else>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#" @click.prevent="$router.push('/login')">ВОЙТИ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="$router.push('/register')">РЕГИСТРАЦИЯ</a>
            </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    programms: {
      type: Array,
      default: [],
    }
  }
}
</script>

<style scoped>
  .main{
    position: fixed;
    width: 100%;
    box-shadow: 0 0 5px 1px black;
    z-index: 3;
  }
  .navbar{
    padding-right: 1%;
  }
  .nav-item{
    margin-left: 30px;
  }
  .nav-link{
    font-size: 16px;
  }
  .dropdown-menu{
    height: 130px;
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
  .dropdown-item:active{
    background-color: rgba(156, 38, 50, 0.8);
  }
  .dropdown-item:hover{
    border-radius: 5px;
  }
  .logo{
    width: 85px;
    height: 85px;
  }

  .user-block{

  }
  .wrapper-user{

  }
  .btn-group{

  }
  .user-link{
    margin-right: 20px;
  }
  .user-icon{
    color: #868686;
    width: 20px;
    height: 20px;
  }
</style>