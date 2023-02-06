import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import PersonalInfo from "../pages/PersonalInfo.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/personal", component: PersonalInfo, name: "personal-info" },
  ],
});
