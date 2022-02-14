<template>
  <div>Key component</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  setup() {

    onMounted(() => {
      console.log("key component is mounted");
    });

    onUnmounted(() => {
      console.log("key component is unmounted");
    });

    console.log("key component is creating");

    return {};
  },
});
</script>

<style scoped></style>
