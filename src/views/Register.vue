<template>
  <div>
    <div v-if="error" class="error">{{ error.message }}</div>
    <div class="uk-width-1-1@m">
      <div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
        <h3 class="uk-card-title uk-text-center">Регистрация</h3>
        <form @submit.prevent="press">
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon" uk-icon="icon: mail"></span>
              <input class="uk-input uk-form-large" type="text" v-model="email" placeholder="login" >
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline uk-width-1-1">
              <span class="uk-form-icon" uk-icon="icon: lock"></span>
              <input class="uk-input uk-form-large" type="password" v-model="password" placeholder="password" >
            </div>
          </div>
          <div class="uk-margin">
            <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Зарегистрироватся</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
require("firebase/auth");
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async press() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user.message);
        this.$router.replace({ name: "secret" });
      } catch (err) {
        console.log(err.i.message);
        this.error = err;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
