<template>
  <div>
    <button @click="key++">Increase Key</button>
    <p>current key: {{ key }}</p>
    <Key :key="String(key)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Key from "@/components/terms/Key.vue";

export default defineComponent({
  components: { Key },
  setup() {
    return {
      key: ref(0),
    };
  },
});
</script>

<style scoped></style>
