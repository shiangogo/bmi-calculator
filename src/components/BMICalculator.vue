<template>
  <h1>BMI Calculator</h1>
  <h2>{{ msg }}</h2>
  <form @submit="calculateBMI">
    <label for="weight">Weight (kg)</label>
    <input type="number" id="weight" v-model="weight" />
    <label for="height">Height (cm)</label>
    <input type="number" id="height" v-model="height" />
    <button type="submit">Calculate</button>
  </form>
  <p v-if="calculated">Your BMI is: {{ result }}</p>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  msg: String
})

const msg = ref(props.msg);
const weight = ref(0);
const height = ref(0);
const calculated = ref(false);
const result = ref(0);

async function calculateBMI(event) {
  event.preventDefault();
  const bmi = await window.bmi.calculateBMI(weight.value, height.value);
  calculated.value = true;
  result.value = bmi.toFixed(2);
}
</script>
