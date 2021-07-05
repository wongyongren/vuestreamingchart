<template>
  <div class="row">
    <displayORP />
    <displayTemp />
    <displayPh />
  </div>
</template>

<script>
import displayORP from "./displayORP.vue";
import displayTemp from "./displayTemp.vue";
import displayPh from "./displayPh.vue";

export default {
  components: {
    displayORP,
    displayTemp,
    displayPh,
  },
};
</script>
<style>
h5 {
  margin: 0px;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.row .product {
  margin: 2px;
}
.dashboard-size {
  width: 160px;
}
.status {
  display: flex;
  align-items: center;
  color: aqua;
}
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

