<template>
  <div class="row">

    <displayORP/>
    <displayTemp/>
    <displayPh/>
    
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
.row {
  display: flex;
  flex-wrap: wrap;
}
.row .product {
  margin: 2px;
}
</style>

