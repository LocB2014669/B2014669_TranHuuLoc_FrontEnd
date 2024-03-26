import { createWebHistory, createRouter } from "vue-router";

import ContactBookVue from "../view/ContactBook.vue";
const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBookVue,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
