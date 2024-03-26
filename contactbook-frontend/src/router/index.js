import { createWebHistory, createRouter } from "vue-router";

import ContactBookVue from "../view/ContactBook.vue";
const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBookVue,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("../view/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
