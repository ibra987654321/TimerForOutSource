import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk0B_RUfZrO0t0DNDPOrT_m92e3y9Bj0s",
  authDomain: "timer-46e54.firebaseapp.com",
  projectId: "timer-46e54",
  storageBucket: "timer-46e54.appspot.com",
  messagingSenderId: "884154120259",
  appId: "1:884154120259:web:dd6e32219cf468bc9bfcf6",
  measurementId: "G-VLF6PE4SXP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
