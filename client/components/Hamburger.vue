<script setup>
import ToggleButton from "./ToggleButton.vue";
import {onMounted} from "vue";

const hasToken = localStorage.getItem("token") !== null

function deleteToken(){
  localStorage.removeItem("token")
}

onMounted( () => {
  document.querySelector('.more-button').addEventListener('click', function () {
    document.querySelector('.list-container').classList.toggle('active');
  });
})
</script>

<template>
  <div class="list-container">
    <div class="more-button" aria-label="Menu Button">
      <div class="menu-icon-wrapper">
        <div class="menu-icon-line half first"></div>
        <div class="menu-icon-line"></div>
        <div class="menu-icon-line half last"></div>
      </div>
    </div>
    <ul class="more-button-list">

      <li class="more-button-list-item">
        <ToggleButton/>
      </li>

      <li v-if="hasToken" class="more-button-list-item">
        <a href="/surveyapp" @click="deleteToken">
          <img src="../assets/img/logout.png" alt="logout" style="width:20px; height:auto;" />
          <span>Logout</span>
        </a>
      </li>
      <li v-else class="more-button-list-item">
        <a href="/surveyapp/login">
          <img src="../assets/img/login.png" alt="login" style="width:20px; height:auto;"/>
          <span>Login</span>
        </a>
      </li>
      <li v-if="!hasToken" class="more-button-list-item">
        <a href="/surveyapp/register">
          <img src="../assets/img/register.png" alt="register" style="width:20px; height:auto;" />
          <span>Register</span>
        </a>
      </li>
      <li class="more-button-list-item">
        <a href="/surveyapp/results">
          <img src="../assets/img/results.png" alt="results" style="width:20px; height:auto;" />
          <span>Results</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Hamburger"
}
</script>
