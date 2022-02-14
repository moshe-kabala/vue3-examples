<template>
  <div style="border: 1px solid red; padding: 4px" class="m8">
    Override component
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.m8 {
  margin: 8px;
}
</style>
