import Vue from "vue";
import Router from "vue-router";

import Calendar from "./components/Calendar";
import RegularTable from "./components/RegularTable";
import Log from "./components/Log";
import MyPage from "./components/MyPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "calendar",
      component: Calendar,
    },
    {
      path: "/regular-table",
      name: "regular-table",
      component: RegularTable,
    },
    {
      path: "/log",
      name: "Log",
      component: Log,
    },
    {
      path: "/my-page",
      name: "my-page",
      component: MyPage,
    },
  ],
});
