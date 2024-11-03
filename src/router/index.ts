import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/splash",
  },
  {
    name: "SplashScreen",
    path: "/splash",
    component: () => import("@/views/SplashScreenPage.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    name: "Products",
    path: "/products",
    component: () => import("@/views/OrderPage.vue"),
  },
  {
    name: "Product",
    path: "/products/:slug",
    props: true,
    component: () => import("@/views/OrderProductPage.vue"),
    beforeEnter: (to, from, next) => {
      const productExists = store.products.find(
        (product) => product.slug === to.params.slug,
      );
      productExists ? next() : next({ name: "NotFound" });
    },
  },
  {
    name: "Checkout",
    path: "/products/:slug/checkout",
    props: true,
    component: () => import("@/views/OrderSummaryPage.vue"),
  },
  {
    name: "Confirmation",
    path: "/confirmation",
    component: () => import("@/views/ConfirmationPage.vue"),
  },
  {
    name: "LoyaltyPoints",
    path: "/loyalty-points",
    component: () => import("@/views/LoyaltyPointsPage.vue"),
  },
  {
    name: "NotFound",
    path: "/404",
    alias: "/:catchAll(.*)",
    component: () => import("@/views/errors/NotFoundPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
