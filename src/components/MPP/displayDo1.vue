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

