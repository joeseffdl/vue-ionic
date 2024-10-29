<template>
  <ion-menu content-id="main-content" type="push">
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-list>
        <div class="flex items-center gap-5 mt-10 px-[17px]">
          <ion-icon
            class="rounded-full object-cover size-[67px]"
            src="src/assets/svg/menu/profile_67.svg"
            alt="Image of Chou Tzuyu as profile picture"
          />
          <ion-menu-toggle>
            <ion-button
              class="w-[136px]"
              aria-label="Navigate Loyalty Points"
              size="small"
              fill="clear"
              :router-link="routes.LOYALTY_POINTS"
            >
              <ion-icon slot="start" src="src/assets/svg/crown_48.svg" class="size-[22px]" aria-hidden="true"></ion-icon>
              <h3 class="text-black">0 Points</h3>
              <ion-icon
                  class="size-[17px]"
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
          v-for="(p, i) in appPages"
          :auto-hide="false"
          :class="{ 'pointer-events-none': i > 1 }"
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
              :src="`${routes.ICON}/${p.icon}`"
            ></ion-icon>
            <p class="text-sm font-bold pl-5">{{ p.title }}</p>
            <ion-badge
              slot="end"
              class="rounded-full text-[10px] font-medium"
              v-if="p.quantity"
              color="tertiary"
              >{{ p.quantity }}</ion-badge
            >
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
      <ion-button
        class="grid place-items-center w-40 px-4 rounded-2xl h-11"
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
import { chevronForwardOutline } from "ionicons/icons";

const selectedIndex = ref(0);
const routes = reactive({
  DASHBOARD: "/dashboard",
  ORDER: "/products",
  LOYALTY_POINTS: "/loyalty-points",
  ICON: "src/assets/svg/menu",
});
const appPages = reactive([
  {
    title: "Home",
    url: routes.DASHBOARD,
    icon: 'logo_20_22.svg'
  },
  {
    title: "Order Now!",
    url: routes.ORDER,
    icon: 'chicken_16.svg'
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: 'bell_16.svg',
    quantity: 4,
    disabled: true,
  },
  {
    title: "Store Locator",
    url: "/store-locator",
    icon: 'store_18.svg',
    disabled: true,
  },
  {
    title: `FAQ's`,
    url: "/faq",
    icon: 'faq_19.svg',
    disabled: true,
  },
  {
    title: `My Orders`,
    url: "/my-orders",
    icon: 'bag_18.svg',
    quantity: 2,
    disabled: true,
  },
  {
    title: `My Account`,
    url: "/my-account",
    icon: 'account_22.svg',
    disabled: true,
  },
  {
    title: `My Favorites`,
    url: "/my-favorites",
    icon: 'favorite_16.svg',
    disabled: true,
  },
  {
    title: `Order Tracker`,
    url: "/order-tracker",
    icon: 'tracker_20.svg',
    disabled: true,
  },
  {
    title: `Order History`,
    url: "/order-history",
    icon: 'history_16.svg',
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

