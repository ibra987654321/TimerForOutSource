<template>
  <nav class="uk-navbar-container uk-margin" uk-navbar>
    <div class="uk-navbar-center">

      <div>
        <ul class="uk-navbar-nav">
<!--          <li class="uk-active"><router-link to="/">Домой</router-link></li>-->
          <li v-if="!LoggedIn"><router-link to="/login">войти</router-link> </li>
          <li v-if="!LoggedIn">
            <router-link to="/register">Зарегистрируйтесь</router-link>
          </li>
          <li v-if="LoggedIn"><router-link to="/secret">Секундомер</router-link> </li>
          <li v-if="LoggedIn">
            <a href="#">{{ currentUser }}</a>
          </li>
          <li v-if="LoggedIn">
            <a  @click="singout">
              <button class="uk-button uk-button-primary">Выйти</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import firebase from "firebase";
require("firebase/auth");

export default {
  components: {
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.LoggedIn = !!user;
    });
    if (firebase.auth().currentUser) {
      this.currentUser = firebase.auth().currentUser.email.split("@")[0];
    }
  },
  data() {
    return {
      LoggedIn: false,
      currentUser: false,
    };
  },
  methods: {
    async singout() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped></style>
