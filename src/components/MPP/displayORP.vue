<template>
  <div class="dashboard-main">
    <h5 style="text-align: center">ORP</h5>
    <TChartORP class="dashgroup" />
    <BChartORP />
  </div>
</template>

<script>
import BChartORP from "./BChartORP.vue";
import TChartORP from "./TChartORP.vue";

export default {
  components: {
    BChartORP,
    TChartORP,
  },
};
</script>


