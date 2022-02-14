<template>
  <div>
    <label>
      Select a number:
      <select v-model="num">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
      </select>
    </label>
  </div>
  <h4>If/Else If/Else</h4>

  <div v-if="num == 1">If</div>
  <div v-else-if="num == 2">Else If</div>
  <div v-else>Else</div>

  <h4>List</h4>
  <template v-for="item in list" :key="item">
    <div>{{ item }}</div>
  </template>

  <button @click="console.log('click button 1')">button 1</button>
  <button @click="print">button 2</button>
  <button class="test" @click="print('I am button 3', $event)">button 3</button>

  <div :class="['red', 'border']">Red with border</div>
  <div :class="{ red: num == 1, border: true }">Red if number is 1</div>
  <div :class="[{ green: num == 2}, 'border']">Green if number is 2</div>

</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      num: ref(1),
      list: ["a", "b", "c", "d"],
      print(...args: unknown[]) {
        console.log("click some button", ...args);
      },
      console,
    };
  },
});
</script>

<style scoped lang="scss">
.test {
  color: red;
}
.red {
  color: red;
}

.green {
  color: green;
}

.border {
  border: 1px solid red;
  padding: 8px;
  margin: 8px;
}
</style>
