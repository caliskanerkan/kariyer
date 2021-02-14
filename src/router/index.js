import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import JobList from "../views/Job/JobList.vue";
import JobDetail from "../views/Job/JobDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/joblist",
    name: "Joblist",
    component: JobList
  },
  {
    path: "/jobdetail/:id",
    name: "Detail",
    component: JobDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
