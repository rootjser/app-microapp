import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld";
import MyPage1 from "./my-page1.vue";
import MyPage2 from "./my-page2.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
  {
    path: "/mypage1",
    name: "mypage1",
    component: MyPage1,
  },
  {
    path: "/mypage2",
    name: "mypage2",
    component: MyPage2,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
