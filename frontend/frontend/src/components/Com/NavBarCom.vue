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
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="$router.push('/courses')">КУРСЫ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" @click.prevent="$router.push('/prices')">СТОИМОСТЬ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true" @click.prevent="$router.push('/')">О НАС</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex">
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
  name: "NavBar"
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
  .logo{
    width: 85px;
    height: 85px;
  }
</style>