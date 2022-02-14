import { ref } from "vue";
import { secondsFromSecondAndMinutes } from "../utils";
import { useInterval } from "./useInterval";

export function useTimer() {
  const time = ref(0);
  const isPause = ref(false);
  const interval = useInterval(eachSecond, 1000);

  function eachSecond() {
    const newTime = time.value - 1;
    if (newTime <= 0) {
      reset();
    } else {
      time.value = newTime;
    }
  }

  function start([m = 0, s = 0]) {
    time.value = secondsFromSecondAndMinutes([m, s]);
    interval.start();
  }

  function reset() {
    time.value = 0;
    interval.stop();
  }

  function pauseOrResume() {
    isPause.value ? interval.start() : interval.stop();
    isPause.value = !isPause.value;
  }

  return {
    get time() {
      return time.value;
    },
    start,
    reset,
    pauseOrResume,
  };
}
