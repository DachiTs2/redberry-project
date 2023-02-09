import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import PersonalInfo from "../pages/PersonalInfo.vue";
import Experience from "../pages/Experience.vue";
import Education from "../pages/Education.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/personal", component: PersonalInfo, name: "personal-info" },
    { path: "/experience", component: Experience, name: "experience" },
    { path: "/education", component: Education, name: "education" },
  ],
});
