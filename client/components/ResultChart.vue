<script setup>
import { TitleComponent, TooltipComponent, LegendComponent , ToolboxComponent} from 'echarts/components';
import * as Notify from "../tools/sweetalert";
import { CanvasRenderer } from 'echarts/renderers';
import config from "../plugins/echarts/config";
import { onBeforeMount,  ref } from 'vue';
import { PieChart } from 'echarts/charts';
import { use } from 'echarts/core';
import VChart from 'vue-echarts';
import Api from "../tools/axios";

let resultData = ref();

onBeforeMount(async () => {
  try {
    const response = await Api.GetVoteResults()
    config.series[0].data = response.data.sort(function (a, b) {
      return b.value - a.value;
    });
    resultData.value = config;
    // window.location.assign("/surveyapp/login");
  } catch (error) {
    Notify.ShowPopUp(0)
    alert('error')
    // setInterval(() => {
    //   window.location.assign("/surveyapp/register")
    // }, 2100);
  }
})

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  ToolboxComponent
]);

</script>


<template>
  <client-only>
    <v-chart autoresize :option="resultData" />
  </client-only>
</template>