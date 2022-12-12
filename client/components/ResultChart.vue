<script setup>
import { TitleComponent, TooltipComponent, LegendComponent , ToolboxComponent} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import config from "../plugins/echarts/config";
import * as Notify from "../tools/sweetalert";
import { onBeforeMount,  ref } from 'vue';
import { PieChart } from 'echarts/charts';
import { use } from 'echarts/core';
import VChart from 'vue-echarts';
import Api from "../tools/axios";
import json from "../plugins/echarts/mock.json"

const resultData = ref();

onBeforeMount(async () => {
  try {
    // no api request for demo purpose
    // const response = await Api.GetVoteResults()
    // config.series[0].data = response.data.sort(function (a, b) {
    //   return b.value - a.value;
    // });
    config.series[0].data = json
    resultData.value = config;
  } catch (error) {
    Notify.ShowPopUp(0)
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