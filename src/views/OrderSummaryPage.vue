<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-icon src="src/assets/svg/status_bar_375_44.svg" class="w-[375px] h-[44px]" aria-hidden="true"></ion-icon>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button aria-label="Back Action" text=""></ion-back-button>
        </ion-buttons>
        <h1>Order Summary</h1>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="grid gap-2">
        <div class="flex gap-[10px] items-center">
          <ion-card class="w-full">
            <ion-card-title>Chou Tzuyu</ion-card-title>
            <ion-card-content class="px-0">
              <p>+63 912 345 6789</p>
              <p>chou.tzu-yu@email.com</p>
            </ion-card-content>
          </ion-card>
          <ion-icon
            class="aspect-16/9 text-[--ion-color-tertiary]"
            :icon="ellipsisVertical"
          ></ion-icon>
        </div>
        <ion-radio-group class="grid gap-2 mb-4" value="My Home Address">
          <div
            class="flex items-center gap-[10px]"
            v-for="(address, index) in registeredAddresses"
            :key="index"
          >
            <ion-card class="w-full">
              <div class="flex justify-between items-center">
                <ion-card-title>{{ address.title }}</ion-card-title>
                <ion-radio :value="address.title"></ion-radio>
              </div>
              <p>{{ address.text }}</p>
            </ion-card>
            <ion-icon
              class="aspect-16/9 text-[--ion-color-tertiary]"
              :icon="ellipsisVertical"
            ></ion-icon>
          </div>
        </ion-radio-group>
        <div class="grid gap-2 my-2">
          <h2>Orders</h2>
          <div class="flex gap-[10px] items-center">
            <ion-card class="w-full h-[181px]">
              <div class="flex gap-[18px] items-center">
                <img
                  class="object-cover h-[45px] w-[67px]"
                  src="https://docs-demo.ionic.io/assets/madison.jpg"
                  alt="Image of Product Steak Fries Veggies"
                />
                <div class="flex flex-col">
                  <ion-card-title class="mb-2">{{product.name}}</ion-card-title>
                  <ion-card-subtitle>1x Tomato Sauce</ion-card-subtitle>
                  <ion-card-subtitle>1x Regular Coke</ion-card-subtitle>
                  <ion-card-subtitle>1x Fried Chicken</ion-card-subtitle>
                </div>
              </div>
              <div class="w-full my-4 border-[1px] border-[#DEE2E6]" />
              <div class="flex items-center justify-between">
                <h3 class="text-[--ion-color-primary]">P 185</h3>
                <div class="w-1/2 grid grid-cols-3">
                  <ion-button class="operator">-</ion-button>
                  <h3 class="place-self-center">1</h3>
                  <ion-button class="operator">+</ion-button>
                </div>
              </div>
            </ion-card>
            <ion-icon
              class="aspect-16/9 text-[--ion-color-tertiary]"
              :icon="ellipsisVertical"
            ></ion-icon>
          </div>
        </div>
        <div class="grid gap-2 my-2">
          <h2>Payment Option</h2>
          <ion-radio-group class="grid gap-2 mb-[29px]">
            <div v-for="(payment, index) in paymentOptions" :key="index">
              <ion-card class="w-full h-[80px]">
                <div class="flex justify-between items-center mb-2">
                  <ion-card-title
                    >{{ payment.type }}
                    <span
                      v-if="payment?.value !== undefined && payment.value >= 0"
                      >({{ payment?.value ?? 0 }} points)</span
                    ></ion-card-title
                  >
                  <ion-radio></ion-radio>
                </div>
                <p>{{ payment.description }}</p>
              </ion-card>
            </div>
          </ion-radio-group>
          <div class="grid gap-2">
            <div class="flex justify-between">
              <ion-card-title>Subtotal</ion-card-title>
              <ion-card-title>P 185</ion-card-title>
            </div>
            <div class="flex justify-between">
              <ion-card-title>Delivery Charge</ion-card-title>
              <ion-card-title>P 59</ion-card-title>
            </div>
          </div>
          <ion-input
            class="mt-2 !px-4"
            label="Change for"
            label-placement="stacked"
            placeholder="e.g. 1,000"
          ></ion-input>
        </div>
      </div>
    </ion-content>
    <ion-footer class="ion-padding flex h-[83px] pt-[10px] bg-white">
      <div class="w-2/5">
        <p>Grand Total</p>
        <h3>P 244</h3>
      </div>
      <div class="w-3/5">
        <ion-button class="w-full h-[45px]" :router-link="routes.CONFIRMATION"
          >Place Order</ion-button
        >
      </div>
    </ion-footer>
  </ion-page>
</template>
<script setup lang="ts">
import {
  IonButtons,
  IonButton,
  IonBackButton,
  IonContent,
  IonHeader,
  IonFooter,
  IonIcon,
  IonPage,
  IonToolbar,
  IonRadioGroup,
  IonRadio,
  IonInput,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { ellipsisVertical } from "ionicons/icons";
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product =
  typeof route.params.product === "string"
    ? JSON.parse(route.params.product)
    : null;

const routes = reactive({
  CONFIRMATION: `/confirmation`,
});
const registeredAddresses = reactive([
  {
    title: "My Home Address",
    text: "No. 21 St. Agustin Street, Brgy. De Jose Delgado City 2234 Philippines",
    active: true,
  },
  {
    title: "Work/Office",
    text: "3rd flr Anyeong, Bldg. Seareal St. Joaqin City 3456 Philippines",
  },
]);
const paymentOptions = reactive([
  {
    type: "Cash on Delivery",
    description: "Pay when you received the order",
    active: true,
  },
  {
    type: "Loyalty Points",
    description: "Pay using you earned loyalty points",
    value: 0,
  },
  {
    type: "PayPal",
    logo: "",
    description: "A new tab will open to access you account",
  },
  {
    type: "paynamics",
    logo: "",
    description: "Choose paynamics services available from you",
  },
]);
</script>
<style scoped>
ion-card {
  width: 87.2%;
  height: 103px;
  border-radius: 16px;
  background: #e9ecef;
  padding: 16px;
  margin: 0;
  box-shadow: none;
}

ion-radio {
  --color: white;
  --color-checked: var(--ion-color-tertiary);
  border-radius: 50%;
  background: white;
  pointer-events: none;
}

ion-input {
  height: 60px;
  background: #f8f9fa;
  border-radius: 16px;
  border-width: 1px;
  border-color: #dee2e6;
  --placeholder-color: #dee2e6;
  color: #6c757d;
  font-size: 12px;
  font-weight: 400;
  pointer-events: none;
}
</style>
