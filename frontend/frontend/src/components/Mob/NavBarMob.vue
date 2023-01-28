<template>
  <div class="main">
    <img src="../../assets/logo.png" class="logo" alt="">
    <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">-</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        ...
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

  }
  .logo{
    width: 70px;
    height: 70px;
  }
</style>