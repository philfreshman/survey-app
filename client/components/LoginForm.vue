<script setup>
import Api from "../tools/axios";
import * as Notify from "../tools/sweetalert";


const submitLogin = async (loginData, node) => {
  try{
    // no api request for demo purpose
    // const response = await Api.Login(loginData)
    // localStorage.setItem("token", response.data.token);
    localStorage.setItem("token", "demo");
    await navigateTo('/results')
  } catch (error){
    Notify.ShowPopUp(null)
    setInterval(() => {window.location.assign("/login")}, 2100);
  }
}


</script>



<template>
    <div class="form">
      <FormKit
          type="form"
          #default="{ state: { valid } }"
          :actions="false"
          id="myRegisterForm"
          @submit="submitLogin"
      >
        <section>
          <h2>Login</h2>
          <br>
          <FormKit
              type="text"
              name="username"
              label="Username"
              value="admin"
              validation="required"
              :validation-messages="{
                  required: 'Username required',
                }"
          />
          <FormKit
              type="password"
              name="password"
              label="Password"
              value="pass"
              validation="required"
              validation-visibility="dirty"
          />
          <!-- Submit -->
          <div class="step-nav">
            <FormKit type="submit" label="Login" :disabled="!valid" />
          </div>
        </section>
      </FormKit>
  </div>
</template>




<script>
export default {
  name: "LoginForm"
}
</script>
