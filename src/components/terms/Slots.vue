<template>
  <div>
    <div>
      <slot name="header" :title="title"></slot>
    </div>

    <h4>List of "{{ name }}"</h4>
    <template v-for="(item, i) in list" :key="i">
      <slot name="item" :item="item" />
    </template>

    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type Item = {
  name: string;
  age: number;
};

export default defineComponent({
  props: {
    name: String,
    list: Array as PropType<Item[]>,
  },
  setup(props) {
    return {
      get title(): string {
        return `${props.name}'s title`;
      },
    };
  },
});
</script>

<style scoped></style>
