<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button aria-label="Back Action" text=""></ion-back-button>
        </ion-buttons>
        <h1>{{ currentProduct?.category ?? "Product Category" }}</h1>
        <ion-buttons slot="end">
          <ion-button aria-label="Cart Action" size="small" shape="round">
            <ion-icon
              src="src/assets/svg/cart.svg"
              class="size-[27px]"
              aria-hidden="true"
            ></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div
        class="flex items-center justify-center bg-[#E9ECEF] h-[239px] rounded-2xl relative mb-4"
      >
        <ion-icon
          src="src/assets/svg/product_1.svg"
          class="w-3/4 h-[70%]"
          aria-hidden="true"
        ></ion-icon>
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
      <span class="text-black">{{ currentProduct?.name ?? "Product Name" }}</span>
      <ion-icon
        src="src/assets/svg/rating_87_18.svg"
        class="w-[87px] h-[18px] my-4"
        aria-hidden="true"
      ></ion-icon>
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
        <CategoriesCard
          v-for="(size, index) in sizes"
          :key="index"
          :label="size"
          variant="tertiary"
        />
      </ul>
      <h2 class="my-2">Add-Ons</h2>
      <div class="grid gap-2 mb-4">
        <div v-for="(item, index) in addOns" :key="item.name">
          <ion-card>
            <div class="grid grid-cols-3">
              <div class="flex items-center justify-center">
                <ion-icon
                  :src="`${item.src}`"
                  class="size-[88px]"
                  aria-hidden="true"
                ></ion-icon>
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
                  <ion-icon
                    src="src/assets/svg/counter_112_32.svg"
                    class="w-28 h-8"
                    aria-hidden="true"
                  ></ion-icon>
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
import { heartOutline } from "ionicons/icons";
import { ref, reactive, computed, defineProps } from "vue";
import Modal from "@/components/Modal.vue";
import CategoriesCard from "@/components/ui/card/CategoriesCard.vue";
import store from "@/store";

const props = defineProps<{ slug: string }>();

const sizes = ref(["Regular", "Large", "X-Large"]);
const addOns = reactive([
  {
    name: "Tomato Sauce",
    category: "Sauce",
    price: 49,
    src: "src/assets/svg/products/tomato_sauce_78.svg",
  },
  {
    name: "White Rice",
    category: "Rice",
    price: 25,
    src: "src/assets/svg/products/white_rice_88.svg",
  },
]);
const currentProduct = computed(() =>
  store.products.find((product) => product.slug === props.slug) ?? { name: '', category: '' }
);
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
