<template>
  <div>
    <p>{{ time | secondsInMinutes }}</p>
  </div>
</template>

<script>
import firebase from "firebase";
import moment from "moment";

export default {
  name: "stopwatch",
  props: {
    running: {
      type: Boolean,
      default: false
    },
    sending: {
      type: Boolean,
      default: false
    },
    resetWhenStart: {
      type: Boolean,
      default: false
    },
    restWhenStop: {
      type: Boolean,
      default: false
    },
    localName: String,
    counterName: String,
    stopWatchName: String,
    discharge:Boolean
  },
  watch: {
    running: function(newVal) {
      if (newVal) this.startT();
      else this.stopT();
    },
    sending: function(newVal) {
      if (newVal) this.exportTimerData();
      else this.exportTimerData();
    },
    discharge: function() {
      this.stopT()
      localStorage.removeItem(this.counterName)
      localStorage.removeItem(this.localName)
      window.location.reload();
    }
  },
  mounted() {
    if (localStorage.getItem(this.localName)){
      this.startT()
    }
  },
  updated(){
    if (!localStorage.getItem(this.localName)) {
      this.stopT()
    }
  },
  data() {
    return {
      local: localStorage.getItem(this.counterName),
      time: localStorage.getItem(this.counterName) ? localStorage.getItem(this.counterName) : 0,
      timer: null,
      date: new Date().toISOString().slice(0,10),
      currentUser: firebase.auth().currentUser.email.split("@")[0],

    };
  },
  methods: {
    stopT: function() {
      clearInterval(this.timer);
      if (this.restWhenStop) this.resetT();
    },
    startT: function() {
      if (this.resetWhenStart) this.resetT();
      this.timer = setInterval(() => {
        this.time++;
        localStorage.setItem(this.counterName, this.time)
      }, 1000);
    },
    resetT: function() {
      this.time = 0;
    },
    secondsInMinutesT: function(seconds) {
      return moment("2015-01-01")
          .startOf("day")
          .seconds(seconds)
          .format("HH:mm:ss");
    },
    exportTimerData: function() {
      if (this.secondsInMinutesT(this.time) != "") {
        firebase
            .database()
            .ref("users/"+ this.currentUser+"/" + this.stopWatchName)
            .set({
              timer: this.secondsInMinutesT(this.time),
              date: this.date
            });
      } else {
        return false;
      }
    }
  },
  filters: {
    secondsInMinutes: function(seconds) {
      return moment("2015-01-01")
          .startOf("day")
          .seconds(seconds)
          .format("HH:mm:ss");
    }
  }
};
</script>

<style scoped>
p {
  font-weight: bold;
  font-size: x-large;
}
</style>
