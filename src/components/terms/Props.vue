<template>
  <div>Props</div>
  <div>prop 1 : {{ prop1 }}</div>
  <div>prop 2 : {{ prop2 }}</div>
  <div>prop 3 : {{ JSON.stringify(prop3, null, 2) }}</div>
  <button @click="$emit('someEvent')">Emit SomeEvent</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type SomeType = {
  foo: string;
  bar: number;
};

export default defineComponent({
  props: {
    prop1: String,
    prop2: {
      type: Number,
      default: 0,
      require: false,
      validator: (value: number) => value >= 0,
    },
    prop3: Object as PropType<SomeType>,
  },
  emits: ["someEvent"],
    // setup(props, ctx) {
    //   props.prop3.
    //   return {};
    // },
});
</script>

<style scoped></style>
