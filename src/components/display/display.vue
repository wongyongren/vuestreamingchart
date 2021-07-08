<template>
    <div class="dashboard-main">
      <h5 style="text-align: center">ORP</h5>
      <TChart class="dashgroup" :title="title" :upperlimit="upperlimit" :lowerlimit="lowerlimit" />
      <BChart :title="title" :upperlimit="upperlimit" :lowerlimit="lowerlimit"/>
    </div>
</template>

<script>
import BChart from "./BChart.vue";
import TChart from "./TChart.vue";

export default {
  props:['upperlimit','title','lowerlimit'],
  components: {
    BChart,
    TChart
  },
};
</script>


