<template>
  <ion-page>
    <ion-header :translucent="true">
      <StatusBar />
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button aria-label="Back Action" text=""></ion-back-button>
        </ion-buttons>
        <h1>{{ product.category }}</h1>
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
      <div
        class="flex items-center justify-center bg-[#E9ECEF] h-[239px] rounded-2xl relative mb-4"
      >
        <Product1 class="w-3/4 h-[70%]" />
        <button
          class="flex items-center justify-center pointer-events-none shadow-lg size-11 rounded-[18px] !bg-white text-[--ion-color-primary] absolute bottom-0 right-0 translate-y-1/2 -translate-x-[22px]"
          aria-label="Add to Favorites action"
        >
          <ion-icon
            class="size-5"
            :icon="heartOutline"
            aria-hidden="true"
            slot="icon-only"
          ></ion-icon>
        </button>
      </div>
      <span class="text-black">{{ product.name }}</span>
      <RatingBig class="my-4" />
      <p class="text-[#6C757D] mb-[25px]">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Nam eu aliquam ipsum, sed accumsan metus. Maecenas neque
        nunc, tincidunt nec dui ac, rutrum consectetur ligula.
      </p>
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-[--ion-color-primary]">P 172</h1>
        <div class="w-1/2 grid grid-cols-3">
          <ion-button class="operator">-</ion-button>
          <h3 class="place-self-center">1</h3>
          <ion-button class="operator">+</ion-button>
        </div>
      </div>
      <h2 class="my-2">Beverages</h2>
      <ion-select
        class="pointer-events-none mb-2"
        label-placement="stacked"
        label="Choose Beverages"
        value="coke"
      >
        <ion-select-option value="coke">Coke</ion-select-option>
      </ion-select>
      <ul class="w-full my-4 gap-2 flex">
        <li
          v-for="size in sizes"
          class="w-full rounded-2xl bg-white px-4 py-3 text black text-center text-sm font-semibold first:text-white border-[1px] border-[#DEE2E6] first:bg-[--ion-color-tertiary]"
          :key="size"
        >
          {{ size }}
        </li>
      </ul>
      <h2 class="my-2">Add-Ons</h2>
      <div class="grid gap-2 mb-4">
        <div v-for="(item, index) in addOns" :key="item.name">
          <ion-card>
            <div class="grid grid-cols-3">
              <div class="flex items-center justify-center">
                <div v-if="index === 0">
                  <Tomato />
                </div>
                <div v-else>
                  <Rice />
                </div>
              </div>
              <div class="col-span-2 mt-2 mr-[10px]">
                <div class="flex justify-between">
                  <ion-card-title>{{ item.name }}</ion-card-title>
                  <ion-checkbox
                    :checked="index === 0"
                    :value="item.name"
                  ></ion-checkbox>
                </div>
                <ion-card-subtitle>{{ item.category }}</ion-card-subtitle>
                <div class="flex items-center justify-between mt-2">
                  <h3 class="text-[--ion-color-primary]">P {{ item.price }}</h3>
                  <Counter />
                </div>
              </div>
            </div>
          </ion-card>
        </div>
      </div>
      <Modal />
    </ion-content>
    <ion-footer class="ion-padding bg-white">
      <ion-button class="w-full" id="open-modal">Add to Bag</ion-button>
    </ion-footer>
  </ion-page>
</template>
<script setup lang="ts">
import {
  IonButtons,
  IonButton,
  IonBackButton,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonContent,
  IonCheckbox,
  IonHeader,
  IonIcon,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonToolbar,
  IonFooter,
} from "@ionic/vue";
import { cart, heartOutline } from "ionicons/icons";
import { ref, reactive } from "vue";
import { useRoute } from "vue-router";
import Modal from "@/component/Modal.vue";
import StatusBar from "@/component/svg/StatusBar.vue";
import Product1 from "@/component/svg/Product1.vue";
import RatingBig from "@/component/svg/RatingBig.vue";
import Tomato from "@/component/svg/Tomato.vue";
import Rice from "@/component/svg/Rice.vue";
import Counter from "@/component/svg/Counter.vue";

const route = useRoute();
const product = (typeof route.params.product === 'string') ? JSON.parse(route.params.product) : null

const modal = ref();
const sizes = ref(["Regular", "Large", "X-Large"]);
const addOns = reactive([
  { name: "Tomato Sauce", category: "Sauce", price: 49 },
  { name: "White Rice", category: "Rice", price: 25 },
]);
const routes = reactive({
  PRODUCT: "/products",
  CHECKOUT: `/products/${JSON.stringify(product)}/checkout`,
});

const dismiss = () => modal.value.$el.dismiss();

async function canDismiss(data?: any, role?: string) {
  return role !== "gesture";
}
</script>
<style scoped>
ion-select {
  --background: #f8f9fa;
  --border-radius: 16px;
  --border-width: 1px;
  --border-color: #dee2e6;
  --placeholder-color: #6c757d;
}
ion-card {
  --width: 100%;
  height: 100px;
  border-radius: 16px;
  background: #e9ecef;
  padding: 6px;
  margin: 0;
  box-shadow: none;
}

ion-checkbox {
  --color: var(--ion-color-tertiary);
  --checkmark-color: var(--ion-color-tertiary);
  --checkbox-background: white;
  --checkbox-background-checked: white;
  --border-color-checked: white;
  --border-radius: 6px;
  --border-width: 1px;
  --border-color: #dee2e6;
  pointer-events: none;
}
</style>
