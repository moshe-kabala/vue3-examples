<template>
  <div>
    <label>
      default:
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
    <label>
      custom prop:
      <input
        :value="custom"
        @input="$emit('update:custom', $event.target.value)"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: String,
    custom: String,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
