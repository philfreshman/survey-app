<template>

  <header>
    <a href="/login">Login</a>
    <br>
    <a href="/register">Register</a>
    <br>
    <a href="/results">Results</a>
    <br>
    <div class="center header-left">
      <a href="/"><img src="../assets/img/falcon.png" alt="tuchow-logo"/></a>
    </div>
    <div class="center header-center">
        <h1>Developer survey</h1>
        <p>Choose your favourite programming languages</p>
    </div>
    <div class="center header-right">
    </div>
  </header>
</template>


<script>
  export default {
    name: "PageHeader"
  }
</script>



<style scoped>

header{
  height: min-content;
  width: 100%;
  background-color: rgba(194, 185, 185, 0.11);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: black solid 2px;
}

.logo{
  height: 100%;
  width: 30%;
  background-color: rgba(255, 0, 0, 0.25);
}

img{
  float: left;
  top: 0;
  left: 0;
  height: 100px;
  z-index: 123;
}

.header-left{
  height: 100%;
  width: 15vw;
  min-width: min-content;
  overflow: hidden;
}

.header-center{
  height: 100%;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.header-right{
  height: 100%;
  width: 15vw;
  background-color: yellow;
}

h1{
  font-size: 1.8em;
  text-align: center;
  margin: 5px;
  color: black;
}

p{
  color: black;
  text-align: center;
  font-size: 20px;
  margin: 15px;

}

@media (max-width: 860px) {
  header{
    flex-direction: column;
  }
  .header-center{
    width: 85%;
  }

  .header-right{
    height: 100%;
    width: 0;
  }

}


@media (max-width: 600px) {

  h1 { font-size: 1.5em; }

  header{
    flex-direction: column;
  }

  .header-center{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

}

</style>
