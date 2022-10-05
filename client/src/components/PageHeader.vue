<template>

  <header>
    <div class="center header-left">
      <img src="../assets/img/tuchow-logo.jpeg" alt="tuchow-logo"/>
    </div>
    <div class="center header-center">
        <h1>Karta do głosowania</h1>
        <p>Konsultacje społeczne dotyczące nadania nazw rondom w ciągu drogi wojewódzkiej nr 977 w Tuchowie przy ul. Adama Mickiewicza, Tarnowskiej i Ryglickiej.</p>
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
  background-color: #2967B1;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: white;
}

p{
  color: white;
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
