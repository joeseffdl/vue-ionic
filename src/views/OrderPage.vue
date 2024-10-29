<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <h1>Our Foods</h1>
        <ion-buttons slot="end">
          <ion-button aria-label="Cart Action" size="small" shape="round">
            <ion-icon src="src/assets/svg/cart.svg" class="size-[27px]" aria-hidden="true"></ion-icon>
          </ion-button>
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
        <CategoriesCard
          v-for="(category, index) in categories"
          :label="category"
          :key="index"
        />
      </ul>
      <div class="grid gap-2 grid-cols-2">
        <ProductCard
          v-for="{ id, name, category, price, src } in products"
          :router-link="`/${routes.BASE}/${JSON.stringify(Object.assign(products[0]))}`"
          :key="id"
          :id
          :name
          :category
          :price
          :src
        />
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
} from "@ionic/vue";
import { funnel } from "ionicons/icons";
import { ref, reactive } from "vue";
import ProductCard from "@/components/ui/card/ProductCard.vue";
import CategoriesCard from "@/components/ui/card/CategoriesCard.vue";

const categories = ref(["All", "Breakfast", "Chicken", "Seafood", "Dessert"]);
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
</style>
