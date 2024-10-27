<template>
  <ion-menu content-id="main-content" type="push">
    <ion-content class="ion-padding-vertical" :fullscreen="true">
      <ion-list>
        <div class="flex items-center gap-5 px-[17px]">
          <img
            class="rounded-full object-cover size-[67px]"
            src="https://docs-demo.ionic.io/assets/madison.jpg"
            alt="Image of Chou Tzuyu as profile picture"
          />
          <ion-menu-toggle>
            <ion-button
              aria-label="Navigate Loyalty Points"
              size="small"
              fill="clear"
              :router-link="routes.LOYALTY_POINTS"
            >
              <ion-icon
                :icon="logoIonic"
                aria-hidden="true"
                slot="start"
                color="warning"
              ></ion-icon>
              <span class="font-semibold text-sm">0 Points</span>
              <ion-icon
                :icon="chevronForwardOutline"
                aria-hidden="true"
                slot="end"
                color="primary"
              ></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </div>
        <div class="px-4">
          <h1 class="font-bold text-2xl">Chou Tyuzu</h1>
          <p class="text-sm text-[#6C757D]">+63 912 345 6789</p>
        </div>
        <ion-menu-toggle
          class="relative px-4"
          :auto-hide="false"
          v-for="(p, i) in appPages"
          :key="i"
        >
          <ion-item
            class=""
            @click="selectedIndex = i"
            router-direction="root"
            :router-link="p.url"
            lines="none"
            :detail="false"
            :class="{ selected: selectedIndex === i }"
          >
            <ion-icon
              aria-hidden="true"
              :ios="p.iosIcon"
              :md="p.mdIcon"
            ></ion-icon>
            <p class="text-sm font-bold pl-5">{{ p.title }}</p>
            <ion-badge
              slot="end"
              class="rounded-full size-[19px] text-[10px] font-medium"
              v-if="p.quantity"
              color="tertiary"
              >{{ p.quantity }}</ion-badge
            >
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
      <ion-button
        class="grid place-items-center w-40 text-sm font-bold px-4 rounded-2xl h-11 bg-[--ion-color-primary] text-white capitalize mx-4"
        >Logout</ion-button
      >
    </ion-content>
  </ion-menu>
</template>
<script setup lang="ts">
import {
  IonBadge,
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuToggle,
} from "@ionic/vue";
import { ref, reactive } from "vue";
import {
  storefrontOutline,
  storefrontSharp,
  alertCircleOutline,
  alertCircleSharp,
  cartOutline,
  cartSharp,
  mailOutline,
  mailSharp,
  fastFoodOutline,
  fastFoodSharp,
  helpOutline,
  helpSharp,
  personOutline,
  personSharp,
  pinOutline,
  pinSharp,
  trailSignOutline,
  trailSignSharp,
  chevronForwardOutline,
  logoIonic,
} from "ionicons/icons";

const selectedIndex = ref(0);
const routes = reactive({
  DASHBOARD: "/dashboard",
  ORDER: "/products",
  LOYALTY_POINTS: "/loyalty-points",
});
const appPages = reactive([
  {
    title: "Home",
    url: routes.DASHBOARD,
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Order Now!",
    url: routes.ORDER,
    iosIcon: fastFoodOutline,
    mdIcon: fastFoodSharp,
  },
  {
    title: "Notifications",
    url: "/notifications",
    iosIcon: alertCircleOutline,
    mdIcon: alertCircleSharp,
    quantity: 4,
    disabled: true,
  },
  {
    title: "Store Locator",
    url: "/store-locator",
    iosIcon: storefrontOutline,
    mdIcon: storefrontSharp,
    disabled: true,
  },
  {
    title: `FAQ's`,
    url: "/faq",
    iosIcon: helpOutline,
    mdIcon: helpSharp,
    disabled: true,
  },
  {
    title: `My Orders`,
    url: "/my-orders",
    iosIcon: cartOutline,
    mdIcon: cartSharp,
    disabled: true,
  },
  {
    title: `My Account`,
    url: "/my-account",
    iosIcon: personOutline,
    mdIcon: personSharp,
    disabled: true,
  },
  {
    title: `My Favorites`,
    url: "/my-favorites",
    iosIcon: helpOutline,
    mdIcon: helpSharp,
    disabled: true,
  },
  {
    title: `Order Tracker`,
    url: "/order-tracker",
    iosIcon: pinOutline,
    mdIcon: pinSharp,
    disabled: true,
  },
  {
    title: `Order History`,
    url: "/order-history",
    iosIcon: trailSignOutline,
    mdIcon: trailSignSharp,
    disabled: true,
  },
]);

const path = window.location.pathname;
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex(
    (page) => page.title.toLowerCase() === path.toLowerCase(),
  );
}
</script>
<style scoped>
ion-button {
  width: 136px;
  height: 26px;
  box-shadow: none;
  --background: transparent;
}
ion-content {
  padding: 52px 0;
}
</style>
