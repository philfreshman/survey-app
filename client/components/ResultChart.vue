<script setup>
import {TitleComponent, TooltipComponent, LegendComponent,} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import config2 from "../plugins/echarts/config2";
import { PieChart } from 'echarts/charts';
import { use } from 'echarts/core';
import VChart from 'vue-echarts';
import {onBeforeMount,  ref} from 'vue';
import Api from "../plugins/axios";
import * as Notify from "../plugins/sweetalert/sweetalert";


let newData = ref();

onBeforeMount(async () => {
  try {
    const response = await Api.GetVoteResults()
    config2.series[0].data = response.data.sort(function (a, b) {
      return b.value - a.value;
    });
    newData.value = config2;
    // window.location.assign("/surveyapp/login");
  } catch (error) {
    Notify.ShowPopUp(0)
    alert('error')
    // setInterval(() => {
    //   window.location.assign("/surveyapp/register")
    // }, 2100);
  }
})


// const setups = newData


use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

</script>


<template>
  <client-only>
    <v-chart autoresize :option="newData" />
  </client-only>
</template>