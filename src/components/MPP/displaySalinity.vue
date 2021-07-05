<template>
  <div class="dashboard-main">
    <h5 style="text-align: center">SALINITY</h5>
    <TChartSalinity class="dashgroup" />
    <BChartSalinity />
  </div>
</template>

<script>
import BChartSalinity from "./BChartSalinity.vue";
import TChartSalinity from "./TChartSalinity.vue";

export default {
  components: {
    BChartSalinity,
    TChartSalinity,
  },
};
</script>



