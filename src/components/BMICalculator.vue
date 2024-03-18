<template>
  <h1>BMI Calculator</h1>
  <h2>{{ msg }}</h2>
  <form action=""></form>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  msg: String
})

const msg = ref(props.msg);

onMounted(() => {
  console.log('Component is mounted')
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
