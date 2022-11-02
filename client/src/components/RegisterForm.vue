<script setup>
import Api from "../plugins/axios";
import * as Notify from "../plugins/sweetalert/sweetalert.js";


const submitRegister = async (registerData, node) => {
  try{
    const response = await Api.Register(registerData)
    window.location.assign("/login");
  } catch (error){
    Notify.ShowPopUp(null)
    setInterval(() => {window.location.assign("/register")}, 2100);
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
        @submit="submitRegister"
    >
      <section>
        <h2>Register</h2>
        <br>
          <FormKit
              type="text"
              name="username"
              label="Username"
              help="Set your username"
              validation="required"
              :validation-messages="{
                  required: 'Username required',
                }"
          />
          <FormKit
              type="password"
              name="password"
              label="Password"
              help="Enter a new password"
              validation="required"
              validation-visibility="dirty"
          />
          <FormKit
              type="password"
              name="password_confirm"
              label="Confirm password"
              help="Confirm your new password"
              validation="required|(100)confirm"
              validation-visibility="dirty"
              validation-label="Password confirmation"
          />
        <!-- Submit -->
        <div class="step-nav">
          <FormKit type="submit" label="Register" :disabled="!valid" />
        </div>
      </section>
    </FormKit>
  </div>
</template>

<script>
export default {
  name: "RegisterForm"
}
</script>
