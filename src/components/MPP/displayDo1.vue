<template>
  <div class="dashboard-main">
    <h5 style="text-align: center">DO</h5>
    <TChartDO class="dashgroup" />
    <BChartDO />
  </div>
</template>

<script>
import BChartDO from "./BChartDO.vue";
import TChartDO from "./TChartDO.vue";

export default {
  components: {
    BChartDO,
    TChartDO,
  },
};
</script>


