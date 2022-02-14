<template>
  <button @click="$emit('someEvent', 'hello')">Say Hello 1</button>
  <button @click="sayHello">Say Hello 2</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, ctx) {
    // access to the slots
    // ctx.slots.default();

    return {
      sayHello() {
        ctx.emit("someEvent", "hello");
      },
    };
  },
});
</script>

<style scoped></style>
