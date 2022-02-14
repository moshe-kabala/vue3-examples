<template>
  <div v-if="data.length">
    <button @click="clear">Clear Data</button>
    <Person v-for="p in data" :key="p.id" :data="p" />
  </div>
  <div v-else-if="!data.length && !isLoading">
    The list is empty
    <button @click="fetch">Load</button>
  </div>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePersonFetcher } from "./compositions/usePersonFetcher";
import Person from "./Person.vue";

export default defineComponent({
  components: { Person },
  setup() {
    const fetcher = usePersonFetcher();
    return fetcher;
  },
});
</script>

<style scoped></style>
