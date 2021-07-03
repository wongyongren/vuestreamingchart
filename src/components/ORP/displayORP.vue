<template>
    <div >
      <h5>ORP</h5>
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

