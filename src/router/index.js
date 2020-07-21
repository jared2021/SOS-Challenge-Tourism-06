import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
    import(/* webpackChunkName: "home" */ "../views/Home.vue")
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
    component: () =>
    import(/* webpackChunkName: "filter" */ "../views/Filter.vue")
  },
  {
    path: "/nameresult",
    name: "NameResult",
    component: () =>
    import(/* webpackChunkName: "nameresult" */ "../views/NameResult.vue")
  },
  {
    path: "/allbusinesses",
    name: "AllBusinesses",
    component: () =>
    import (/* webpackChunkName: "allbusinesses" */ "../views/AllBusinesses.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
