<template>
  <div class="timer-container">
    <div>
      <label>
        Minutes
        <input class="timer-input" min="0" type="number" v-model="inputMin" />
      </label>
      <label>
        Seconds
        <input class="timer-input" min="0" type="number" v-model="inputSec" />
      </label>
    </div>

    <div class="timer-button-container">
      <button class="timer-button" @click="timer.start([inputMin, inputSec])">
        START
      </button>
      <button class="timer-button" @click="timer.pauseOrResume">
        PAUSE / RESUME
      </button>
      <button class="timer-button" @click="timer.reset">RESET</button>
    </div>

    <h1 class="timer-time" v-text="formattedTime" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTimer } from "@/components/reactive-and-composition/compositions/useTimer";
import { formatTime } from "@/components/reactive-and-composition/utils";

export default defineComponent({
  setup() {
    const timer = useTimer();
    return {
      timer,
      inputMin: ref(0),
      inputSec: ref(0),
      get formattedTime() {
        return formatTime(timer.time);
      },
    };
  },
});
</script>

<style scoped>
.timer-input {
  width: 3em;
  padding: 0.5em 0.5em;
  border: 1px solid black;
  border-radius: 4px;
}

.timer-button {
  background: white;
  margin: .5em;
  padding: 0.5em 1em;
  border: 1px solid black;
  border-radius: 4px;
}

.timer-button-container {
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
}
.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer-time {
  font-size: 7em;
  font-weight: bold;
}
</style>
