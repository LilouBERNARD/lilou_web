import { createRouter, createWebHistory } from "vue-router";
import Circuits from "../views/Circuits.vue";
import Drivers from "../views/Drivers.vue";

const routes = [
  { path: "/", name: "Circuits", component: Circuits },
  { path: "/drivers", name: "Drivers", component: Drivers },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
