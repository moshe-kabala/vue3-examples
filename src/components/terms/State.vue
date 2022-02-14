<template>
  <div class="state-container">
    <button @click="open = !open">Toggle</button>
    <div v-if="open">Some content</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      open: ref(false),
    };
  },
});
</script>

<style scoped>
.state-container {
  border: 1px solid gray;
  padding: 8px;
  margin: 8px;
}
</style>
