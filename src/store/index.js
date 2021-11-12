import Vue from "vue";
import Vuex from "vuex";
import outTimer from "@/store/outTimer";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clearTime: '',
    second: 0,
    minutes: 0,
    hours: 0,
    continueButton:false,
    isRunning: false,
    interval: null
  },
  mutations: {

  },
  actions: {
    toggleTimer() {
      if (this.state.isRunning) {
        clearInterval(this.state.interval);
      } else {
        this.state.interval = setInterval(() => {
          this.state.second = parseInt(this.state.second) + 1;
          if (this.state.second === 60) {
            this.state.second = 0
            this.state.minutes = parseInt(this.state.minutes) + 1;
          }
          if (this.state.minutes === 60) {
            this.state.minutes = 0
            this.state.hours = parseInt(this.state.hours) + 1;
          }
        }, 1000);
      }
      this.state.isRunning = !this.state.isRunning
    },
    // incrementTime() {
    //   this.second = parseInt(this.second) + 1;
    //   if (this.second === 60) {
    //     this.second = 0
    //     this.minutes = parseInt(this.minutes) + 1;
    //   }
    //   if (this.minutes === 60) {
    //     this.minutes = 0
    //     this.hours = parseInt(this.hours) + 1;
    //   }
    // },
  },
  modules: {
    outTimer
  },
});
