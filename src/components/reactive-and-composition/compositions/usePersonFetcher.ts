import { ref } from "vue";
import persons from "./persons";

export function usePersonFetcher() {
  const data = ref<any[]>([]);
  const isLoading = ref(false);

  const fetchFunc = async () => {
    isLoading.value = true;
    await sleep(1000);
    data.value = persons;
    isLoading.value = false;
  };
  return {
    data,
    fetch: fetchFunc,
    clear() {
      data.value = [];
    },
    get isLoading() {
      return isLoading.value;
    },
  };
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
