<template>
    <div class="row">
      <TopChart />
      <MyChart />
    </div>
</template>

<script>
import MyChart from "./MyChart.vue";
import TopChart from "./TopChart.vue";
//import test from "./components/test.vue";
//import zingchart from "./components/zingerchart.vue";

export default {
  components: {
    MyChart,
    TopChart,
    //test,
    //zingchart
  },
};
</script>
<style>
#dashgroup {
  height: 330px;
  width: 160px;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
}
</style>

