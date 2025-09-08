import { createRouter, createWebHistory } from "vue-router";
import AuthView from "../pages/auth/AuthView.vue";
import AdminView from "../pages/dashboard/AdminView.vue";
import UsersView from "../pages/dashboard/users-page/UsersView.vue";
import ProductsView from "../pages/dashboard/products-page/ProductsView.vue";
import StatisticView from "../pages/dashboard/platform-statistic/StatisticView.vue";

const routes = [
  { path: "/", name: "Login", component: AuthView },
  {
    path: "/dashboard",
    component: AdminView,
    children: [
      { path: "users", name: "Foydalanuvchilar", component: UsersView },
      { path: "products", name: "Mahsulotlar", component: ProductsView },
      { path: "statistic", name: "Statistika", component: StatisticView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
