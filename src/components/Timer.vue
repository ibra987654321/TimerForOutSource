<template>
  <div class="">
    <h2>{{title}}</h2>
    <ChildTimer :running="running" :stop-watch-name="title" :sending="exportT" :localName="this.local" :counter-name="this.counter"/>
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
<!--    <button-->
<!--        class="uk-button uk-button-primary uk-button-large "-->
<!--        @click="exportT"-->
<!--    >-->
<!--      export-->
<!--    </button>-->
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
    exportT: Boolean
  },
  data() {
    return {
      UserName: firebase.auth().currentUser.email,
      running: false,
      // exporting: false
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
    // exportT: function() {
    //   this.exporting = true
    // }
  },

};
</script>

<style scoped>
table{
  font-size: 35px;
}
</style>
