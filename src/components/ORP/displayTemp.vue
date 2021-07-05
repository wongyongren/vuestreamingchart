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
<style>
.dashgroup {
  height: 100px;
  width: 160px;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
.dashboard-main {
  padding: 5px;
  margin-top: 0.5rem;
  border-radius: 5px;
  margin: 1px;
  background-color: #111516;
  color: #66e35f;
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.85) !important;
}
</style>

