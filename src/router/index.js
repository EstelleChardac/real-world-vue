import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventDetails from "../views/EventDetails.vue";
import EventCreate from "../views/EventCreate.vue";
import Form from "../views/SimpleForm.vue";
import ShoppingList from "../views/ShoppingList.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/event/create",
    name: "EventCreate",
    component: EventCreate,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/shoppinglist",
    name: "ShoppingList",
    component: ShoppingList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
