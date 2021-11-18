<template>
  <div>
    <h1>Welcome {{ UserName }}</h1>
    <ul class="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s uk-margin-large-bottom" uk-sortable="handle: .uk-card" uk-grid>
      <li>
        <div class="uk-card uk-card-primary uk-card-body uk-text-center">
          <timer :title="'Готов'" :local="'redy'" :counter="'redy-count'" :export-t="exporting"/>
        </div>
      </li>
      <li>
        <div class="uk-card uk-card-primary uk-card-body uk-text-center">
          <timer :title="'Перерыв'" :local="'brake'" :counter="'brake-count'" :export-t="exporting"/>
        </div>
      </li>
      <li>
        <div class="uk-card uk-card-primary  uk-card-body uk-text-center">
          <timer :title="'Обед'" :local="'lunch'" :counter="'lunch-count'" :export-t="exporting"/>
        </div>
      </li>
      <li>
        <div class="uk-card uk-card-primary  uk-card-body uk-text-center">
          <timer :title="'Проблемы'" :local="'problem'" :counter="'problem-count'" :export-t="exporting"/>
        </div>
      </li>
    </ul>
    <button
        class="uk-button uk-button-primary uk-button-large "
        :disabled="isDisabled"
        @click="exportT"
    >
      Отправить
    </button>

  </div>
</template>
<script>
import firebase from "firebase";
require("firebase/auth");
import Timer from "@/components/Timer";

export default {
  name: "Secret",
  components: { "timer" : Timer,},
  data() {
    return {
      UserName: firebase.auth().currentUser.email,
      date: new Date().toISOString().slice(0,10),
      running: false,
      exporting: false,
      isDisabled: false
    };
  },
  methods: {
    exportT() {
      this.exporting = true
      this.isDisabled = true
      setTimeout( () => {
        this.exporting = false
        this.isDisabled = false
      },3000)
    }
  }
};
</script>

<style scoped>
</style>
