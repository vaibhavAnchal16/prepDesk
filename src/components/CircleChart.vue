
<template>
  <div>
    <div ref="circleChart">

    </div>
  </div>
</template>

<script>
export default {
  app: 'CircleChart',
  props: ['value', 'name', 'color'],
  data() {
    return {

    };
  },
  mounted() {
    const options = {
      chart: {
        height: 330,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '80%',
          }
        }
      },
      series: [this.value],
      labels: [this.name],
      colors: [this.color],
    };
    new ApexCharts(this.$refs.circleChart, options).render();
  }
};
</script>

<style>
</style>
