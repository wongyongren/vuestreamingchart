<template>
  <div class="row">

    <displayORP/>
    <displayTemp/>
    <displayPh/>
    <displaySalinity/>
    <displayDO/>
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
    displayDO
  },
};
</script>
<style>
.row {
  display: flex;
  flex-wrap: wrap;
}
.row .product {
  margin: 2px;
}

</style>

