<template>
  <ion-page>
    <ion-header>
      <StatusBar />
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <h1>Our Foods</h1>
        <ion-buttons slot="end">
          <ion-button aria-label="Cart Action" size="small" shape="round"
            ><ion-icon
              aria-hidden="true"
              slot="icon-only"
              :icon="cart"
              color="primary"
            ></ion-icon
          ></ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <ion-searchbar
        class="pointer-events-none pa-[18px]"
        show-clear-button="always"
        :clear-icon="funnel"
        value="try our new Beef Bibimbowl"
      ></ion-searchbar>
      <ul class="w-full my-4 gap-2 flex">
        <li
          v-for="category in categories"
          class="w-full rounded-2xl bg-[#DEE2E6] px-4 py-3 text-[#6C757D] text-center text-sm font-semibold first:text-white first:bg-[--ion-color-primary]"
          :key="category"
        >
          {{ category }}
        </li>
      </ul>
      <div class="grid gap-2 grid-cols-2">
        <div v-for="product in products" :key="product.id">
          <ion-card
            class="px-4 py-5"
            :class="{ 'pointers-event-none': product.id !== 1 }"
            :router-link="`/${routes.BASE}/${JSON.stringify(product)}`"
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
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonSearchbar,
  IonToolbar,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { cart, funnel } from "ionicons/icons";
import { ref, reactive } from "vue";
import StatusBar from "@/component/svg/StatusBar.vue";
import Rating from "@/component/svg/Rating.vue";

const categories = ref(["All", "Breakfast", "Chicken", "Seafood", "Dessert"]);
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
  {
    id: 5,
    name: "Steak Fries Veggies",
    category: "Meat",
    price: 175,
    rating: 4.5,
    img: "",
  },
  {
    id: 6,
    name: "Chicken Salad",
    category: "Chicken",
    price: 172,
    rating: 4.5,
    img: "",
  },
  {
    id: 7,
    name: "Sorvetes Primavera ..",
    category: "Dessert",
    price: 185,
    rating: 4.5,
    img: "",
  },
  {
    id: 8,
    name: "Fried Chicken",
    category: "Chicken",
    price: 175,
    rating: 4.5,
    img: "",
  },
]);
const routes = reactive({
  BASE: "products",
});
</script>

<style scoped>
ion-searchbar {
  --placeholder-color: #6c757d;
  --icon-color: #d71921;
  --clear-button-color: #d71921;
  --border-color: #dee2e6;
  --box-shadow: none;

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
