import Vue from "vue";
import Router from "vue-router";

import First from "./components/pages/First";
import Calendar from "./components/pages/Calendar";
import RegularTable from "./components/pages/RegularTable";
import Log from "./components/pages/Log";
import MyPage from "./components/pages/MyPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "first",
      component: First
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar
    },
    {
      path: "/regular-table",
      name: "regular-table",
      component: RegularTable
    },
    {
      path: "/log",
      name: "Log",
      component: Log
    },
    {
      path: "/my-page",
      name: "my-page",
      component: MyPage
    }
  ]
});
