import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Secret from "../views/Secret.vue";

import firebase from "firebase";
require("firebase/auth");

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "login",
  //   component: Login,
  // },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "secret",
    component: Secret,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  // const requiresGuest = to.matched.some((record) => record.meta.re);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else if (requiresAuth && !isAuthenticated) {
    next("/secret");
  } else {
    next();
  }
});

export default router;
