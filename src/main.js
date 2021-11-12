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
  apiKey: "AIzaSyCFXIrS28szsvlOgf8plri1RhICKRsy8cs",
  authDomain: "vue-app-85f72.firebaseapp.com",
  databaseURL: "https://vue-app-85f72-default-rtdb.firebaseio.com",
  projectId: "vue-app-85f72",
  storageBucket: "vue-app-85f72.appspot.com",
  messagingSenderId: "644829402646",
  appId: "1:644829402646:web:0a4156779c2c490b0b4737",
  measurementId: "G-Q2M97E4G84",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
