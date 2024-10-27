import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/products",
  },
  {
    path: "/dashboard",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/products",
    component: () => import("@/views/OrderPage.vue"),
  },
  {
    path: "/products/:product",
    component: () => import("@/views/OrderProductPage.vue"),
  },
  {
    path: "/products/:product/checkout",
    component: () => import("@/views/OrderSummaryPage.vue"),
  },
  {
    path: "/confirmation",
    component: () => import("@/views/ConfirmationPage.vue"),
  },
  {
    path: "/loyalty-points",
    component: () => import("@/views/LoyaltyPointsPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
