<template>
    <div >
      <h5>PH</h5>
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
</style>

