<template>
  <div>
    <h1>Welcome {{ UserName }}</h1>
    <ul class="uk-grid-small uk-child-width-1-2 uk-child-width-1-4@s" uk-sortable="handle: .uk-card" uk-grid>
      <li>
        <div class="uk-card uk-card-primary uk-card-body uk-text-center">
          <timer :title="'Готов'"/>
        </div>
      </li>
      <li>
        <div class="uk-card uk-card-primary uk-card-body uk-text-center">
          <timer :title="'Перерыв'"/>
        </div>
      </li>
      <li>
        <div class="uk-card uk-card-primary  uk-card-body uk-text-center">
          <timer :title="'Обед'"/>
        </div>
      </li>
      <li>
        <div class="uk-card uk-card-primary  uk-card-body uk-text-center">
          <timer :title="'Проблемы'"/>
        </div>
      </li>
    </ul>

  </div>
</template>
<script>
import firebase from "firebase";
require("firebase/auth");
import Timer from "@/components/Timer";


export default {
  name: "Secret",
  components: { "timer" : Timer },
  data() {
    return {
      UserName: firebase.auth().currentUser.email,
    };
  },
};
</script>

<style scoped></style>
