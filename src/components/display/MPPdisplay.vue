<template>
  <div class="row" >
    <display :title="title.currentR1.mppOrp" />
    <display :title="title.currentR1.mppTemp" />
    <display :title="title.currentR1.mppPh" />
    <display :title="title.currentR1.mppSal" />
    <display :title="title.currentR1.mppDO" />
  </div>
</template>

<script>
import display from "./display.vue";

export default {
  components: {
    display,
  },
props: [ "title"],
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
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.row .product {
  margin-right: 0.5rem;
  margin-top: 0.5rem;
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

