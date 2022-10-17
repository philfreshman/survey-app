<script setup>
  import ResultTable from '../components/ResultTable.vue'

</script>

<template>
  <Suspense>
    <ResultTable/>
  </Suspense>
</template>

<script>
export default {
  name: "ResultView"
}
</script>
