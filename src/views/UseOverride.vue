<template>
  <p>Without override</p>
  <override />
  <p>With override</p>

  <override style="border: 5px solid green" class="m16" />
</template>

<script lang="ts">
import Override from "@/components/terms/Override.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Override },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.m16 {
  margin: 16px;
  background: yellowgreen;
}

</style>
