<template>
    <div class="dashboard-main">
      <h5 style="text-align: center">ORP</h5>
      <TChart class="dashgroup" />
      <BChart />
    </div>
</template>

<script>
import BChart from "./BChart.vue";
import TChart from "./TChart.vue";

export default {
  components: {
    BChart,
    TChart
  },
};
</script>


