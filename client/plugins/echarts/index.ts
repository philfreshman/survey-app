import { use } from 'echarts/core';

// import ECharts modules manually to reduce bundle size
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
    echarts.use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);
});