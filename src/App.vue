<template>
  <BMICalculator :msg="msg" />
</template>

<script setup>
import BMICalculator from './components/BMICalculator.vue';
const msg = 'This is Andrew\'s Electron App for calculating BMI';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
