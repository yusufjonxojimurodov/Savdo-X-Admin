import { createRouter, createWebHistory } from "vue-router";
import AuthView from "../pages/auth/AuthView.vue";
import AdminView from "../pages/dashboard/AdminView.vue";
import UsersView from "../pages/dashboard/users-page/UsersView.vue";
import ProductsView from "../pages/dashboard/products-page/ProductsView.vue";
import StatisticView from "../pages/dashboard/platform-statistic/StatisticView.vue";
import ForbiddenView from "../components/ForbiddenView.vue";
import useMe from "../stores/me.pinia";

const routes = [
  { path: "/", name: "Login", component: AuthView },
  {
    path: "/dashboard",
    component: AdminView,
    meta: { roles: ["admin"] },
    children: [
      {
        path: "users",
        name: "Foydalanuvchilar",
        component: UsersView,
        meta: { roles: ["admin"] },
      },
      {
        path: "products",
        name: "Mahsulotlar",
        component: ProductsView,
        meta: { roles: ["admin", "seller"] },
      },
      {
        path: "statistic",
        name: "Statistika",
        component: StatisticView,
        meta: { roles: ["admin"] },
      },
    ],
  },
  { path: "/403", name: "Forbidden", component: ForbiddenView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const meStore = useMe();

  if (!meStore.isAuth && to.path !== "/") {
    return next("/");
  }

  if (to.meta.roles && !to.meta.roles.includes(meStore.role)) {
    return next("/403");
  }

  next();
});

export default router;
