<template>
  <div>{{ prop1 }}</div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
const props = defineProps({
  prop1: String,
});

const value1 = ref(0);
</script>

<style scoped></style>
