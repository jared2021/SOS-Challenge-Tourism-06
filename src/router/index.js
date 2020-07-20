import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Filter from "@/views/Filter.vue";
import NameResult from "@/views/NameResult.vue";
import AllBusinesses from "@/views/AllBusinesses.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/filter",
    name: "Filter",
    component: Filter
  },
  {
    path: "/nameresult",
    name: "NameResult",
    component: NameResult
  },
  {
    path: "/allbusinesses",
    name: "AllBusinesses",
    component: AllBusinesses
  }
];

const router = new VueRouter({
  routes
});

export default router;
