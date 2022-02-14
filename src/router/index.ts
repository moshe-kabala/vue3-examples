import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Key from "../views/UseKey.vue";
import UseVmodel from "../views/UseVmodel.vue";
import UseProps from "../views/UseProps.vue";
import UseState from "../views/UseState.vue";
import UseSlots from "../views/UseSlots.vue";

import UseOverride from "../views/UseOverride.vue";
import UseTermsBasic from "../components/terms/Basic.vue";

import ReactiveBasic from "../components/reactive-and-composition/Basic.vue";
import Composition from "../components/reactive-and-composition/Composition.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/terms-basic",
    name: "TermsBasic",
    component: UseTermsBasic,
  },

  {
    path: "/props",
    name: "Props",
    component: UseProps,
  },

  {
    path: "/state",
    name: "State",
    component: UseState,
  },

  {
    path: "/override",
    name: "Override",
    component: UseOverride,
  },

  {
    path: "/key",
    name: "Key",
    component: Key,
  },

  {
    path: "/slots",
    name: "Slots",
    component: UseSlots,
  },

  {
    path: "/vmodel",
    name: "Vmodel",
    component: UseVmodel,
  },


  // reactive and composition
  {
    path: "/reactive-basic",
    name: "ReactiveBasic",
    component: ReactiveBasic,
  },

  {
    path: "/composition",
    name: "Composition",
    component: Composition,
  },


  {
    path: "/timer",
    name: "Timer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Timer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
