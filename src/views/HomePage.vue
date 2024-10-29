<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <div>
          <ion-button class="flex items-center pointer-events-none" fill="clear">
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
        </div>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon src="src/assets/svg/menu/profile_37.svg" class="size-[37px]" aria-hidden="true"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="flex gap-2 mt-7 mb-[22px] items-center">
        <ion-icon src="src/assets/svg/logo_67_72.svg" class="w-[67px] h-[72px]" aria-hidden="true"></ion-icon>
        <div>
          <p>Anneoyong, Chou!</p>
          <h1>What do you want to eat?</h1>
        </div>
      </div>
      <ion-searchbar class="pointer-events-none pa-[18px]" value="try our new Steak Fries Veggies"></ion-searchbar>
      <section class="mt-5 grid gap-2">
        <div class="flex items-center justify-between">
          <h2>Special Offers!</h2>
          <ion-button fill="clear" class="size-fit pointer-events-none">
            View All
            <ion-icon
              class="size-[13px]"
              :icon="chevronForwardOutline"
              aria-hidden="true"
              slot="end"
              color="primary"
            ></ion-icon>
          </ion-button>
        </div>
      </section>
      <section class="grid">
        <ul class="w-full my-2 gap-2 flex">
          <li
            v-for="index in 2"
            class="grid place-items-center w-[312px] h-[138px] rounded-2xl bg-[#DEE2E6] px-4 py-3 text-[#6C757D] text-center text-sm font-semibold first:text-white first:bg-[--ion-color-primary]"
            :key="index"
          >
            {{ index }}
          </li>
        </ul>
      </section>
      <SectionCard
        heading="Category"
        :quantity="2"
        width="200"
        height="300"
      />
      <SectionCard heading="What's New?" :quantity="1" height="200.5" />
      <section class="mt-6 grid">
        <h2>Most Popular</h2>
        <div class="grid gap-2 grid-cols-2">
          <ProductCard
            v-for="{ id, name, category, price, src } in products"
            :key="id"
            :id
            :name
            :category
            :price
            :src
          />
        </div>
      </section>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button
          color="primary"
          aria-label="Order Now Action"
          :router-link="routes.ORDER_PAGE"
        >
          Order Now!
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import {
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonMenuButton,
  IonSearchbar,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";
import ProductCard from "@/components/ui/card/ProductCard.vue";
import SectionCard from "@/components/ui/card/SectionCard.vue";

const products = reactive([
  {
    id: 1,
    name: "Steak Fries Veggies",
    category: "Meat",
    price: 175,
    rating: 4.5,
    src: "steak_136.svg",
  },
  {
    id: 2,
    name: "Chicken Salad",
    category: "Chicken",
    price: 172,
    rating: 4.5,
    src: "chicken_salad_136.svg",
  },
  {
    id: 3,
    name: "Sorvetes Primavera ..",
    category: "Dessert",
    price: 185,
    rating: 4.5,
    src: "sorvetes_136.svg",
  },
  {
    id: 4,
    name: "Fried Chicken",
    category: "Chicken",
    price: 175,
    rating: 4.5,
    src: "fried_chicken_136.svg",
  },
]);
const routes = reactive({
  ORDER_PAGE: "/products",
});
</script>
<style scoped>
ion-searchbar {
  --placeholder-color: #f8f9fa;
  --icon-color: #d71921;
  --box-shadow: none;

  border-color: #dee2e6;
  background: #f8f9fa;
  border-width: 1px;
  border-radius: 16px;
  height: 3.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
}
</style>
