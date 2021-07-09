<template>
  <div class="dashboard-main">
    <h5 style="text-align: center">{{ title.title }}</h5>
    <TChart class="dashgroup" :title="title" />
    <BChart :title="title" />
  </div>
</template>

<script>
import BChart from "./BChart.vue";
import TChart from "./TChart.vue";

export default {
  props: ["title"],
  components: {
    BChart,
    TChart,
  },
};
</script>


