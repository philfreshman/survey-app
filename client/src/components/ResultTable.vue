<script setup>
// import Api from "../plugins/axios";
//
// import {onBeforeMount, onMounted} from "vue";


// onBeforeMount(async() => {
//
//   class ResultData{
//     constructor(json){
//       Object.assign(this,json)
//     }
//   }
//
//   let results
//
//   try{
//     let results = await Api.GetVoteResults();
//     results = new ResultData(results.data)
//   }
//   catch(e){
//     console.log(e);
//   }
// })








</script>

<template>

  <h1>results</h1>
<!--  <v-table theme="dark">-->
<!--    <thead>-->
<!--    <tr>-->
<!--&lt;!&ndash;      <th class="text-left">&ndash;&gt;-->
<!--&lt;!&ndash;        Id&ndash;&gt;-->
<!--&lt;!&ndash;      </th>&ndash;&gt;-->
<!--      <th class="text-left">-->
<!--        Propozycja-->
<!--      </th>-->
<!--      <th class="text-left">-->
<!--        Liczba głosów-->
<!--      </th>-->
<!--    </tr>-->
<!--    </thead>-->
<!--    <tbody v-for="item in results" v-bind:key="item.id">-->
<!--    <tr>-->
<!--&lt;!&ndash;      <td>{{item.id}}</td>&ndash;&gt;-->
<!--      <td>{{item.proposalName}}</td>-->
<!--      <td>{{item.count}}</td>-->
<!--    </tr>-->
<!--    </tbody>-->
<!--  </v-table>-->
</template>



<script>
export default {
  name: "ResultTable"
}
</script>

<style scoped>

</style>