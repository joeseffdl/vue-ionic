<template>
  <ion-page>
    <ion-header :translucent="true">
      <StatusBar />
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <div>
          <ion-button fill="clear">
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
        </div>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon
              :icon="logoIonic"
              aria-hidden="true"
              color="primary"
            ></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="flex gap-2 mt-7 mb-[22px] items-center">
        <LogoSmall />
        <div>
          <p>Anneoyong, Chou!</p>
          <h1>What do you want to eat?</h1>
        </div>
      </div>
      <ion-searchbar
        class="pointer-events-none pa-[18px]"
        value="try our new Steak Fries Veggies"
      ></ion-searchbar>
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
      <section class="mt-6 grid gap-2">
        <h2>Category</h2>
        <ul class="w-full gap-2 flex">
          <li
            v-for="index in 2"
            class="grid place-items-center w-[200px] h-[300px] rounded-2xl bg-[#DEE2E6] px-4 py-3 text-[#6C757D] text-center text-sm font-semibold first:text-white first:bg-[--ion-color-primary]"
            :key="index"
          >
            {{ index }}
          </li>
        </ul>
      </section>
      <section class="mt-6 flex flex-col">
        <h2>What's New?</h2>
        <ul class="w-full gap-2 flex">
          <li
            v-for="index in 1"
            class="grid place-items-center w-full h-[200.5px] rounded-2xl bg-[#DEE2E6] px-4 py-3 text-[#6C757D] text-center text-sm font-semibold first:text-white first:bg-[--ion-color-primary]"
            :key="index"
          >
            {{ index }}
          </li>
        </ul>
      </section>
      <section class="mt-6 flex flex-col">
        <h2>Most Popular</h2>
        <div class="grid gap-2 grid-cols-2">
          <div v-for="product in products" :key="product.id">
            <ion-card
              class="px-4 py-5 pointers-event-none"
            >
              <div class="h-1/2 pb-[26px]">
                <img
                  class="object-cover aspect-square"
                  src="https://docs-demo.ionic.io/assets/madison.jpg"
                  alt="Image of Product Steak Fries Veggies"
                />
              </div>
              <div class="h-1/2">
                <div class="flex flex-col">
                  <ion-card-title class="whitespace-nowrap">{{
                    product.name
                  }}</ion-card-title>
                  <ion-card-subtitle>{{ product.category }}</ion-card-subtitle>
                  <div class="flex justify-between items-center mt-[10px]">
                    <h3 class="text-[--ion-color-primary]">
                      P {{ product.price }}
                    </h3>
                    <Rating />
                  </div>
                </div>
              </div>
            </ion-card>
          </div>
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
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonMenuButton,
  IonSearchbar,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { logoIonic, chevronForwardOutline } from "ionicons/icons";
import StatusBar from "@/component/svg/StatusBar.vue";
import LogoSmall from "@/component/svg/LogoSmall.vue";
import Rating from "@/component/svg/Rating.vue";

const products = reactive([
  {
    id: 1,
    name: "Steak Fries Veggies",
    category: "Meat",
    price: 175,
    rating: 4.5,
    img: "",
  },
  {
    id: 2,
    name: "Chicken Salad",
    category: "Chicken",
    price: 172,
    rating: 4.5,
    img: "",
  },
  {
    id: 3,
    name: "Sorvetes Primavera ..",
    category: "Dessert",
    price: 185,
    rating: 4.5,
    img: "",
  },
  {
    id: 4,
    name: "Fried Chicken",
    category: "Chicken",
    price: 175,
    rating: 4.5,
    img: "",
  },
]);
const routes = reactive({
  ORDER_PAGE: "/products",
});
</script>
<style scoped>
ion-searchbar {
  --placeholder-color: #6c757d;
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

ion-card {
  --background: #e9ecef;

  box-shadow: none;
  border-radius: 16px;
  height: 273px;
  margin: 0;
}
</style>
