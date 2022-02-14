<template>
  <slots name="Some Name" :list="list">
    <template #header="{ title }">
      <h2>{{ title }} suffix</h2>
      <input placeholder="Name" type="text" v-model="name" />
      <input placeholder="Age" type="number" v-model="age" />
      <button :disabled="!name || !age" @click="add">Add</button>
    </template>

    <template #item="{ item }">
      <div class="item">
        <div>{{ item.name }}</div>
        <div>{{ item.age }}</div>
      </div>
    </template>

    <template #footer>
      <div>Some footer</div>
    </template>
  </slots>
</template>

<script lang="ts">
import { defineComponent, ref, shallowRef } from "vue";
import slots from "@/components/terms/Slots.vue";

export default defineComponent({
  components: { slots },
  setup() {
    const name = ref("");
    const age = ref<number | undefined>(undefined);

    const list = shallowRef([
      { name: "Bob", age: 20 },
      { name: "Alice", age: 30 },
    ]);

    return {
      list,
      name,
      age,
      add() {
        list.value = [
          ...list.value,
          { name: name.value, age: age.value as number },
        ];
        name.value = "";
        age.value = undefined;
      },
    };
  },
});
</script>

<style scoped>
.item {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
