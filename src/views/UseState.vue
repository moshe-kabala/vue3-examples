<template>
  <div>State component 1</div>
  <State />

  <div>State component 2</div>
  <State />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import State from "@/components/terms/State.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { State },
});
</script>

<style scoped></style>
