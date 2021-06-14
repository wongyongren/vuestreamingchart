<template>
    <div >
      <TopChart class="dashgroup" />
      <MyChart />
    </div>
</template>

<script>
import MyChart from "./MyChart.vue";
import TopChart from "./TopChart.vue";

export default {
  components: {
    MyChart,
    TopChart
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

