import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/collections",
    name: "Collections",
    component: () =>
      import(/* webpackChunkName: "collections" */ "../views/Collections.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;