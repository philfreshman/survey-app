<script setup lang="ts">
import axios from 'plugins/axios'
import {onMounted} from "vue";

let voteResult: any;

onMounted(() => {
  try{
    voteResult = axios.GetVoteResults
    console.dir(voteResult)
  }catch{
    alert("error")
  }
})

</script>
<template>
  <textarea>
    {{}}
  </textarea>
</template>