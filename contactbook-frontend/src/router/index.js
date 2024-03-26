import { createWebHistory, createRouter } from "vue-router";

import ContactBookVue from "../view/ContactBook.vue";
import ContactAddVue from "../components/ContactAdd.vue";
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
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("../view/ContactEdit.vue"),
    props: true,
  },
  {
    path: "/add",
    name: "contact.add",
    component: ContactAddVue,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
