<template>
  <div id="app" class = "row">
    <display/><display/>
  </div>
</template>

<script>
import Display from "./components/display.vue";

export default {
  name: "app",

  components: {
    Display,
  },
};
</script>