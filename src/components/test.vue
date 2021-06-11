<template>
<div style = "width: 250px;">
<VueSvgGauge
  :start-angle="-110"
  :end-angle="110"
  :value="3"
  :separator-step="1"
  :min="0"
  :max="4"
  :gauge-color="[{ offset: 0, color: '#347AB0'}, { offset: 100, color: '#8CDFAD'}]"
  :scale-interval="0.1"
/>
</div>
</template>

<script>
export default {
name: 'Gauge',
    props: {
      /**
       * Gauge value
       */
      value: {
        type: Number,
        default: 50,
      },
      /**
       * Gauge min value
       */
      min: {
        type: Number,
        default: 0,
      },
      /**
       * Gauge max value
       */
      max: {
        type: Number,
        default: 100,
      },
}
}
</script>

<style>

</style>