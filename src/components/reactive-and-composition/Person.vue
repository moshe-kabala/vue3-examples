<template>
  <div style="border: 1px solid gray; padding: 8px; margin: 8px">
    {{ JSON.stringify(data, null, "\t") }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    data: Object,
  },
});
</script>

<style scoped></style>
