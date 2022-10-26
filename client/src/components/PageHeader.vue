<script setup>
  import HamburgerNav from "./HamburgerNav.vue";
</script>

<template>
  <header>
    <div class="box header-left">
      <a href="/"><img src="../assets/img/falcon.png" alt="tuchow-logo"/></a>
    </div>
    <div class="box header-center">
      <h1>Developer survey</h1>
      <p>Choose your favourite programming&nbsp;languages</p>
    </div>
    <div class="box header-right">
      <HamburgerNav/>
    </div>
  </header>
</template>


<script>
  export default {
    name: "PageHeader"
  }
</script>


