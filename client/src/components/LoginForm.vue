<script setup>
import Api from "@/plugins/axios";
import { PreCheckPassword } from '@/validation/CustomRules'


const submitLogin = async (loginData, node) => {
  let result;
  try{
    result = await Api.CheckPassword(loginData)
    window.location.replace("/results");
  } catch (error){
    console.log(error);
  }
}

</script>



<template>
    <div class="form">
        <FormKit 
            type="form"
            #default="{ state: { valid } }"
            :actions="false"
            id="myLoginForm"
            @submit="submitLogin"

        >
          <section>
            <h2>Login</h2>
            <br>

            <FormKit
                type="password"
                name="password"
                label="Hasło"
                validation="required|(350)PreCheckPassword"
                :validation-rules="{PreCheckPassword}"
                :validation-messages="{
                required: 'Podaj hasło',
                PreCheckPassword: 'Hasło niepoprawne'
              }"
            />
            <!-- Submit -->
            <div class="step-nav">
              <FormKit type="submit" label="Zaloguj" :disabled="!valid" />
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
