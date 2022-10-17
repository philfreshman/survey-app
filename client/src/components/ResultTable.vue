<script setup>
import Api from "../plugins/axios";

class ResultData{
  constructor(json){
    Object.assign(this,json)
  }
}

let results

try{
  let result = await Api.GetVoteResults();
  results = new ResultData(result.data)
}
catch(e){
  console.log(e);
}




</script>

<template>
  <v-table theme="dark">
    <thead>
    <tr>
<!--      <th class="text-left">-->
<!--        Id-->
<!--      </th>-->
      <th class="text-left">
        Propozycja
      </th>
      <th class="text-left">
        Liczba głosów
      </th>
    </tr>
    </thead>
    <tbody v-for="item in results" v-bind:key="item.id">
    <tr>
<!--      <td>{{item.id}}</td>-->
      <td>{{item.proposalName}}</td>
      <td>{{item.count}}</td>
    </tr>
    </tbody>
  </v-table>
</template>



<script>
export default {
  name: "ResultTable"
}
</script>

<style scoped>

</style>