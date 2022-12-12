<script setup>
import {onBeforeMount} from "vue";
import Api from "../tools/axios";

onBeforeMount(async () => {
   try {
      const response = await Api.Test()
      console.dir(response.data)
   } catch (error) {
      alert('error')
   }
})

</script>

<template>

</template>

<script>
export default {
   name: "AxiosTest"
}
</script>

<style scoped>

</style>