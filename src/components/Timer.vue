<template>
  <div class="">
    <h2>{{title}}</h2>
    <ChildTimer :running="running" :stop-watch-name="title" :sending="exportT" :localName="this.local" :counter-name="this.counter" :discharge="discharge"/>
    <div class="uk-button-group">
      <button
          class="uk-button uk-button-primary uk-button-large uk-padding-small uk-padding-remove-top uk-padding-remove-bottom"
          @click="startT"
      >
        start
      </button>
      <button
          class="uk-button uk-button-primary uk-button-large uk-padding-small uk-padding-remove-top uk-padding-remove-bottom"
          @click="stopT"
      >
        stop
      </button>
    </div>
  </div>
</template>
<script>
import ChildTimer from "@/components/ChildTimer";
import firebase from "firebase";
export default {
  name: "Timer",
  components: { ChildTimer },
  props: {
    title: String,
    local: String,
    counter: String,
    exportT: Boolean,
    discharge: Boolean
  },
  data() {
    return {
      UserName: firebase.auth().currentUser.email,
      running: false,
    };
  },
  methods: {
    stopT: function() {
      this.running = false;
      localStorage.removeItem(this.local)
    },
    startT: function() {
      this.running = true;
      localStorage.setItem(this.local, this.running)
    },
  },

};
</script>

<style scoped>
table{
  font-size: 35px;
}
</style>
