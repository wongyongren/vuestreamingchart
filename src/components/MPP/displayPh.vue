<template>
  <div class="dashboard-main">
    <h5 style="text-align: center">PH</h5>
    <TChartORP class="dashgroup" />
    <BChartORP />
  </div>
</template>

<script>
import BChartORP from "./BChartPh.vue";
import TChartORP from "./TChartPh.vue";

export default {
  components: {
    BChartORP,
    TChartORP,
  },
};
</script>


