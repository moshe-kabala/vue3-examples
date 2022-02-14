<template>
  <Vmodel
    :modelValue="defValue"
    @update:modelValue="defValue = $event"
    :custom="customValue"
    @update:custom="customValue = $event"
  />
  <h4>Parent component values:</h4>
  <div>default value: {{ defValue }}</div>
  <div>custom value: {{ customValue }}</div>
</template>

<script lang="ts">
import Vmodel from "@/components/terms/Vmodel.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Vmodel },
  setup() {
    return {
      defValue: ref(""),
      customValue: ref(""),
    };
  },
});
</script>

<style scoped></style>
