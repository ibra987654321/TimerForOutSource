<template>
  <div class="">
    <h2>{{title}}</h2>
    <table class="uk-table">
      <thead>
        <tr >
          <th class="uk-text-center">час </th>
          <th class="uk-text-center">минута </th>
          <th class="uk-text-center">секунда </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span v-if="this.time.hours < 10">0</span>{{ this.time.hours }}</td>
          <td><span v-if="this.time.minutes < 10">0</span>{{ this.time.minutes }}</td>
          <td><span v-if="this.time.second < 10">0</span>{{ this.time.second }}</td>
        </tr>
      </tbody>
    </table>
    <button
      class="uk-button uk-button-primary uk-button-large "
      @click="toggleTimer"
    >
      {{ this.isRunning ? "stop" : "start" }}
    </button>
  </div>
</template>
<script>
export default {
  name: "Timer",
  props: {
    title: String,
    colors: String
  },
  data() {
    return {
      clearTime: '',
      time: {
        second: 0,
        minutes: 0,
        hours: 0,
      },
      continueButton:false,
      isRunning: false,
      interval: null
    };

  },
  methods: {
    toggleTimer() {
      if (this.isRunning) {
        clearInterval(this.interval);
      } else {
        this.interval = setInterval(() => {
          this.time.second = parseInt(this.time.second) + 1;
          if (this.time.second === 60) {
            this.time.second = 0
            this.time.minutes = parseInt(this.time.minutes) + 1;
          }
          if (this.time.minutes === 60) {
            this.time.minutes = 0
            this.time.hours = parseInt(this.time.hours) + 1;
          }
        }, 1000);
      }

      this.isRunning = !this.isRunning
    },
    exportTimer() {
      console.log(this.time);
    }
  },

};
</script>

<style scoped>
table{
  font-size: 35px;
}
</style>
