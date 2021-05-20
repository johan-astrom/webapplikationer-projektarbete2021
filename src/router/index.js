import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quizsettings",
    name: "QuizSettings",
    component: () =>
      import("../views/Quiz.vue"),
  },
  {
    path: "/quiz",
    name: "MainQuiz",
    component: () =>
      import("../views/MainQuiz.vue"),
  },
  {
    path: "/konto",
    name: "Account",
    component: () =>
      import("../views/Account.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;
