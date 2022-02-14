<template>
  <Props
    prop1="Some value"
    :prop2="prop2"
    :prop3="object"
    @someEvent="onSomeEvent"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Props from "@/components/terms/Props.vue";

export default defineComponent({
  components: { Props },
  setup() {
    return {
      prop2: 5,
      object: {
        foo: "Some value",
        bar: 5,
      },
      onSomeEvent: () => {
        console.log("Some event");
      },
    };
  },
});
</script>

<style scoped></style>
