import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import loggedIn from "../App";

Vue.component('loggedIn',loggedIn)
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
      import("../views/QuizSettings.vue"),
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
  },
  {
    path: "/components/SignupPage",
    name: "SignupPage",
    component: ()=>
        import("../components/SignupPage.vue")
  },

];

const router = new VueRouter({
  routes,
});

export default router;
