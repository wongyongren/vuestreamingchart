<template>
  <div class="row">
    <displayORP />
    <displayTemp />
    <displayPh />
    <displaySalinity />
    <displayDO />
  </div>
</template>

<script>
import displayORP from "./displayORP.vue";
import displayTemp from "./displayTemp.vue";
import displayPh from "./displayPh.vue";
import displaySalinity from "./displaySalinity.vue";
import displayDO from "./displayDo1.vue";

export default {
  components: {
    displayORP,
    displayTemp,
    displayPh,
    displaySalinity,
    displayDO,
  },
};
</script>
<style>
.get-value {
  text-align: center;
  top: 80%;
  font-weight: bold;
  width: 50px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: Arial;
  font-size: 20px;
  fill-opacity: 1;
}

h5 {
  margin: 0px;
  font-size: 0.9125rem;
  -webkit-font-smoothing: antialiased;
  font-family: "Lato", sans-serif;
  font-weight: 500;
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
  border-radius: 5px;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  background-color: #111516;
  color: #66e35f;
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.85) !important;
}
</style>

