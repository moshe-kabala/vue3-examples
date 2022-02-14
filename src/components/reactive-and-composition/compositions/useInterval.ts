import { onUnmounted, ref } from "vue";

export function useInterval(func: () => void, ms: number) {
  const key = ref<number | null>(null);

  function stop() {
    clearInterval(key.value!);
  }

  function start() {
    stop();
    key.value = setInterval(() => {
      if (typeof func == "function") func();
    }, ms);
  }

  onUnmounted(() => {
    stop();
  });

  return {
    start,
    stop,
  };
}
