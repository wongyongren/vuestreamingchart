<template>
    <div class="dashboard-main">
      <h5 style="text-align: center">TEMP</h5>
      <TChartORP class="dashgroup" />
      <BChartORP />
    </div>
</template>

<script>
import BChartORP from "./BChartTemp.vue";
import TChartORP from "./TChartTemp.vue";

export default {
  components: {
    BChartORP,
    TChartORP
  },
};
</script>

