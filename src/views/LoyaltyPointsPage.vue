<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-icon src="src/assets/svg/status_bar_375_44.svg" class="w-[375px] h-[44px]" aria-hidden="true"></ion-icon>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button src="src/assets/svg/menu.svg" color="primary"></ion-menu-button>
        </ion-buttons>
        <h1>Loyalty Points</h1>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <section class="mt-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-5">
            <ion-icon src="src/assets/svg/crown_48.svg" class="size-12" aria-hidden="true"></ion-icon>
            <h3>Beginner Tier</h3>
          </div>
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
        <p>Earn points by purchasing from our store. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
        <div class="h-60 grid place-items-center">
          <div class="grid place-items-center size-[142px] bg-white border-8 border-[#D7192133] outline outline-[#D7192133] outline-8 rounded-full">
            <h1 class="grid place-items-center rounded-full size-full shadow-lg">0 / 160</h1>
          </div>
        </div>
      </section>
      <section class="mt-5 grid gap-2">
        <div class="flex items-center justify-between">
          <h3>Rewards</h3>
          <ion-button fill="clear" class="size-fit pointer-events-none">
            How it Works
            <ion-icon
              class="size-[13px]"
              :icon="chevronForwardOutline"
              aria-hidden="true"
              slot="end"
              color="primary"
            ></ion-icon>
          </ion-button>
        </div>
        <ul class="w-full gap-2 flex">
          <CategoriesCard v-for="(tier, index) in tiers" :key="index" :label="tier" />
        </ul>
        <ion-card class="h-[100px] w-[343px] flex items-center mx-0 px-4 shadow-none rounded-2xl bg-[#E9ECEF]">
          <ion-icon src="src/assets/svg/steak_86.svg" class="size-[86px]" aria-hidden="true"></ion-icon>
          <div class="flex flex-col size-full">
            <div class="mt-[14px]">
              <ion-card-title class="text-sm font-bold">Steak Fries Veggies</ion-card-title>
              <ion-label class="text-black text-[12px] leading-[18px]">Meat</ion-label>
            </div>

            <div class="flex items-center justify-start gap-2 text-[--ion-color-primary]">
              <ion-icon src="src/assets/svg/crown_48.svg" class="size-[22px]" aria-hidden="true"></ion-icon>
              <h3>20 points</h3>
            </div>
          </div>
        </ion-card>
      </section>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonButtons,
  IonButton,
  IonCard,
  IonCardTitle,
  IonLabel,
  IonContent,
  IonIcon,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { chevronForwardOutline } from "ionicons/icons";
import { reactive } from "vue";
import CategoriesCard from "@/components/ui/card/CategoriesCard.vue";

const tiers = reactive(["All", "Beginner", "Intermediate", "Loyal"]);
</script>
