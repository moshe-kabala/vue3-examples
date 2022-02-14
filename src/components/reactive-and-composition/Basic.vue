<template>
  <button @click="increase">Increase Value</button>
  <div>ref value: {{ refValue }}</div>
  <div>reactive value: {{ reactiveValue }}</div>
  <button @click="addField">Add Field</button>
  <button @click="changeField">Change Field</button>
  <div>computed value: {{ computedValue }}</div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
  watchPostEffect,
} from "vue";

export default defineComponent({
  setup() {
    // ref
    // how to access ref value
    // when to use ref
    const refValue = ref(0);

    // reactive
    const reactiveValue = reactive({
      a: 0,
      b: 0,
    });

    // computed
    const computedValue = computed(() => {
      console.log(`[Computed] value: ${refValue.value}`);
      return `The current value is ${refValue.value}` + 1;
    });

    // watch
    // when to use watch
    watch(
      () => {
        return refValue.value;
      },
      (newValue, oldValue) => {
        console.log(
          `[Watch] The new value is ${newValue} old value is ${oldValue}`
        );
      },
      // { immediate: true }
    );

    // watch effect
    watchEffect(() => {
      console.log(`[WatchEffect] The current value is ${refValue.value}`);
    });

    // helper
    let count = 0;

    return {
      refValue,
      computedValue,
      reactiveValue,
      increase() {
        refValue.value++;
      },
      addField() {
        (reactiveValue as any)[`field${count++}`] = 0;
      },
      changeField() {
        reactiveValue.b++;
      },
    };
  },
});
</script>

<style scoped></style>
