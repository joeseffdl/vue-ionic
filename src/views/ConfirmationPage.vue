<template>
  <ion-page>
    <ion-content class="flex flex-col items-center justify-between text-center" :fullscreen="true">
      <ion-icon src="src/assets/svg/status_bar_375_44.svg" class="w-[375px] h-[44px]" aria-hidden="true"></ion-icon>
      <div class="grid place-items-center mt-[12.7%]">
        <ion-icon src="src/assets/svg/confirmation.svg" class="size-[161px]" aria-hidden="true"></ion-icon>
      </div>
      <h1 class="mt-[47px]">Order Received!</h1>
      <p class="px-4 mt-4">
        Your order <span>No. 19049585</span> has successfully take and now being
        processed. Kindly wait for our notification regarding your order.
      </p>
      <div class="flex flex-col items-center">
        <ion-button class="mt-[253px] pointer-events-none">Track Order</ion-button>
        <ion-button fill="clear" :router-link="routes.DASHBOARD">Back to Home</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/vue";

const routes = reactive({
  DASHBOARD: "/dashboard",
});
</script>
