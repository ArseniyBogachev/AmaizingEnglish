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
          <h5 class="offcanvas-title" id="offcanvasRightLabel">MENU</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="list-button">
            <li class="wrapper-button"><button type="button" class="choice-button" @click.prevent="$router.push('/')">HOME</button></li>
            <li class="wrapper-button"><button type="button" class="choice-button" @click.prevent="$router.push('/courses')">COURSES</button></li>
            <li class="wrapper-button" style="border-bottom: 1px solid #bfb9b8"><button type="button" class="choice-button">PRICES</button></li>
          </ul>
          <ul class="list-button" style="margin-top: 100px">
            <li class="wrapper-button"><button type="button" class="choice-button">LOGIN</button></li>
            <li class="wrapper-button" style="border-bottom: 1px solid #bfb9b8"><button type="button" class="choice-button" @click.prevent="$router.push('/register')">REGISTER</button></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBarMob"
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
  }
  .wrapper-logo{

  }
  .logo{
    width: 40px;
    height: 40px;
  }
  .wrapper-btn-menu{
    margin-top: 10px;
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
    padding: 0;
  }
  .list-button{
    padding: 0;
    width: 100%;
  }
  .wrapper-button{
    list-style-type: none;
    border-top: 1px solid #bfb9b8;
    width: 100%;
  }
  .btn-close:focus{
    outline: none;
    box-shadow: none;
  }
  .choice-button{
    width: 100%;
    border: none;
    background-color: white;
    color: #1f1b1d;
    text-align: center;
  }
  .choice-button:active{
    box-shadow: 0 0 5px 1px #b2acab inset;
  }
</style>